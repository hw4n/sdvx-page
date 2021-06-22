import React from 'react'

import { Typography, Paper, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Feature(props) {
  const { Icon, title, desc, hrefTo, linkTo, buttonContent } = props;
  return (
    <Paper style={{
      width: 250,
      height: 250,
      padding: 20,
      margin: 10,
    }}>
      <div className='header'>
        <Icon />
        <Typography variant='h5' style={{display: 'inline-block'}}>
          {title}
        </Typography>
      </div>
      <div className='content'>
        <Typography>
          {desc}
        </Typography>
        {hrefTo ? (
          <Button variant="contained" color="primary" href={hrefTo}>
            {buttonContent}
          </Button>
        ) : (
          <></>
        )}
        {linkTo ? (
          <Link to={linkTo}>
            <Button variant="contained" color="primary" style={{width: '100%'}}>
              {buttonContent}
            </Button>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </Paper>
  )
}
