import React from 'react'
import SideNav from '../SideNav/SideNav';
import s from './styles.module.css'

const Layout =() =>(
    (
       <div className={s.wrapper}>
        <div className={s.sideNavWrapper}>
            <SideNav/>
        </div>
       </div>
    )
)


export default Layout;