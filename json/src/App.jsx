import Container from "./components/Container/Container";
import Routing from "./components/Routing/Routing";
import AlbumSearch from "./components/Album/AlbumSearch/AlbumSearch";
import AlbumPage from "./components/Album/AlbumFetch/AlbumPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddAlbumPage from "./components/Album/AddAlbum/AddAlbumPage";


export default function Main() {
    return (
        <Router>
            <Container>
              <Routing />
              <Routes>
                <Route path="/album" element={<AlbumPage />}></Route>
                <Route path="/album/search" element={<AlbumSearch />}></Route>
                <Route path="/album/add" element={<AddAlbumPage />}></Route>
              </Routes>
            </Container>
        </Router>
      )
}