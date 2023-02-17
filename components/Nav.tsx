import Image from 'next/image'
import { SetStateAction } from 'react'

type Props = {
  setToggleMenu: React.Dispatch<SetStateAction<boolean>>
}

function Nav({ setToggleMenu }: Props) {
  return (
    <header className='text-white w-full bg-black border border-dark_grey p-4'>
      <nav className='flex justify-between m-auto items-center min-h-[40px] max-w-[800px]'>
        <h1 className='text-sm font-medium'>Lautaro Andreani</h1>

        <div className='flex items-center gap-4 text-sm'>
          <ul className='gap-4 text-[#AAAAAA] flex'>
            <li className='md:flex hidden'>
              <a href='https://www.linkedin.com/in/lautaroandreani/' target='_blank' className='hover:text-white transition'>
                Linkedin
              </a>
            </li>
            <li className='md:flex hidden'>
              <a href='https://github.com/LautaAndreani' target='_blank' className='hover:text-white transition'>
                Github
              </a>
            </li>
            <li className='md:flex hidden'>
              <a href='/resume.pdf' target='_blank' className='hover:text-white transition'>
                CV
              </a>
            </li>
            <li className='cursor-pointer' onClick={() => setToggleMenu(true)}>
              <Image className='mt-[.1rem]' src='/search.svg' alt='search icon' width={15} height={15} />
            </li>
          </ul>

          <footer className='fixed w-full bottom-0 left-0 justify-center items-end md:hidden flex'>
            <ul className='flex gap-4 text-soft_gray w-full min-h-[3rem] p-5 justify-center backdrop-blur-lg bg-opacity-10 border-t-dark_grey border-t'>
              <li>
                <a href='https://www.linkedin.com/in/lautaroandreani/' target='_blank' className='hover:text-white transition'>
                  Linkedin
                </a>
              </li>
              <li>
                <a href='https://github.com/LautaAndreani' target='_blank' className='hover:text-white transition'>
                  Github
                </a>
              </li>
              <li>
                <a href='/resume.pdf' target='_blank' className='hover:text-white transition'>
                  CV
                </a>
              </li>
            </ul>
          </footer>

          <Image src='/me.png' width='40' height='40' alt='profile picture' />
        </div>
      </nav>
    </header>
  )
}

export default Nav
