import * as React from "react";
import classNames from "classnames";
import { ErrorMessage, useField } from "formik";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
    const [field, meta] = useField(props);
    const [showPassword, setShowPassword] = React.useState(false);

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className={`${props?.label ? (props.name === "nameSurname" ? "h-[96px] min-[601px]:h-[80px]" : "h-[80px]") : ""}`}>
            <label htmlFor={props.name} className="text-black font-medium text-[15px]">{props.label}</label>
            <div className="relative">
                <input
                    type={showPassword ? "text" : type}
                    className={cn(
                        classNames({
                            "bg-background text-[15px] font-medium outline-none ring-offset-background placeholder:text-muted-foreground text-black flex h-10 w-full rounded-md border border-solid border-gray-lightest-alt2 px-4 py-2 text-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-50":
                                true,
                            "focus:border-gray-medium": !meta.error || !meta.touched,
                            "border-red-600": meta.error && meta.touched,
                        }),
                        className,
                    )}
                    ref={ref}
                    {...field}
                    {...props}
                />
                {type === "password" && (
                    <button
                        type="button"
                        onClick={toggleShowPassword}
                        className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                    >
                        {showPassword ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.522 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A9.6 9.6 0 0112 19.5c-4.477 0-8.268-2.943-9.542-7C2.84 9.748 5.06 7.126 8 6.217M21.742 12.28C20.459 16.337 16.668 19.28 12.19 19.28c-.867 0-1.717-.108-2.537-.317m5.355-1.232a5.991 5.991 0 01-2.128-2.264m-3.244-3.244a5.992 5.992 0 00-.716-5.745M3 3l18 18"></path>
                            </svg>
                        )}
                    </button>
                )}
            </div>
            {meta.touched && meta.error ? (
                <div className='mt-1 text-sm text-red-600'>
                    <ErrorMessage name={props.name} />
                </div>
            ) : null}
        </div>
    );
});

Input.displayName = "Input";

export { Input };
