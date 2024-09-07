import { forwardRef } from "react";
import { twMerge } from 'tailwind-merge';

interface InputProps 
   extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    className,
    type,
    disabled,
    ...props
}, ref) => {
    return(
        <input 
          type={type}
          className={twMerge(`
             flex
             w-full
             rounded-full
             bg-neutral-200/35
             border
             border-transparent
             px-3
             py-3
             text-sm
             file:border-0
             file:bg-transparent
             file:text-sm
             file:font-medium
             placeholder:text-neutral-800
             disabled:cursor-not-allowed
             disabled:opacity-50
             focus:outline-none
             text-black
          `,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
        />
    )
});

Input.displayName = 'Input';
export default Input;   