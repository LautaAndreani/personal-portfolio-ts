import { Repositories } from '@/models/models'
import Image from 'next/image'
import Badge from './Badge'

type Props = {
  repo: Repositories
}

function Card({ repo }: Props) {
  return (
    <div
      className='bg-black rounded-lg border border-dark_grey min-h-[200px] p-4 hover:bg-hover transition flex flex-col justify-between'
    >
      <span className='flex gap-2 items-center'>
         <Image src='/github.svg' width='40' height='40' alt='github icon' />
         <h3 className='text-white font-medium text-lg'>{repo.name}</h3>
      </span>

        <small className='text-white flex gap-2 text-[.8rem]'>
          <a href={repo.html_url} target="_blank" className='text-[.8rem]'>Repositorio</a>
          <a href={repo.homepage} target="_blank"> Despliegue </a>
        </small>

      <p className='text-soft_gray mt-4 text-sm tracking-sm'>{repo.description}</p>

      {repo.topics && (
        <div className='badge-container w-full flex justify-end gap-2 mt-4'>
          {repo.topics.slice(0, 3).map((topic) => (
            <Badge key={topic}>
              {topic}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}

export default Card
