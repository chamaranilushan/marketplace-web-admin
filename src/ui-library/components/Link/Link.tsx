import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import { LinkProps } from './types'

import s from './styles.module.css'

const Link = (props: LinkProps) => {
    const { children, className, ...linkProps } = props

    return (
        <NavLink
            className={({ isActive }) =>
                cn(s.link, className, {
                    [s.active]: isActive,
                })
            }
            {...linkProps}
        >
            {children}
        </NavLink>
    )
}

export default Link
