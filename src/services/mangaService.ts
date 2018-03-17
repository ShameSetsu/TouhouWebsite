import { Injectable } from "@angular/core";
import { Api } from './api';
import { MangaInfo } from '../models/mangaInfo.model';

@Injectable()
export class MangaService {
    constructor(private api: Api){}

    getManga(page: number, tag?: string): Promise<Array<MangaInfo>>{
        let endpoint: string = '/manga/page/' + page;
        tag? endpoint += '?tag=' + tag : null;
        return this.api.get(endpoint)
    }
}