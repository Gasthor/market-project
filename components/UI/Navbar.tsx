import { useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";

export default function Navbar() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return(
        <nav className="min-h-[60px] w-full fixed top-0 left-0 right-0 bg-white shadow-md dark:bg-black">
            <div className="max-w-7xl flex justify-between p-2 mx-auto">
            <h1 className=" font-semibold text-2xl my-auto">Market Project</h1>
            <Button action={openModal} text="Publicar aviso"/>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-xl font-semibold text-center m-2">Hola :) Antes de publicar registrate o inicia sesion </h2>
                <p className="text-center m-2">Lo puedes hacer con:</p>
            </Modal>
            </div>
        </nav>  
    )
}