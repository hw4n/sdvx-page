import React from 'react'
import { Paper } from '@mui/material';
import './MusicList.css'

import MusicInfo from './MusicInfo';
import MusicCovers from './MusicCovers';

export default function MusicList(props) {
  const { music } = props;

  return (
    <div id='musicList'>
      {music.map(mu => {
        return (
          <Paper square className='music' key={mu._id}>
            <MusicInfo info={mu.info} />
            {mu.cover && mu.difficulty ? (
              <MusicCovers covers={mu.cover} difficulty={mu.difficulty} infVersion={mu.info.inf_ver} />
            ) : <></>}
          </Paper>
        )
      })}
    </div>
  )
}
