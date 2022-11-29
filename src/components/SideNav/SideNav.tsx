import React from 'react'
import LogoLight from '../../assets/images/logo-light-full.png'
import LogoDark from '../../assets/images/logo-dark-full.png'
import { NAV_MODE_TRANSPARENT } from '../../consts/navigation'

import s from './styles.module.css'

const SideNav = () => {
    // TODO:Use toggle button val to reflect here and set the logo accordingly
    const navMode = NAV_MODE_TRANSPARENT

    return (
        <div className={s.wrapper}>
            <div>
                <div className={s.logo}>
                    <img src={navMode === NAV_MODE_TRANSPARENT ? LogoLight : LogoDark}
                    alt ="Admin"/>
                </div>
            </div>
        </div>
    )
}

export default SideNav
