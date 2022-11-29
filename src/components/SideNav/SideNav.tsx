import React, { useMemo } from 'react'
import { NAV_LINKS } from '../../consts/navigation'
import { NavLinkType } from '../../consts/types'
import Link from '../../ui-library/components/Link'

import s from './styles.module.css'

function renderNavLink(link: NavLinkType, index: number) {
    const { url, text } = link

    return (
        <li
            key={index}
            className={s.navItem}
        >
            <Link to={url}>{text}</Link>
        </li>
    )
}

const SideNav = () => {
    const navLinks = useMemo(() => NAV_LINKS.map(renderNavLink), [])

    return (
        <div className={s.wrapper}>
            <ul>{navLinks}</ul>
        </div>
    )
}

export default SideNav
