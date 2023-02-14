type Props = {
    toggleMenu: boolean
}

function CommandPalette({ toggleMenu }: Props) {
    return (
        <>
            {toggleMenu &&
                <div className="w-full h-screen bg-dark_grey bg-opacity-50 text-white absolute left-0 top-0 flex justify-center pt-20">
                    <div className="min-w-[50rem] h-1/2 bg-black bg-opacity-70 backdrop-blur-lg rounded-md border border-soft_gray">
                        <div className="flex items-center border-b border-soft_gray">
                            <input type="text" placeholder="Search" autoFocus className="w-full h-14 bg-black bg-opacity-0 text-white rounded-t-md p-4 outline-none placeholder:text-soft_gray" />
                            <small className="whitespace-nowrap pr-4"> <strong>CTRL + SHIFT + L</strong></small>
                        </div>

                        <div className="pt-2 px-4">
                            <p>Sugerencias de busqueda</p>

                            <div className="mt-2 flex gap-2">
                                <small className="tracking-wide border border-soft_gray border-opacity-40 w-fit p-2 rounded-lg bg-opacity-20">
                                    herramientas
                                </small>
                                <small className="tracking-wide border border-soft_gray border-opacity-40 w-fit p-2 rounded-lg bg-opacity-20">
                                    Curriculum
                                </small>
                                <small className="tracking-wide border border-soft_gray border-opacity-40 w-fit p-2 rounded-lg bg-opacity-20">
                                    Proyectos
                                </small>
                            </div>
                        </div>

                        <div className="border-t border-dark_grey mt-4">

                        </div>
                    </div>


                </div>
            }
        </>
    )
}

export default CommandPalette