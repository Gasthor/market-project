import { Button } from "./Button";

export default function Navbar() {
    return(
        <nav className="flex min-h-[70px] w-full justify-between p-2">
            <h1 className=" font-semibold text-2xl my-auto">Market Project</h1>
            <Button text="Publicar aviso"/>
        </nav>
    )
}