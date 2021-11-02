import React from 'react'
import { Paper } from '@mui/material';

export default function MusicCover(props) {
  const { src, difname, dif } = props;
  return (
    <div className='coverWrapper'>
      <img src={src} alt={`${difname} cover`} />
      <Paper square className={`difficulty ${difname}`}>{difname} {dif}</Paper>
    </div>
  )
}
