import React from 'react'
import { Card, CardContent, CardMedia, Grid, Paper } from '@mui/material';
import './MusicList.css'

import MusicInfo from './MusicInfo';
import MusicCovers from './MusicCovers';
import { styled } from '@mui/material/styles';

export default function MusicList(props) {
  const { music } = props;

  return (
    <Grid container xs={12} spacing={2} justifyContent='center'>
      {music.map(m => {
        return (
          <Grid item xs={11} md={5} lg={4}>
            <Card sx={{ display: 'flex' }}>
              <CardMedia
                component="img"
                sx={{ height: '100px', width: '100px' }}
                image={`https://api.sdvx.org${m.cover.novice.s}`}
                alt={m.info.title_name}
              />
              <div className="musicInfoWrapper">
                <MusicInfo music={m} />
              </div>
            </Card>
          </Grid>
        )
      })}
    </Grid>
    //   {music.map(mu => {
    //     return (
    //       <Paper square className='music' key={mu._id}>
    //         <MusicInfo info={mu.info} />
    //         {mu.cover && mu.difficulty ? (
    //           <MusicCovers covers={mu.cover} difficulty={mu.difficulty} infVersion={mu.info.inf_ver} />
    //         ) : <></>}
    //       </Paper>
    //     )
    //   })}
    // </div>
  )
}
