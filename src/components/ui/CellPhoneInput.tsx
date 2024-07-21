import * as React from "react";
import classNames from "classnames";
import { ErrorMessage, useField } from "formik";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./Select";
import { cn } from "@/lib/utils";
import { Input } from "./Input";

export interface CellPhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
}

function formatPhoneNumber(phoneNumber: string) {
    const cleaned = phoneNumber.replace(/\D/g, '');

    let formatted = '';
    for (let i = 0; i < cleaned.length; i++) {
        if (i === 3 || i === 5) {
            formatted += '-';
        }
        formatted += cleaned.charAt(i);
    }

    return formatted.slice(0, 9);
}

const CellPhoneInput = React.forwardRef<HTMLInputElement, CellPhoneInputProps>(({ className, type, ...props }, ref) => {
    const [selectedValue, setSelectedValue] = React.useState<string>("");
    const [value, setValue] = React.useState<string>("")
    const [field, meta, helpers] = useField(props);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatPhoneNumber(e.target.value);
        setValue(formattedValue)
        helpers.setValue(`+994${selectedValue}-${formattedValue}`);

    };
    const handleSelectChange = (selectedValue: string) => {
        setSelectedValue(selectedValue)
        helpers.setValue(`+994${selectedValue}-${value}`);
    };
    return (
        <div className={`${props?.label && "h-[80px]"}`}>
            <label htmlFor={props.name} className="text-black font-medium text-[15px]">{props.label}</label>
            <div className="flex items-center gap-[14.45px]">
                <Input name="prefix" className={`w-[64px] min-[400px]:w-[88px]`} defaultValue={"+994"} readOnly />
                <Select onValueChange={handleSelectChange}>
                    <SelectTrigger className={`w-[64px] min-[400px]:w-[88px] text-black text-[15px] font-medium shrink-0 ${(meta.error && meta.touched) && (selectedValue.length == 0 && meta.touched) && "border-red-600"}`}>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectGroup>
                            <SelectItem value="10">10</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                            <SelectItem value="51">51</SelectItem>
                            <SelectItem value="55">55</SelectItem>
                            <SelectItem value="70">70</SelectItem>
                            <SelectItem value="77">77</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <input
                    type={type}
                    className={cn(
                        classNames({
                            "bg-background text-[15px] font-medium outline-none ring-offset-background placeholder:text-muted-foreground text-black flex h-10 w-full rounded-md border border-solid border-gray-lightest-alt2 px-4 py-2 text-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-50":
                                true,
                            "focus:border-gray-medium": !meta.error || !meta.touched || field.value,
                            "border-red-600": meta.error && meta.touched,
                        }),
                        className,
                    )}
                    ref={ref}
                    value={value}
                    {...props}
                    onChange={handleChange}
                />
            </div>
            {meta.touched && meta.error ? (
                <div className='mt-1 text-sm text-red-600'>
                    <ErrorMessage name={props.name} />
                </div>
            ) : null}
        </div>
    );
});
CellPhoneInput.displayName = "CellPhoneInput";

export { CellPhoneInput };
