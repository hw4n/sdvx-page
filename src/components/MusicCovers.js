import React from 'react'
import MusicCover from './MusicCover';

export default function MusicCovers(props) {
  const { novice: novCover, advanced: advCover, exhaust: exhCover, infinite: infCover, maximum: mxmCover } = props.covers;
  const { novice, advanced, exhaust, infinite, maximum } = props.difficulty;
  const { infVersion } = props;
  const coverURL = (dir) => {
    return 'https://api.sdvx.org' + dir;
  }

  const infName = {
    2: 'infinite',
    3: 'gravity',
    4: 'heavenly',
    5: 'vivid'
  }

  return (
    <div className='covers'>
      {novCover && novice ? (
        <MusicCover src={coverURL(novCover.s)} difname='novice' dif={novice.difnum} />
      ) : <></> }
      {advCover && advanced ? (
        <MusicCover src={coverURL(advCover.s)} difname='advanced' dif={advanced.difnum} />
      ) : <></> }
      {exhCover && exhaust ? (
        <MusicCover src={coverURL(exhCover.s)} difname='exhaust' dif={exhaust.difnum} />
      ) : <></> }
      {infCover && infinite ? (
        <MusicCover src={coverURL(infCover.s)} difname={infName[infVersion]} dif={infinite.difnum} />
      ) : <></> }
      {mxmCover && maximum ? (
        <MusicCover src={coverURL(mxmCover.s)} difname='maximum' dif={maximum.difnum} />
      ) : <></> }
    </div>
  )
}
