import Home from '../pages/Home.page'
import About from '../pages/About.page'
import Events from '../pages/Events.page'
import OurTeam from '../pages/OurTeam.page'
import JoinUs from '../pages/JoinUs.page'


import { JSX } from "react"

export interface NavBarItem {
    path: string
    label: string
    unavailable?: boolean
    active?: boolean
    new?: boolean
    subItems?: NavBarItem[]
    component?: () => JSX.Element
}

export const NAV_BAR_ITEMS: NavBarItem[] = [
    { path: '/', label: 'Home', component: Home},
    { path: '/about', label: 'About Us', component: About},
    { path: '/events', label: 'Events', component: Events},
    { path: '/ourteam', label: 'Our Team', component: OurTeam},
    { path: '/joinus', label: 'Join Us', component: JoinUs},
]