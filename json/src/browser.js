import { setupWorker, rest } from 'msw';

export const worker = setupWorker(
  rest.get('/api/AlbumAllFetch', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, title: "Album 1" },
        { id: 2, title: "Album 2" }
        // Добавьте больше данных по необходимости
      ])
    );
  })
);
