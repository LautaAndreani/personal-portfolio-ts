import AboutMe from '@/components/AboutMe'
import FrequentlyTechs from '@/components/FrequentlyTechs'
import LastProjects from '@/components/LastProjects'
import Nav from '@/components/Nav'
import { Repositories } from '@/models/models'

type Props = {
  data: Repositories[]
}

export default function Home({ data }: Props) {
  return (
    <>
      <Nav />
      <main className='max-w-[800px] mx-auto mt-4 p-4'>
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
