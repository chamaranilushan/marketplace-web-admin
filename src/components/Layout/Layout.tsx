import React from 'react'
import { Outlet } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import s from './styles.module.css'

const Layout =() =>(
    (
        <section className={s.wrapper}>
        <SideNav />
        <div className={s.content}>
            <Outlet />
        </div>
    </section>
    )
)


export default Layout;