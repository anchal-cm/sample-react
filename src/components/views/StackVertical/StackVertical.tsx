import React, { FC, PropsWithChildren } from 'react'
import { FlexColumn } from '../FlexColumn/FlexColumn'
import style from './StackVertical.module.css'

type StackProps = {
  as?: React.ElementType
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const StackVertical: FC<PropsWithChildren<StackProps>> = (props) => {
  const {
    as: CustomTag = FlexColumn,
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
