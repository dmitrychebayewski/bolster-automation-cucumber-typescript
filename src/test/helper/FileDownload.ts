import {createWriteStream, mkdirSync, existsSync} from 'fs';
import {request} from 'urllib-sync';

export class FileDownload {
    public static download(url: string): void {
        const path = './target/';
        if(!existsSync(path)) {
            mkdirSync(path);
        }
        const fileName = url.substr(url.lastIndexOf('/'));
        const res = request(url);
        createWriteStream(`${path}${fileName}`).write(res.data);
    }
}