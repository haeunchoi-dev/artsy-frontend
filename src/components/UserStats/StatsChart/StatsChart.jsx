import React from 'react';
import * as S from './StatsChart.styles';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import LeftIconUrl from '@assets/icons/icon-left.png';
import RightIconUrl from '@assets/icons/icon-right.png';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatsChart = ({ chartdata, year, month, onLeft, onRight, cntSum }) => {
    const categoryNameArr = chartdata?.map((item) => item.categoryName);
    const categoryColorArr = chartdata?.map((item) => item.categoryColor);
    const cntArr = chartdata?.map((item) => item.cnt);

    const data = {
        labels: cntSum === 0 ? ['없음'] : categoryNameArr,
        datasets: [
            {
                label: '관람 횟수',
                data: cntSum === 0 ? [1] : cntArr,
                backgroundColor: cntSum === 0 ? ['#A4A4A4'] : categoryColorArr,
                borderColor: cntSum === 0 ? ['#A4A4A4'] : categoryColorArr,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'right',
            },
        },
    };
    return (
        <S.Container>
            <S.TextWrap>
                <S.ImageWrap onClick={onLeft}>
                    <img src={LeftIconUrl} />
                </S.ImageWrap>
                <h5>
                    {year}년 {month}월
                </h5>
                <S.ImageWrap onClick={onRight}>
                    <img src={RightIconUrl} />
                </S.ImageWrap>
            </S.TextWrap>

            <Doughnut data={data} options={options} />
        </S.Container>
    );
};

export default StatsChart;
