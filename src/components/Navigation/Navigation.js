import { NavLink, Outlet } from 'react-router-dom'
import { headerRoutes } from 'routes/headerRouters'
import UserIcon from '../UserIcon/UserIcon'
import LogoSchool from '../LogoSchool/LogoSchool'
import BottomNavigation from 'components/BottomNavigation/BottomNavigation'
import s from './Navigation.module.scss'

export default function Navigation() {
  return (
    <>
      <nav className={s.nav}>
        <LogoSchool />
        <ul className={s.list}>
          {headerRoutes.map(router => (
            <li className={s.category} key={router.name}>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : s.item)}
                to={router.path}
              >
                {router.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <UserIcon />
      </nav>
      <BottomNavigation />
      <Outlet />
    </>
  )
}
