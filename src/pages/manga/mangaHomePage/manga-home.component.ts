import { Component } from '@angular/core';

@Component({
    selector: 'manga-home',
    templateUrl: './manga-home.component.html',
    styleUrls: ['./manga-home.component.scss']
})
export class MangaHomePage {
    constructor(){
        console.log('page');
    }
}
