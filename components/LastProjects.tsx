import { Repositories } from '@/models/models'
import Card from './Card'

type Props = {
  data: Repositories[]
}

function LastProjects({ data }: Props) {
  const filterRepos: Repositories[] = data.reduce((acc,val) => {
    if(val.name.includes('alojamendo') || val.name.includes('hello-extend') || val.name.includes('pizza') || val.name.includes('airbnb')) acc = [...acc, val] as any
    return acc
  }, [])
  return (
    <>
      <h3 className='font-medium text-xl text-white mt-10'>Últimos proyectos</h3>

      <div className='card-container grid md:grid-cols-2 grid-cols-1 gap-4 mt-10 group'>
        {filterRepos.map((repo) => <Card repo={repo} key={repo.id}/> )}
      </div>
    </>
  )
}

export default LastProjects
