import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import * as D from './DatePicker.styles';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const Datepicker = ({ selected, onChange, customInput, minDate, maxDate, minTime, maxTime, filterTime }) => {
    return (
        <D.DatePickerWrap>
            <ReactDatePicker
                selected={selected}
                onChange={onChange}
                showTimeInput
                locale={ko}
                timeIntervals={10}
                timeFormat="HH:mm"
                timeInputLabel="관람 시간"
                dateFormat="yyyy년 MM월 dd일 HH:mm"
                customInput={customInput}
                minDate={minDate}
                maxDate={maxDate}
                minTime={minTime}
                maxTime={maxTime}
                shouldCloseOnSelect={false}
                filterTime={filterTime}
                containerStyle={{ width: '100%' }}
                renderCustomHeader={({
                    monthDate,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                }) => (
                    <div className="custom-header">
                        <button onClick={() => decreaseMonth()} disabled={prevMonthButtonDisabled}>
                            <SlArrowLeft />
                        </button>
                        <div>
                            {monthDate.getFullYear()}년 {monthDate.getMonth() + 1}월
                        </div>
                        <button onClick={() => increaseMonth()} disabled={nextMonthButtonDisabled}>
                            <SlArrowRight />
                        </button>
                    </div>
                )}
            />
        </D.DatePickerWrap>
    );
};

export default Datepicker;
