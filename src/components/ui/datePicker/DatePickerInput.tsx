import React, { ForwardedRef, forwardRef } from "react";
import classNames from "classnames";

interface DatePickerInputProps {
    value: string;
    onChange: (val: string) => void;
    onClick: () => void;
    error: boolean;
    touched: boolean;
}

const DatePickerInput: React.ForwardRefRenderFunction<HTMLInputElement, DatePickerInputProps> = (
    { value, onChange, error, touched, onClick },
    ref: ForwardedRef<HTMLInputElement>
) => (
    <input
        ref={ref}
        value={value}
        onClick={onClick}
        onChange={(e) => onChange(e.target.value)}
        className={classNames(
            "flex h-10 w-full rounded-md border focus:outline-none bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground border-solid border-gray-300 transition-all disabled:cursor-not-allowed disabled:opacity-50",
            {
                "focus:border-stone-900": !error || !touched,
                "border-red-600": error && touched,
            }
        )}
        name="dateOfBirth"
        id="dateOfBirth"
        placeholder="Date of birth"
        readOnly={true}
    />
);

export default forwardRef(DatePickerInput);
