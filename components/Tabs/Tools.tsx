import Image from "next/image"
import { TOOLS } from "@/constants/Tools"
import { useMemo, useState } from "react"

function Tools({ input }: { input: string }) {
  const [tools, setTools] = useState(TOOLS)

  const matchTools = useMemo(() => {
    if (input) {
      setTools(tools.filter((tool) => tool.key.includes(input) || tool.description.toLowerCase().includes(input)))
      return tools
    }
    setTools(TOOLS)
    return TOOLS
  }, [input])

  if (matchTools.length) {
    return (
      <>
        {matchTools.map((tool) => (
          <div className="w-full flex gap-4 p-4 border-b border-dark_grey" key={tool.key}>
            <Image width={50} height={50} src={tool.image} alt="logo" className="rounded-sm" />
            <span>
              <p className="font-bold tracking-wide text-[1.2rem]">{tool.title}</p>
              <small className="text-[.9rem]">{tool.description}</small>
            </span>
          </div>
        ))}
      </>
    )
  }
  return (
    <span className="flex flex-col items-center mt-5">
      <p className="text-orange text-[3rem]">×</p>
      Ups... no se encontraron coincidencias
    </span>
  )
}

export default Tools
