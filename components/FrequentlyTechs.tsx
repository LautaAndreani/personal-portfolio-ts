import { CURRENT_TECHS } from '@/constants/constants'
import Badge from './Badge'
import Title from './Title'

function FrequentlyTechs() {
  return (
    <div className='mt-7'>
      <Title>Tecnologías destacadas ⚙</Title>

      <div className='flex flex-wrap gap-2 mt-4'>
        {CURRENT_TECHS.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </div>
  )
}

export default FrequentlyTechs
