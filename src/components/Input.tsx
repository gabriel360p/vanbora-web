interface InputProps {
    type: string,
    placeholder?: string,
    full?: boolean,
    label?: string,
}

function Input({ type, placeholder, full, label }: InputProps) {
    return (
        <>
            <label htmlFor={`input-${label}`}>{label}</label>
            <input
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