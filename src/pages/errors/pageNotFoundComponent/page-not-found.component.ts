import { Component } from '@angular/core';

@Component({
    selector: 'page-not-found',
    template: `
        <p>PAGE NOT FOUND</p>
        <a href="manga">manga</a>
    `,
    styles: ['p{font-size: 3em; color: red}']
})
export class PageNotFoundComponent {
    
}
