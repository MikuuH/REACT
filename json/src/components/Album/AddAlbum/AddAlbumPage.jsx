import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function AddAlbumPage() {
  const [data, setData] = useState('');

  const handleOnChange = (event) => {
    setData(event.target.value);
  };

  const dataPullConsole = () => {
    console.log(data);


    const port = import.meta.env.VITE_PORTSERVER_KEY
    const url = `http://localhost:2565/api/album/add?title=${encodeURIComponent(data)}`

    

    // Отправляем GET-запрос
    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(json => {
        console.log('Ответ сервера:', json);
      })
      .catch(error => {
        console.error('Ошибка при отправке данных:', error);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-5 text-3xl font-bold text-white flex-col">
        <h1>ДОБАВЛЕНИЕ АЛЬБОМОВ (локально)</h1>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            onChange={handleOnChange}
            id="outlined-basic"
            label="Название альбома"
            variant="outlined"
          />
        </Box>
        <Button onClick={dataPullConsole} variant="outlined">Добавить</Button>
      </div>
    </div>
  );
}


