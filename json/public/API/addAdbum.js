import express from 'express';
import jsonfile from 'jsonfile';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.get('/', async (req, res) => {  // Используем GET и обрабатываем параметры запроса
    
    const file = process.env.VITE_JSONALBUMLOCAL_KEY;

    try {
        const dir = path.dirname(file);
        let existingData = { albums: [] };

        // Проверяем, существует ли файл
        if (fs.existsSync(file)) {
            existingData = await jsonfile.readFile(file);
        } else {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true }); // Создаем директорию, если ее нет
            }
        }

        // Получаем данные из параметров запроса
        const title = req.query.title; // Получаем значение параметра `title`
        
        if (!title) {
            throw new Error("Параметр 'title' не был передан.");
        }

        const newAlbum = { id: existingData.albums.length + 1, title: title };

        // Добавляем новый альбом в список
        existingData.albums.push(newAlbum);

        // Записываем обновленные данные обратно в файл
        await jsonfile.writeFile(file, existingData, { spaces: 2 });

        console.log('Альбом успешно добавлен');
        res.status(200).json({
            message: 'Альбом успешно добавлен',
            data: newAlbum
        });
    } catch (error) {
        console.error('Ошибка при обновлении данных:', error);
        res.status(500).json({
            message: 'Ошибка при обновлении данных',
            error: error.message
        });
    }
});

export default router;
