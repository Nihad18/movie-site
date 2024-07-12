import * as React from "react"
import classNames from "classnames";
import { ErrorMessage, useField } from "formik";

import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <input
          type={type}
          className={cn(
            classNames({
              "flex h-10 w-full rounded-md focus:outline-none border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground border-solid border-gray-300 transition-all disabled:cursor-not-allowed disabled:opacity-50":
                true,
              "focus:border-stone-900": !meta.error || !meta.touched,
              "border-red-600": meta.error && meta.touched,
            }), className
          )}
          ref={ref}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className="text-red-600 text-sm mt-1">
            <ErrorMessage name={props.name} />
          </div>
        ) : null}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
