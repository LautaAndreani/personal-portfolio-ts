type Props = {
  children: string | JSX.Element,
}

function Badge({children}:Props) {
  return  (
    <div className="bg-badge-background dark:!bg-white w-fit rounded-md p-[6px] font-medium text-sm text-white">{children}</div>
  )
}

export default Badge