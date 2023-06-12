import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";
import { useSession, signIn } from "next-auth/react";

export default function Navbar() {

    const { data: session, status } = useSession()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const router = useRouter()

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <nav className="min-h-[60px] w-full fixed top-0 left-0 right-0 bg-yellow-300 shadow-md ">
            <div className="max-w-7xl flex justify-between p-2 mx-auto">
                <img src="logo-no-background.png" className=" w-28 h-auto" onClick={() => router.push("/")} />
                <div className="flex gap-1">
                    <Button action={openModal} text="Publicar aviso" />
                    {
                        status === "authenticated" ? <Button text="Perfil" action={() => router.push("/profile")} /> : null
                    }
                </div>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-xl font-semibold text-center m-2">Hola :) Antes de publicar registrate o inicia sesion </h2>
                        <p className="text-center m-2">Lo puedes hacer con:</p>
                        <button className="flex bg-gray-200 p-2 justify-evenly rounded-lg shadow-lg w-56 mx-auto hover:bg-gray-300" onClick={() => signIn("google")}>
                            <img src="google logo.png" className="w-6" />
                            <h3 className="font-semibold">Iniciar con Google</h3>
                        </button>
                    </div>
                </Modal>
            </div>
        </nav>
    )
}