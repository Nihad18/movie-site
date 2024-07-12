import { getYear, getMonth } from "date-fns";
import { months, years } from "@/lib/utils";
import { ReactDatePickerCustomHeaderProps } from "react-datepicker";

const DatePickerHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
}: ReactDatePickerCustomHeaderProps) => (
    <div style={{ margin: 10, display: "flex", justifyContent: "space-between" }}>
        <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className="arrowIcons">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
            </svg>
        </button>
        <select
            value={getYear(date)}
            onChange={(e) => changeYear(parseInt(e.target.value))}
            className="dataPicker-select"
        >
            {years.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
        <select
            value={months[getMonth(date)]}
            onChange={(e) => changeMonth(months.indexOf(e.target.value))}
            className="dataPicker-select"
        >
            {months.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
        <button type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled} className="arrowIcons">
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
        </button>
    </div>
);

export default DatePickerHeader;
