import React, { FC, PropsWithChildren } from 'react'
import { Flex } from '../Flex/Flex'
import style from './StackHorizontal.module.css'

type StackProps = {
  as?: React.ElementType
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const StackHorizontal: FC<PropsWithChildren<StackProps>> = (props) => {
  const {
    as: CustomTag = Flex,
    children,
    // eslint-disable-next-line react/prop-types
    className: _className,
    ...divProps
  } = props
  const className = _className ? `${style.root} ${_className}` : style.root
  return (
    <CustomTag className={className} {...divProps}>
      {children}
    </CustomTag>
  )
}
