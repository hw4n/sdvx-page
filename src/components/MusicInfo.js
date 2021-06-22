import React from 'react'

import { Typography } from '@material-ui/core';

export default function MusicInfo(props) {
  const { title_name, artist_name, distribution_date } = props.info;

  const datestr = (date) => {
    return `${date.substr(0, 4)}/${date.substr(4, 2)}/${date.substr(6, 2)}`;
  }

  return (
    <div>
      <Typography>{title_name}</Typography>
      <Typography>{artist_name}</Typography>
      <Typography>{datestr(distribution_date)}</Typography>
    </div>
  )
}
