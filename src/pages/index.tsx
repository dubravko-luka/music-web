import React, { memo, useEffect } from "react";
import HomeContainer from '@/modules/home'

const HomePage: React.FC = () => {

  useEffect(() => {
  }, [])

  return (
    <>
      <HomeContainer />
    </>
  )
}

export default memo(HomePage)
