import { ComponentProps, forwardRef } from "react";

type Props = Omit<ComponentProps<"select">, ""> & {
  label?: string;
};

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ children, label, ...rest }, ref) => {
    return (
      <div className="flex flex-col justify-start">
        <label
          htmlFor={label}
          className="mb-2 block text-sm font-bold text-white"
        >
          {label}
        </label>
        <select
          id={label}
          ref={ref}
          className="py-2 bg-white focus:ring-indigo-500 focus:border-indigo-500 h-full  pl-2 pr-7 border-transparent bg-transparent block w-full sm:text-sm border-gray-300 rounded-md text-black "
          {...rest}
        >
          {children}
        </select>
      </div>
    );
  }
);
