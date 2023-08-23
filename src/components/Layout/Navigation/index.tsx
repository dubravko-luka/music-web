import React, { memo } from "react"
import styles from './styles.module.css'
import Svg from "@/components/Common/Svg"
import { AppRoutes } from "@/utils/routes"
import Link from "next/link"
import { useRouter } from "next/router"
import Setting from "./components/setting"
import User from "./components/user"

const mainMenu = [
  {
    icon: 'home',
    path: AppRoutes.home,
  },
  {
    icon: 'favourite',
    path: AppRoutes.favourite,
  },
  {
    icon: 'heard',
    path: AppRoutes.heard,
  },
  {
    icon: 'upload',
    path: AppRoutes.uploaded,
  }
]

const Navigation: React.FC = () => {

  const router = useRouter()

  return (
    <>
      <header className={`${styles.headerWrapper} navigation`}>
        <div className="flex justify-between items-center h-full px-5 relative">
          <div className={`${styles.headerLogoSearch} flex items-center gap-3`}>
            <div className={`${styles.headerLogo}`}>
              <img className={styles.headerImgLogo} src="/images/logos/93x93.svg" alt="" />
            </div>
            <div className={`${styles.headerSearch}`}>
              <span className={`${styles.headerSearchIcon}`}>
                <Svg name="search" path="icons" />
              </span>
              <input className={`${styles.headerInputSearch}`} type="text" placeholder="Tìm bài hát, nghệ sĩ..." />
            </div>
          </div>
          <div className={`${styles.headerMainMenu}`}>
            {
              mainMenu?.map((item, index) => (
                <Link key={index} className="h-full" href={item.path}>
                  <div className={`${styles.headerMenuItem} ${item?.path === router.pathname ? styles.active : ''}`}>
                    <Svg name={item?.icon} path="icons" />
                  </div>
                </Link>
              ))
            }
          </div>
          <div className={`${styles.headerMoreSetting} flex items-center justify-center gap-3`}>
            <div className={`${styles.headerSetting}`}>
              <div className={`${styles.headerIconSetting}`}>
                <Svg name="setting" path="icons" />
              </div>
              <Setting />
            </div>
            <div className={`${styles.headerUser}`}>
              <div className={`${styles.headerIconUser}`}>
                <img className={`${styles.headerImgUser}`} src="/images/icons/user-full-background.svg" alt="" />
              </div>
              <User />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default memo(Navigation)