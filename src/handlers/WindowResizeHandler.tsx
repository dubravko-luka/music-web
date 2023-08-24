import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWidth } from "@/store/actions/windowAction";
import { RootState } from "@/store/types";
import { setShowPlaylist } from "@/store/actions/globalAction";

const WindowResizeHandler = () => {
  const dispatch = useDispatch();
  const width = useSelector((state: RootState) => state?.window.width);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      dispatch(setWidth(Number(newWidth)) as any);
    };

    if (width === 0) {
      dispatch(setWidth(Number(window.innerWidth)) as any);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (width !== 0 && width < 992) {
      dispatch(setShowPlaylist(false))
    }
  }, [width])

  return null;
};

export default WindowResizeHandler;
