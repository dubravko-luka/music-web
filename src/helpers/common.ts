import axios from "axios";

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
  const response = await axios.get(mp3Link, {
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