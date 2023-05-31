import { Button } from "./Button";

export default function Navbar() {
    return(
        <nav className="min-h-[60px] w-full fixed top-0 left-0 right-0 bg-white shadow-md dark:bg-black">
            <div className="max-w-7xl flex justify-between p-2 mx-auto">
            <h1 className=" font-semibold text-2xl my-auto">Market Project</h1>
            <Button text="Publicar aviso"/>
       
            </div>
        </nav>  
    )
}