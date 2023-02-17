import AboutMe from '@/components/AboutMe'
import CommandPalette from '@/components/CommandPalette'
import FrequentlyTechs from '@/components/FrequentlyTechs'
import LastProjects from '@/components/LastProjects'
import Nav from '@/components/Nav'
import { Repositories } from '@/models/models'
import { useEffect, useState } from 'react'

type Props = {
  data: Repositories[]
}

export default function Home({ data }: Props) {
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    const handleMenu = (e: KeyboardEvent) => {
      e.preventDefault()
      e.ctrlKey && e.shiftKey && e.key === 'L' && setToggleMenu((prev) => !prev)
    }

    document.addEventListener('keyup', handleMenu)

    return () => document.removeEventListener('keyup', handleMenu)
  }, [])

  return (
    <>
      <Nav setToggleMenu={setToggleMenu} />
      <main className='max-w-[800px] mx-auto mt-4 p-4'>
        <CommandPalette toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <AboutMe />
        <LastProjects data={data} />
        <FrequentlyTechs />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/LautaAndreani/repos')
  const data = await res.json()

  return {
    props: {
      data,
    },
    revalidate: 120,
  }
}
