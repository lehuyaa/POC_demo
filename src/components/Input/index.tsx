import { ComponentProps, forwardRef } from "react";

type Props = Omit<ComponentProps<"input">, ""> & {
  label?: any;
  prefix?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, prefix, className, ...rest }, ref) => {
    return (
      <div>
        {label && (
          <label
            htmlFor={rest.id}
            className="block text-sm font-bold text-white"
          >
            {label}
          </label>
        )}
        <div className="mt-1 relative rounded-md shadow-sm">
          {prefix && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">{prefix}</span>
            </div>
          )}
          <input
            ref={ref}
            type={rest.type ?? "text"}
            className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md text-black ${
              prefix && `pl-12`
            } ${className}`}
            {...rest}
          />
          {/* <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            >
              <option>USD</option>
              <option>CAD</option>
              <option>EUR</option>
            </select>
          </div> */}
        </div>
      </div>
    );
  }
);

export default Input;
