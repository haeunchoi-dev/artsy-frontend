import styled from 'styled-components';

const DatePickerWrap = styled.div`
    .react-datepicker-manager,
    .react-datepicker-wrapper,
    .react-datepicker__input-container {
        width: 100%;
    }

    .react-datepicker__header {
        background-color: white;
        border-bottom: none;
        padding: 0;
    }

    .react-datepicker__header,
    .react-datepicker__header--time {
        font-weight: 500;
    }

    .react-datepicker-time__header {
        background-color: ${({ theme }) => theme.colors.point1};
        font-size: ${({ theme }) => theme.fontSizes.body};
        font-weight: 500;
        height: 40px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .custom-header {
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: ${({ theme }) => theme.fontSizes.body};
        font-weight: 500;
        background-color: ${({ theme }) => theme.colors.point1};

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border: 0;
            background-color: transparent;
            cursor: pointer;
        }
    }

    .react-datepicker__day--outside-month {
        color: #a8a8a8;
        pointer-events: none;
    }

    .react-datepicker__month-container {
        width: 25rem;
        font-size: ${({ theme }) => theme.fontSizes.text};
    }

    .react-datepicker__time-container {
        width: 10rem;
        font-size: ${({ theme }) => theme.fontSizes.text};
    }

    .react-datepicker-time__header {
        font-size: ${({ theme }) => theme.fontSizes.body};
        font-weight: 500;
    }

    .react-datepicker__day--selected {
        background-color: ${({ theme }) => theme.colors.point1};
        border-radius: ${({ theme }) => theme.borderRadius.large};

        &:hover {
            background-color: ${({ theme }) => theme.colors.point1};
            border-radius: ${({ theme }) => theme.borderRadius.large};
        }
    }

    .react-datepicker__day-names {
        margin-top: 10px;
    }

    .react-datepicker__week {
        margin-top: 10px;
    }

    .react-datepicker__triangle {
        display: none;
    }

    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
        width: 30px;
        height: 30px;
        vertical-align: middle; /* 텍스트 수직 가운데 정렬 */
        line-height: 2; /* 수직 가운데 정렬을 위한 줄 높이 조절 */
    }

    .react-datepicker__time-list {
        width: 90%;
        li {
            margin-right: 10px;

            height: 30px;
            margin-bottom: 10px;
        }
    }

    .react-datepicker__day--keyboard-selected,
    .react-datepicker__month-text--keyboard-selected,
    .react-datepicker__quarter-text--keyboard-selected,
    .react-datepicker__year-text--keyboard-selected {
        background-color: #fff;
    }

    .react-datepicker__time-container
        .react-datepicker__time
        .react-datepicker__time-box
        ul.react-datepicker__time-list
        li.react-datepicker__time-list-item--selected {
        background-color: ${({ theme }) => theme.colors.point1};
        font-weight: 500;
        color: white;
        border-radius: ${({ theme }) => theme.borderRadius.large};
    }

    .react-datepicker__time-box {
        ::-webkit-scrollbar {
            width: 13px; /* 스크롤바의 너비 */
        }

        ::-webkit-scrollbar-thumb {
            height: 30%; /* 스크롤바의 길이 */
            background: ${({ theme }) => theme.colors.point1};

            border-radius: ${({ theme }) => theme.borderRadius.large};
        }

        ::-webkit-scrollbar-track {
            background: #8b97ff33; /*스크롤바 뒷 배경 색상*/
        }
    }
`;

export { DatePickerWrap };
