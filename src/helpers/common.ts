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