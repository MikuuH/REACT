import React, { useState, useEffect } from 'react';
import BoxAlbumAllfetch from './BoxAlbumAllfetch';
import AlbumAllFetch from './AlbumAllFetch';

export default function AlbumPage() {
    const [albums, setAlbums] = useState([]);

    // Получаем данные из AlbumAllFetch
    const handleAlbumsFetched = (fetchedAlbums) => {
        setAlbums(fetchedAlbums);
    };

    useEffect(() => {
        AlbumAllFetch().then(handleAlbumsFetched);
    }, []);

    return (
        <div>
            <div className="flex justify-center items-center mt-5 text-3xl font-bold text-white">
                <h1>ПОЛУЧЕНИЕ ВСЕХ АЛЬБОМОВ</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
                {albums.map((album) => (
                    <BoxAlbumAllfetch key={album.id} title={album.title} />
                ))}
            </div>
        </div>
    );
}
