import { FC } from "react"

interface Props {
    text : string
    customize? : string
    action? : () => void
}

export const Button: FC<Props> = ({
    text,
    customize,
    action
}) => {
    return(
        <button className={`bg-blue-600 p-2 rounded-xl h-fit my-auto text-sm text-white shadow-lg ${customize}`} onClick={action}>
            {text}
        </button>
    )
}