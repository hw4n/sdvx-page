import React from 'react'

import { Typography } from '@mui/material';
import Difficulty from './Difficulty';
import { halfToFull, lineOf } from '../helper/japanese';

export default function MusicInfo({ music }) {
  const { title_name, artist_name, distribution_date, bpm_min, bpm_max, version, inf_ver, title_yomigana } = music.info;

  const datestr = (date) => {
    return `${date.substr(0, 4)}/${date.substr(4, 2)}/${date.substr(6, 2)}`;
  }

  const bpmstr = (min, max) => {
    return min !== max ? `${min/100} ~ ${max/100}` : `${min/100}`;
  }

  const introduced = {
    1: 'booth',
    2: 'infiniteInfection',
    3: 'gravityWars',
    4: 'heavenlyHaven',
    5: 'vividWave',
    6: 'exceedGear',
  }

  const firstKatakana = halfToFull(title_yomigana[0]);

  return (
    <div className={`music ${introduced[version]}`}>
      <div className="textInfo">
        <div className="left">
          <Typography className="title">{title_name}</Typography>
          <Typography className="artist">{artist_name}</Typography>
        </div>
        <div className="right">
        <Typography className="yomigana">{lineOf(firstKatakana)} - {firstKatakana}</Typography>
          <Typography className="date">{datestr(distribution_date)}</Typography>
        </div>
      </div>
      <Difficulty difficulty={music.difficulty} inf_ver={inf_ver}/>
    </div>
  )
}
