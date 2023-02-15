import Image from "next/image"
import { TECHS } from "@/constants/Tools"

function Techs() {
  return (
    <>
      {TECHS.map((tool) => (
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

export default Techs
