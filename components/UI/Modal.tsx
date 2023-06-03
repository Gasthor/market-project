import React, { FC } from "react";
import { Button } from "./Button";

interface Props {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export const Modal: FC<Props> = ({
    isOpen,
    onClose,
    children
}) => {
    if (!isOpen) {
        return null
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-800 opacity-75"></div>
            <div className="relative flex flex-col bg-white dark:bg-gray-900 px-4 py-4 rounded-lg w-11/12 h-4/6 md:max-w-lg">
                <div className="flex flex-row-reverse">
                    <button onClick={onClose}>X</button>
                
                </div>
                {children}
            </div>

        </div>
    )
}