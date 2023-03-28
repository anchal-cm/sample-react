import React, { FC, PropsWithChildren } from 'react'
import style from './FlexColumn.module.css'

// eslint-disable-next-line @typescript-eslint/ban-types
type FlexProps = {
  as?: React.ElementType
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const FlexColumn: FC<PropsWithChildren<FlexProps>> = (props) => {
  // eslint-disable-next-line react/prop-types
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
