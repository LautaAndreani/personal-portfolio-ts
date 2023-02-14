import AboutMe from '@/components/AboutMe'
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
    document.addEventListener('keydown', (e) => {
      e.preventDefault()
      if(e.ctrlKey && e.key === 'p') {
        setToggleMenu(!toggleMenu)
      }
     })

     return () => {
      document.removeEventListener('keydown', (e) => e, false)
     }
  },[])
  return (
    <>
      <Nav />
      <main className='max-w-[800px] mx-auto mt-4 p-4'>
        <CommandPalette/>
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
