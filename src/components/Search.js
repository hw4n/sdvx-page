import { useState, useEffect } from 'react';
import './Search.css';

import { TextField } from '@mui/material';

import axios from 'axios';

import MusicList from './MusicList';
import Loader from './Loader';
import Header from './Header';

export default function Search() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleInput = (event) => {
    if (searchKeyword !== event.target.value.trim()) {
      setSearchKeyword(event.target.value.trim());
    }
  }

  useEffect(() => {
    // wait 3 seconds after user input, prevent requesting by each character
    const timeout = setTimeout(() => {
      if (searchKeyword.length) {
        setLoading(true);
        axios.get('https://api.sdvx.org/v1', {
          params: { title: searchKeyword }
        }).then((response) => {
          if (response.config.params.title === searchKeyword) {
            setResult(response.data);
            setLoading(false);
          }
        });
      }
    }, 3000);
    return () => clearTimeout(timeout);
  }, [searchKeyword]);

  return (
    <>
      <Header searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
      <div id='container'>
        { loading ? (
          <Loader />
        ) : (
          <MusicList music={result} />
        )}
      </div>
    </>
  )
}
