import { CURRENT_TECHS } from '@/constants/constants'
import Underline from './Underline'

function AboutMe() {
  const getAge = () => {
    let actualAge = 22
    if(new Date(2023, 10, 5) <= new Date()) {
      return actualAge + 1
    }

    return actualAge
  }
  return (
    <div className='text-white'>
      <h2 className='font-medium text-xl text-white tracking-sm'>Sobre mí</h2>

      <div className='description mt-7 flex flex-col gap-4 text-sm tracking-sm'>
        <p>
          {getAge()} años de Mendoza, <span className='font-medium'> Argentina</span>
        </p>

        <p className='md:leading-0 leading-6'>
          Actualmente me encuentro trabajando en <a href="https://www.coderhouse.com" target='_blank' className='underline underline-offset-2'>Coderhouse</a> construyendo y manteniedo aplicaciones web utilizando tecnologías
          como
          {CURRENT_TECHS.map((tech) => {
            return (
              <Underline key={tech}>
                <span className='text-gray-300'>{tech}, </span>
              </Underline>
            )
          })}
          y mucho más...
        </p>

        <p>
          Me gusta mucho hacer proyectos que yo mismo utilizaría, le doy una gran importancia a la performance y a la experiencia
          del usuario.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
