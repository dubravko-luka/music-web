
import koreanMusic from '@/data/mp3/korean-music/data.json'
import topRapViet from '@/data/mp3/top-rap-viet/data.json'
import newRelease from '@/data/mp3/new-relase/data.json'
import trend from '@/data/mp3/trend/data.json'
import chineseMusic from '@/data/mp3/chinese-music/data.json'
import trendFavourite from '@/data/mp3/trend-favourite/data.json'

export const mainSite = "https://tunescape.vercel.app"

export const LOCALSTORAGE_HEARD_RECENLY = "wmzB2jTHW0ZCYM9yZ45bxqpKp3T9zB"
export const LOCALSTORAGE_PLAY_LIST = "Xjpb9jrlR3djDOQVNb5MUWx4mlFdOC"

export const ALL_LIST_MUSIC = [...koreanMusic, ...newRelease, ...trend, ...trendFavourite, ...chineseMusic, ...topRapViet]