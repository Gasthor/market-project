import Image from "next/image";
import { FC } from "react";

interface Props {
title : string
description : string
city : string
category : string
imgURL? : string
URL? : string
}

export const ItemProduct : FC<Props> = ({
title,
description,
city,
category,
imgURL,
URL
}) => {
    return(
    <div className=" snap-center m-2 p-2 bg-white shadow-lg rounded-xl  min-w-[200px] md:max-w-xs">
        <img className="rounded-lg mb-2" src="/test.webp"/>
        <h3 className="text-lg font-medium">{title}</h3>
        <h4 className="text-sm">{description}</h4>
        <div className="flex flex-row justify-between my-1">
            <h5 className="text-xs">{category}</h5>
            <h5 className="text-xs">{city}</h5>
        </div>
    </div>
    )
}