import { ComponentProps } from 'react'

type ContainerProps = ComponentProps<'div'> & {}

export const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      className={`flex w-full max-w-[496px] flex-col items-center gap-10 rounded-lg bg-neutral-950 px-6 py-10 ${className}`}
      {...props}
    />
  )
}
