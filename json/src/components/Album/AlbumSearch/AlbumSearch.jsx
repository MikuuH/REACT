import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import AlbumAllFetch from '../AlbumFetch/AlbumAllFetch';

export default function AlbumSearch() {
  const [selectedValue, setSelectedValue] = useState('');
  const [albums, setAlbums] = useState([]);
  const [foundAlbum, setFoundAlbum] = useState(null);

  // Функция для обновления списка альбомов
  const fetchAndSetAlbums = async () => {
    try {
      const fetchedAlbums = await AlbumAllFetch();
      console.log("Fetched albums:", fetchedAlbums); // Проверьте, что здесь новые данные
      setAlbums(fetchedAlbums);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  // Используем useEffect для первичного получения данных
  useEffect(() => {
    fetchAndSetAlbums();
  }, []);


  const HandleOnChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const dataPullConsole = () => {
    console.log('Input value:', selectedValue);
    const found = albums.find(album => album.title.toLowerCase() === selectedValue.toLowerCase());
    console.log("Found album:", found);

    if (found) {
      console.log('Value found in data:', selectedValue);
      setFoundAlbum(found);
    } else {
      console.log('Value not found in data');
      setFoundAlbum(null);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-5 text-3xl font-bold text-white flex-col">
        <h1>ПОИСК АЛЬБОМОВ</h1>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            onChange={HandleOnChange}
            id="outlined-basic"
            label="Search"
            variant="outlined"
          />
        </Box>
        <Button onClick={dataPullConsole} variant="outlined">Search</Button>

        {foundAlbum && (
          <div className='mt-[20px]'>
            <h1>НАШЕЛСЯ АЛЬБОМ!</h1>
            <div>Название: {foundAlbum.title}</div>
            <div>ID: {foundAlbum.id}</div>
          </div>
        )}

        {foundAlbum === null && (
          <h1>я не нашлось</h1>
        )}
      </div>
    </div>
  );
}
