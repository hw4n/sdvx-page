import React from 'react'

export default function MusicCovers(props) {
  const { novice, advanced, exhaust, infinite, maximum } = props.covers;
  const coverURL = (dir) => {
    return 'https://api.sdvx.org' + dir;
  }

  return (
    <div className='covers'>
      {novice ? (
        <img src={coverURL(novice.s)} alt='novice cover' />
      ) : <></> }
      {advanced ? (
        <img src={coverURL(advanced.s)} alt='advanced cover' />
      ) : <></> }
      {exhaust ? (
        <img src={coverURL(exhaust.s)} alt='exhaust cover' />
      ) : <></> }
      {infinite ? (
        <img src={coverURL(infinite.s)} alt='inf/grv/hvn/vvd cover' />
      ) : <></> }
      {maximum ? (
        <img src={coverURL(maximum.s)} alt='maximum cover' />
      ) : <></> }
    </div>
  )
}
