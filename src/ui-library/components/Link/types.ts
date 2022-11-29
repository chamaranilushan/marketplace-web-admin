import { PropsWithChildren } from 'react'
import { NavLinkProps } from 'react-router-dom'

export type LinkProps = {
    className?: string
} & NavLinkProps &
    PropsWithChildren
