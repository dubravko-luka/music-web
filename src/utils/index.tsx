import copy from 'copy-to-clipboard'

export const copyClipboard = (value: any) => {

  copy(value);

  return true;
}
