import { useInfiniteQuery } from 'react-query';
import { useRef, useCallback, useEffect } from 'react';
import axios from 'axios';

const Infinity = () => {
    // 10개씩 데이터 요청
    const LIMIT = 10;
    // 관찰대상
    const observerEl = useRef(null);

    const fetchRepositories = async (page) => {
        const response = await fetch(
            `https://api.github.com/search/repositories?q=topic:react&per_page=${LIMIT}&page=${page}`
        );
        return response.json();
    };

    const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        ['tickets'], // queryKey
        ({ pageParam = 1 }) => fetchRepositories(pageParam), // queryFn
        {
            getNextPageParam: (lastPage, allPages) => {
                // 마지막 페이지와 가져온 모든 페이지의 배열을 받음
                const nextPage = allPages.length + 1;
                return lastPage.items?.length !== 0 ? nextPage : undefined;
            },
        }
    );

    const handleObserver = useCallback(
        (entries) => {
            const [target] = entries;
            // 관찰대상이 교차되고 다음 페이지가 있는 경우
            if (target.isIntersecting && hasNextPage) {
                // 다음 페이지의 데이터 요청
                fetchNextPage();
            }
        },
        [fetchNextPage, hasNextPage]
    );

    useEffect(() => {
        const element = observerEl.current;
        const options = {
            threshold: 0,
        };
        // new IntersectionObserver(callback, oprions): 관찰자 인스턴스 생성
        const observer = new IntersectionObserver(handleObserver, options);
        // 관찰시작
        observer.observe(element);

        // unmount시 클린업
        return () => observer.unobserve(element);
    }, [fetchNextPage, hasNextPage, handleObserver]);

    return (
        <div className="app">
            {/* 성공적으로 읽어 오는 경우 list 그리기 */}
            {isSuccess &&
                data.pages.map((page) =>
                    page?.items?.map((comment) => (
                        <div
                            className="result"
                            key={comment.id}
                            style={{
                                height: '100px',
                                background: '#eee',
                                margin: '10px 0',
                            }}
                        >
                            <span>{comment.name}</span>
                            <p>{comment.description}</p>
                        </div>
                    ))
                )}
            {/* 관찰할 대상 */}
            <div className="loader" ref={observerEl}>
                {isFetchingNextPage && hasNextPage ? 'Loading...' : 'No search left'}
            </div>
        </div>
    );
};

export default Infinity;
