import React from 'react'
import { Paper } from '@material-ui/core';
import './MusicList.css'

import MusicInfo from './MusicInfo';
import MusicCovers from './MusicCovers';

export default function MusicList(props) {
  const { music } = props;

  return (
    <div id='musicList'>
      {music.map(mu => {
        return (
          <Paper square style={{
            backgroundColor: 'transparent',
            height: 128,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 10px',
          }}>
            <MusicInfo info={mu.info} />
            <MusicCovers covers={mu.cover} />
          </Paper>
        )
      })}
    </div>
  )
}
