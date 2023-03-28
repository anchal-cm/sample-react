import React, { FC, PropsWithChildren } from 'react'
import style from './GridRow.module.css'

type GridProps = {
  as?: React.ElementType
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const GridRow: FC<PropsWithChildren<GridProps>> = (props) => {
  const {
    as: CustomTag = 'div',
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
