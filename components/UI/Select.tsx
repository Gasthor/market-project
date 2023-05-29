import { FC } from "react";

interface Props {
    options: string[]
    predetermined: string
}

export const Select: FC<Props> = ({
    options,
    predetermined
}) => {
    return(
        <select className="border my-2 p-2 rounded-xl">
            <option>{predetermined}</option>
            {
                options.map(value => (
                    <option value={value} key={value}>{value}</option>
                ))
            }
        </select>
    )
}