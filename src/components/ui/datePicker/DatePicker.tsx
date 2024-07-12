import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar as CalendarIcon } from "lucide-react";
import { ErrorMessage, useField } from "formik";
import DatePickerInput from "./DatePickerInput";
import { formatDate } from "@/lib/utils";
import DatePickerHeader from "./DatePickerHeader";

interface DatePickerProps {
    name: string;
    placeholder: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ name, placeholder }) => {
    const [field, meta, helpers] = useField<Date | null>(name);
    const { setValue } = helpers;
    const handleChange = (date: Date | null) => {
        setValue(date);
    };

    return (
        <div>
            <ReactDatePicker
                selected={field.value || null}
                renderCustomHeader={DatePickerHeader}
                onChange={handleChange}
                placeholderText={placeholder}
                showIcon
                toggleCalendarOnIconClick
                onInputClick={() => helpers.setTouched(true)}
                icon={<CalendarIcon />}
                dateFormat="MMMM d, yyyy"
                customInput={<DatePickerInput
                    value={field.value ? formatDate(field.value) : ""}
                    onChange={(value) => {
                        const selectedDate = new Date(value);
                        handleChange(isNaN(selectedDate.getTime()) ? null : selectedDate);
                    }}
                    onClick={() => {
                        const input = document.querySelector('.react-datepicker-wrapper input') as HTMLInputElement;
                        if (input) input.focus();
                    }}
                    error={!!meta.error}
                    touched={meta.touched}
                />}
                yearDropdownItemNumber={10}
                scrollableYearDropdown
                showYearDropdown
                showMonthDropdown
            />
            {meta.touched && meta.error ? (
                <div className="text-red-600 text-sm mt-1">
                    <ErrorMessage name={name} />
                </div>
            ) : null}
        </div>
    );
};

export default DatePicker;
