import { Component } from '@angular/core';
import { Api } from '../../../services/api';
import { MangaInfo } from '../../../models/mangaInfo.model';
import { MangaService } from '../../../services/mangaService';

@Component({
    selector: 'manga-home',
    templateUrl: './manga-home.component.html',
    styleUrls: ['./manga-home.component.scss']
})
export class MangaHomePage {

    mangas: Array<MangaInfo>;

    constructor(private mangaService: MangaService){
        this.mangaService.getManga(1)
            .then(res=>{
                console.log('mangas:', res);
                this.mangas = res;
            })
            .catch(err=>{
                console.error('manga error', err);
            })
    }
}
