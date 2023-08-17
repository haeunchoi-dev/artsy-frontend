import axiosInstance from './';

const ticketApi = {
    endpoint: {
        tickets: () => `/api/user/tickets`,
    },

    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },

    //   호출할때 const { data } = useQuery(
    //     ["tickets", categoryId],
    //     ticketApi.getTickets,
    //   );
    getTickets: async ({ queryKey }) => {
        try {
            const [_, categoryId] = queryKey;
            // const url = categoryId !== 0
            //     ? `${ticketApi.endpoint.tickets()}?categoryId=${categoryId}`
            //     : `${ticketApi.endpoint.tickets()}`;
            // const response = await axiosInstance.get(url, {
            //     headers: { ...ticketApi.headers },
            // });

            // console.log(response);

            // return response;

            //api 대신 dummy data 사용
            let data = [
                {
                    id: 1,
                    categoryId: 1,
                    categoryName: '영화',
                    categoryColor: '#A888FF',
                    title: '영화제목',
                    showDate: '2023-08-14',
                    place: '성수 메가박스',
                    price: 100000,
                    rating: 3,
                    review: '오늘 영화봄',
                    createDate: 'Unknown Type: Timestamp',
                    updateDate: 'Unknown Type: Timestamp',
                    files: [
                        {
                            id: 1,
                            imageUrl: 'http://localhost:5000/api/api-docs/',
                            originalName: '원래이름.jpg',
                            fileName: '변경된이름.jpg',
                            width: 100,
                            height: 100,
                            extension: 'jpg',
                            fileSize: 1000,
                            isPrimary: true,
                            createDate: 'Unknown Type: Timestamp',
                        },
                    ],
                },
                {
                    id: 2,
                    categoryId: 1,
                    categoryName: '영화',
                    categoryColor: '#A888FF',
                    title: '영화제목',
                    showDate: '2023-08-14',
                    place: '성수 메가박스',
                    price: 100000,
                    rating: 4,
                    review: '오늘 영화봄',
                    createDate: 'Unknown Type: Timestamp',
                    updateDate: 'Unknown Type: Timestamp',
                    files: [
                        {
                            id: 1,
                            imageUrl: 'http://localhost:5000/api/api-docs/',
                            originalName: '원래이름.jpg',
                            fileName: '변경된이름.jpg',
                            width: 100,
                            height: 100,
                            extension: 'jpg',
                            fileSize: 1000,
                            isPrimary: true,
                            createDate: 'Unknown Type: Timestamp',
                        },
                    ],
                },
                {
                    id: 3,
                    categoryId: 2,
                    categoryName: '뮤지컬',
                    categoryColor: '#A888FF',
                    title: '뮤지컬 제목',
                    showDate: '2023-08-14',
                    place: '성수 메가박스',
                    price: 100000,
                    rating: 3,
                    review: '오늘 영화봄',
                    createDate: 'Unknown Type: Timestamp',
                    updateDate: 'Unknown Type: Timestamp',
                    files: [],
                },
                {
                    id: 4,
                    categoryId: 3,
                    categoryName: '전시',
                    categoryColor: '#A888FF',
                    title: '전시 제목',
                    showDate: '2023-08-14',
                    place: '성수 메가박스',
                    price: 100000,
                    rating: 3,
                    review: '오늘 영화봄',
                    createDate: 'Unknown Type: Timestamp',
                    updateDate: 'Unknown Type: Timestamp',
                    files: [],
                },
            ];
            // let data = [
            //     {
            //         id: 1,
            //         category: '영화',
            //         title: '영화제목입니다',
            //         showDate: '2023-08-14',
            //         rating: '5',
            //     },
            //     {
            //         id: 2,
            //         category: '뮤지컬',
            //         title: '뮤지컬제목입니다',
            //         showDate: '2023-08-14',
            //         rating: '4',
            //     },
            //     {
            //         id: 2,
            //         category: '뮤지컬',
            //         title: '뮤지컬제목입니다',
            //         showDate: '2023-08-14',
            //         rating: '4',
            //     },
            //     {
            //         id: 4,
            //         category: '콘서트',
            //         title: '콘서트제목제목입니다',
            //         showDate: '2023-08-14',
            //         rating: '4',
            //     },
            //     {
            //         id: 5,
            //         category: '연극',
            //         title: '연극제목',
            //         showDate: '2023-08-14',
            //         rating: '4',
            //     },
            //     {
            //         id: 3,
            //         category: '전시',
            //         title: '전시제목',
            //         showDate: '2023-08-14',
            //         rating: '4',
            //     },
            // ];
            if (categoryId > 0) {
                data = data.filter((item) => item.categoryId === categoryId);
            }

            return data;
        } catch (err) {
            // err 핸들링
        }
    },
};

export default ticketApi;
