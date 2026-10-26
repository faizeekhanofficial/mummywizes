import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Trending } from './Trending'
import { Events } from "./Events"
import { Latest } from './Latest'
import { Global } from "./Global"

import { Footer } from './Footer'




export default function Layout() {
    return (
        <div className="app-wrapper">

            <main>
                <Header />
                <Trending />
                <Events />
                <Latest />
                <Global />
                <Outlet />

            </main>
            <Footer />
        </div>

    )
}
