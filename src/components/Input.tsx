import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string,
    placeholder?: string,
    full?: boolean,
    label?: string,
}

function Input({ type, placeholder, full, label, ...props }: InputProps) {
    return (
        <>
            <label htmlFor={`input-${label}`}>{label}</label>
            <input
                {...props}
                className={`
                border border-gray-300 rounded-md
                p-2
                ${full ? 'w-full' : ''}
                `}
                id={`input-${label}`} type={`${type}`} placeholder={`${placeholder}`} />
        </>
    )
}

export default Input;