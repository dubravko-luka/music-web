import React, { memo, useEffect, useRef, useState } from "react"
import styles from './styles.module.css'
import Svg from "@/components/Common/Svg"
import { AppRoutes } from "@/utils/routes"
import Link from "next/link"
import { useRouter } from "next/router"
import Setting from "./components/setting"
import User from "./components/user"
import { useSelector } from "react-redux"
import { RootState } from "@/store/types"

const mainMenu = [
  {
    icon: 'home',
    name: 'Trang chủ',
    path: AppRoutes.home,
  },
  {
    icon: 'favourite',
    name: 'Nhạc yêu thích',
    path: AppRoutes.favourite,
  },
  {
    icon: 'heard',
    name: 'Nhạc đã nghe',
    path: AppRoutes.heard,
  },
  {
    icon: 'upload',
    name: 'Nhạc tải lên',
    path: AppRoutes.uploaded,
  }
]

const Navigation: React.FC = () => {

  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const width = useSelector((state: RootState) => state?.window?.width);
  const refSearch: any = useRef(null);
  const refMenu: any = useRef(null);
  const refSetting: any = useRef(null);
  const [showSetting, setShowSetting] = useState(false)

  const handleClickOutside = (event: any, ref: any, action: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      action(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => handleClickOutside(e, refSearch, setShowSearch));
    return () => {
      document.removeEventListener("click", (e) => handleClickOutside(e, refSearch, setShowSearch));
    };
    // eslint-disable-next-line
  }, [refSearch]);

  useEffect(() => {
    document.addEventListener("click", (e) => handleClickOutside(e, refMenu, setShowMenu));
    return () => {
      document.removeEventListener("click", (e) => handleClickOutside(e, refMenu, setShowMenu));
    };
    // eslint-disable-next-line
  }, [refMenu]);

  useEffect(() => {
    document.addEventListener("click", (e) => handleClickOutside(e, refSetting, setShowSetting));
    return () => {
      document.removeEventListener("click", (e) => handleClickOutside(e, refSetting, setShowSetting));
    };
    // eslint-disable-next-line
  }, [refSetting]);

  return (
    <>
      <header className={`${styles.headerWrapper} navigation`}>
        <div className="flex justify-between items-center h-full px-5 relative">
          <div className={`${styles.headerLogoSearch} flex items-center gap-3`}>
            {
              width < 1280
                ? !showSearch
                  ? (
                    <div className={`${styles.headerLogo}`}>
                      <img className={styles.headerImgLogo} src="/images/logos/93x93.svg" alt="" />
                    </div>
                  )
                  : <></>
                : (
                  <div className={`${styles.headerLogo}`}>
                    <img className={styles.headerImgLogo} src="/images/logos/93x93.svg" alt="" />
                  </div>
                )
            }
            <div
              ref={refSearch}
              className={`${styles.headerSearch} ${showSearch ? styles.showSearch : ''} ${showSearch ? styles.showSearch : ''} `}
              onClick={() => setShowSearch(true)}
            >
              <span className={`${styles.headerSearchIcon}`}>
                <Svg name="search" path="icons" />
              </span>
              <input className={`${styles.headerInputSearch}`} type="text" placeholder="Tìm bài hát, nghệ sĩ..." />
            </div>
          </div>
          <div className={`${styles.headerMainMenu} relative`} ref={refMenu}>
            <div className={`${styles.headerMenuGrid}`} onClick={() => setShowMenu(!showMenu)}>
              <div className={`${styles.headerIconSetting}`}>
                <Svg name="menu-grid" path="icons" />
              </div>
            </div>
            <div className={`${styles.menu} ${showMenu ? styles.active : ''} flex items-center gap-x-2.5`}>
              {
                mainMenu?.map((item, index) => (
                  <Link key={index} className="h-full" href={item.path}>
                    <div className={`${styles.headerMenuItem} ${item?.path === router.pathname ? styles.active : ''}`}>
                      <Svg name={item?.icon} path="icons" />
                      <p className={`${styles.textMenu}`}>{item?.name}</p>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
          <div className={`${styles.headerMoreSetting} flex items-center justify-center gap-3`}>
            <div ref={refSetting} className={`${styles.headerSetting} h-full relative`}>
              <div className={`${styles.headerIconSetting}`} onClick={() => setShowSetting(!showSetting)}>
                <Svg name="setting" path="icons" />
              </div>
              {
                showSetting
                  ? <Setting />
                  : <></>
              }
            </div>
            <div className={`${styles.headerUser}`}>
              <div className={`${styles.headerIconUser} h-full relative`}>
                <img className={`${styles.headerImgUser}`} src="/images/icons/user-full-background.svg" alt="" />
              </div>
              <User />
            </div>
          </div>
        </div>
      </header >
    </>
  )
}

export default memo(Navigation)