import { FormEvent, useState } from "react"

import { Tab } from "@/models/models"
import Techs from "./Tabs/Techs"
import Tools from "./Tabs/Tools"

type Props = {
  toggleMenu: boolean
}

function CommandPalette({ toggleMenu }: Props) {
  const [currentTab, setCurrentTab] = useState("herramientas")
  const [input, setInput] = useState("")

  const handleTabs: Record<Tab, JSX.Element> = {
    herramientas: <Tools input={input} />,
    tecnologias: <Techs />,
  }
  const CurrentTab = handleTabs[currentTab as Tab] ?? <Tools input={input} />
  return (
    <>
      {toggleMenu && (
        <div className="w-full h-screen bg-dark_grey bg-opacity-50 text-white absolute left-0 top-0 flex justify-center pt-20">
          <div className="min-w-[50rem] h-1/2 overflow-auto bg-black bg-opacity-70 backdrop-blur-lg rounded-md border border-soft_gray">
            <div className="flex items-center border-b border-soft_gray bg-black sticky top-0">
              <input
                type="text"
                placeholder="Buscar"
                onChange={(e) => setInput(e.target.value)}
                autoFocus
                className="w-full h-14 bg-black bg-opacity-0 text-white rounded-t-md p-4 outline-none placeholder:text-soft_gray"
              />
              <small className="whitespace-nowrap pr-4">
                <strong>CTRL + SHIFT + L</strong>
              </small>
            </div>

            <div className="pt-2 px-4">
              <div className="mt-2 flex gap-2">
                {["Herramientas", "Tecnologias"].map((tab) => {
                  return (
                    <button
                      className={`tracking-wide border border-soft_gray border-opacity-40 w-fit p-2 rounded-lg bg-opacity-20 text-sm transition hover:bg-dark_grey ${
                        tab.toLowerCase() === currentTab && "bg-dark_grey !bg-opacity-100"
                      }`}
                      key={tab}
                      onClick={() => setCurrentTab(tab.toLowerCase())}
                    >
                      {tab}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="border-t border-dark_grey mt-4">{CurrentTab}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default CommandPalette
