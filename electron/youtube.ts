import ytdl from 'ytdl-core';
import { mainWindow } from './main'

const loadYoutubeAudio = async (id: string) => { 
    ytdl.getInfo(id).then(info => {
        const formats = ytdl.filterFormats(info.formats, 'audioonly')
        const format = formats.filter(f => f.container === 'mp4')[0]
        if (!format) {
            console.error('No audio format found')
            return;
        }

        const url = format.url;

        mainWindow?.webContents.send('youtubeAudioURL', url);
    }).catch(err => { 
        console.error(err);
    });
};

export { loadYoutubeAudio };