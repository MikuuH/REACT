import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

export default function Routing() {
  const [value, setValue] = useState(0);
  const location = useLocation();

  const AdllAlbumPage = import.meta.env.VITE_ALLALBUM_KEY;
  console.log(AdllAlbumPage);
  
  const SearchAlBumPage = import.meta.env.VITE_SEARCHALBUM_KEY
  const AddAlbumPage = import.meta.env.VITE_ADDALBUM_KEY

  useEffect(() => {
    switch (location.pathname) {
      case AdllAlbumPage:
        setValue(0);
        break;
      case SearchAlBumPage:
        setValue(1);
        break;
      case AddAlbumPage:
        setValue(2);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname])

  return (
    <Box className="flex justify-center items-center h-[10vh]"  >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="w-1/2 rounded-xl fixed shadow-lg"
      >
        <BottomNavigationAction label="все альбомы" icon={<OpenInFullIcon />} component={Link} to={AdllAlbumPage} />
        <BottomNavigationAction label="Поиск :)" icon={<SearchIcon />} component={Link} to={SearchAlBumPage} />
        <BottomNavigationAction label="Добавление" icon={<AddIcon />} component={Link} to={AddAlbumPage} />
      </BottomNavigation>
    </Box>
  );
}


