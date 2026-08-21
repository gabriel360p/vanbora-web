
// enum TypesButton {
//     SUBMIT = "submit",
//     RESET = "reset",
//     BUTTON = "button",
// }



interface ButtonProps {
    title: string,
    style?: string,
    full?: boolean,
    type: "submit" | "reset" | "button",
    outline?: boolean,
    click?: React.MouseEventHandler<HTMLButtonElement>
}

function Button({ title, outline, full, type, style, click }: ButtonProps) {
    return (
        <button
            onClick={click}
            type={type}
            className={`
            ${full && 'w-full'}
            ${outline ? 'button-outline' : 'button-normal'}
            ${style}  
        `}>
            {title}
        </button>
    )
}

export default Button;