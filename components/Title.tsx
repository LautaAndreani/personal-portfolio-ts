type Props = {
    children: string | JSX.Element
}

function Title ({children}: Props) {
  return (
    <h2 className='font-medium text-xl text-white tracking-sm'>{children}</h2>
  )
}

export default Title