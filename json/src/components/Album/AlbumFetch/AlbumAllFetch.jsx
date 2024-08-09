export default function AlbumAllFetch() {
    const GetFullAlbum = import.meta.env.VITE_GETALBUM_KEY;

    return fetch(GetFullAlbum)
        .then((res) => res.json())
        .then((albums) => {
            return albums;
        });
}
