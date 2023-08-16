import React, { memo, useEffect, useState } from "react"
import styles from './styles.module.css'
import Menu from "./Menu"
import { alt } from "@/helpers/common"
import Svg from "@/components/Svg"
import Link from "next/link"
import { SearchMenu } from "@/modules/products/search"
import { mainSite } from "@/helpers/constants"

const Navigation: React.FC = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const handleMenuClick = () => {
    setOpenMenu(false);
  }

  // Handle the scroll event to hide and show navigation
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos < 230) {
        setIsHidden(false)
      } else {
        if (prevScrollPos < currentScrollPos) {
          setIsHidden(true)
        } else {
          setIsHidden(false)
        }
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // End handle the scroll event to hide and show navigation"

  return (
    <>
      <header className={`${styles.navigation} ${isHidden ? styles.hidden : ''} ${openMenu ? styles.show : ''} flex justify-center transition-all`}>
        <div className={styles.wrapper}>
          <div className={`${styles.wrapMenu} container w-full max-w-[1440px] xl:!px-10 llg:!px-5 !px-4`}>
            <div className="w-full grid grid-cols-12 items-center justify-between ssm:gap-x-5 sssm:gap-x-3">
              <div className="llg:col-span-12 col-span-10 flex gap-6 items-center llg:justify-between">
                {/* LOGO */}
                <Link href={mainSite} className="logo">
                  <img className={styles.logo} src="/images/logos/logo-256x65.png" alt={alt} />
                </Link>
                {/* END LOGO */}

                {/* MAIN MENU */}
                <div className={`${styles.menu} ${openMenu ? styles.menuOpen : ''} llg:flex justify-end items-center`}>
                  <div onClick={handleMenuClick} className={`${styles.bdMenu} ${openMenu ? styles.bdMenuOpen : ''}`}></div>
                  <Menu closeMenu={handleMenuClick} />
                </div>
              </div>
              {/* END MAIN MENU */}

              {/* ICON SEARCH */}
              <div className="col-span-1 relative llg:hidden">
                <div className={styles.menuRight}>
                  <div className="icons" onClick={() => setShowSearch(true)}>
                    <Svg path="icons" name="search" />
                  </div>
                </div>
              </div>
              {/* END ICON SEARCH */}

              {/* ICON MOBILE */}
              <div className="llg:hidden col-span-1 relative">
                <div className={`${styles.openMenu} cursor-pointer`}>
                  {
                    !openMenu
                      ? (
                        <div onClick={() => setOpenMenu(true)}>
                          <Svg path="icons" name="menu-mobile-open" />
                        </div>
                      ) : (
                        <div onClick={() => setOpenMenu(false)}>
                          <Svg path="icons" name="menu-mobile-close" />
                        </div>
                      )
                  }
                </div>
              </div>
              {/* END ICON MOBILE */}

            </div>
          </div>
        </div>
        {/* FORM SEARCH */}
        <div className={`${styles.formSearch} w-full ${showSearch ? styles.show : ''} llg:hidden`}>
          <div className={`grid grid-cols-12 w-full h-full items-center justify-center container max-w-[1440px] overflow-hidden xl:!px-10 llg:!px-5 !px-4 m-auto`}>
            <div className="icons col-span-1 flex items-center justify-start" onClick={() => setShowSearch(false)}>
              <Svg path="icons" name="arrow-left" />
            </div>
            <div className="h-8 col-span-11">
              <SearchMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default memo(Navigation)