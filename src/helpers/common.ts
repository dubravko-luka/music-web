import axios from "axios";
import { LOCALSTORAGE_HEARD_RECENLY, LOCALSTORAGE_PLAY_LIST, mainSite } from "./constants";

export const alt = "review phim"

export const handleObjectQuery = async (router: any, key: string, value: any, path: string) => {
  const as: any = undefined;
  router.replace(
    {
      pathname: path,
      query: {
        ...router.query,
        [key]: value,
      },
    },
    as,
    { shallow: true },
  );
};


export const convertOffsetQuery = (offset: number, limit: number) => {
  return (offset - 1) * limit
}

export const convertPageFromOffset = (offset: number, limit: number) => {
  return (offset / limit) + 1
}

export const formatTimePlay = (timeInSeconds: number) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export const downloadSong = async (mp3Link: string, name: string) => {
  const response = await axios.get(`${mainSite}${mp3Link}`, {
    responseType: 'blob',
  });

  const url = window.URL.createObjectURL(new Blob([response.data], { type: 'audio/mpeg' }));

  const link = document.createElement('a');

  link.href = url;

  link.setAttribute('download', `${name}.mp3`);

  document.body.appendChild(link);

  link.click();

  window.URL.revokeObjectURL(url);
}

export const saveHeardRecently = async (id: string) => {
  const storedArray = await JSON.parse(localStorage.getItem(LOCALSTORAGE_HEARD_RECENLY) as string) || [];

  const existingIndex = await storedArray.indexOf(id);

  if (existingIndex !== -1) {
    await storedArray.splice(existingIndex, 1);
  }

  await storedArray.unshift(id);

  if (storedArray.length > 12) {
    await storedArray.pop();
  }

  await localStorage.setItem(LOCALSTORAGE_HEARD_RECENLY, JSON.stringify(storedArray));

  return storedArray;
}

export const savePlayList = async (id: string) => {
  const storedArray = await JSON.parse(localStorage.getItem(LOCALSTORAGE_PLAY_LIST) as string) || [];

  const existingIndex = await storedArray.indexOf(id);

  if (existingIndex !== -1) {
    await storedArray.splice(existingIndex, 1);
  }

  await storedArray.unshift(id);

  await localStorage.setItem(LOCALSTORAGE_PLAY_LIST, JSON.stringify(storedArray));

  return storedArray;
}

export const extractLinkImgZingMp3 = (url: string) => {
  if (!url) {
    return '';
  }
  const parts = url.split("/");
  return parts.slice(3).join("/");
}