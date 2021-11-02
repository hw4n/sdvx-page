import React from 'react'
import './Landing.css';
import Feature from './Feature';

import { Typography, Grid } from '@mui/material';
import { Public, Image, Code, Search } from '@mui/icons-material';

export default function Landing() {
  return (
    <>
      <div id='container'>
        <div className='typographies'>
          <Typography variant='h3'>SDVX Music API</Typography>
          <Typography variant='h6'>Public Music API (Up to EXCEED GEAR)</Typography>
        </div>
      </div>
      <div id='container2'>
        <Grid container justifyContent='center'>
          <Grid item>
            <Feature
              Icon={Public}
              title='Public API'
              desc='Literally anyone can use this api, just send a GET request and you are good to go!'
              hrefTo='https://api.sdvx.org/v1'
              buttonContent='Try it'/>
          </Grid>
          <Grid item>
            <Feature
              Icon={Image}
              title='Cover art'
              desc='Links to cover arts are provided! Every cover art which differ by difficulty and size are supported too!'/>
          </Grid>
          <Grid item>
            <Feature
              Icon={Code}
              title='Open Source'
              desc='Same repo is stored on github, check usages and others too! Any contribution is welcome and encouraged.'
              hrefTo='https://github.com/hw4n/sdvx-music-api'
              buttonContent='Check it out'/>
          </Grid>
          <Grid item>
            <Feature
              Icon={Search}
              title='Live searching'
              desc='Just wanna search music? Search here!'
              linkTo='/search'
              buttonContent='start searching'/>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
