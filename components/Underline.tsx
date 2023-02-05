type Props = {
  children: JSX.Element | JSX.Element[]
}

function Underline({ children }: Props) {
  return <span className='md:underline no-underline underline-offset-[6px] decoration-wavy decoration-orange mx-[.1rem]'>{' '} {children} {' '} </span>
}

export default Underline
