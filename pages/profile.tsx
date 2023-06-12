import { PrincipalLayout } from "@/components/layout/PrincipalLayout";
import { Button } from "@/components/UI/Button";
import { signOut, useSession } from "next-auth/react";

export default function profile() {

    const { data : session, status} = useSession()

    if(status != null && status === "authenticated"){
        
        return (
            <PrincipalLayout title={"Perfil"} pageDescription={"perfil del usuario"} imgURL={""}>
                <div className="min-w-[300px] md:min-w-[420px]">
                    <div className=" bg-white flex flex-col pb-6 rounded-xl shadow-lg md:min-w-[720px]">
                        <div className="flex flex-row">
                            <img src={session.user?.image} className="rounded-full w-24 h-24 m-2 p-1 border-2 border-blue-700" />
                            <h2 className="font-semibold text-xl m-auto p-2">{session.user?.name}</h2>
                        </div>
                        <div className="flex flex-row justify-between m-2 ">
                            <Button text="Mis datos" customize="w-1/3"/>
                            <Button text="Favoritos" customize="w-1/3"/>
                            <Button text="Salir" customize="bg-red-500" action={() => signOut({callbackUrl: "/"})}/>
                        </div>
                    </div>
                </div>
            </PrincipalLayout>
        )
    }

    
}