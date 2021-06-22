import { useState, useEffect } from 'react';
import './Search.css';

import { TextField } from '@material-ui/core';

import axios from 'axios';

import MusicList from './MusicList';

export default function Search() {
  const [title, setTitle] = useState('');
  const [result, setResult] = useState([]);
  const handleInput = (event) => {
    if (title !== event.target.value.trim()) {
      setTitle(event.target.value.trim());
    }
  }

  useEffect(() => {
    // wait 3 seconds after user input, prevent requesting by each character
    const timeout = setTimeout(() => {
      if (title.length) {
        axios.get('https://api.sdvx.org/v1', {
          params: { title }
        }).then((response) => {
          if (response.config.params.title === title) {
            setResult(response.data);
          }
        });
      }
    }, 3000);
    return () => clearTimeout(timeout);
  }, [title]);

  return (
    <div id='container'>
      <div id='innerContainer'>
        <TextField label='Title' style={{ width: '100%' }} onInput={handleInput} />
        <MusicList music={result} />
      </div>
    </div>
  )
}
