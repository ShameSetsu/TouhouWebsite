import { Component } from '@angular/core';

@Component({
    selector: 'home-page',
    template: `
    <mat-toolbar role="header">  
        <mat-toolbar-row>
            <span><a href="manga">MANGA</a></span>
        </mat-toolbar-row>
    </mat-toolbar>

    <router-outlet></router-outlet>
    `,
    styles: ['p{font-size: 3em; color: red}']
})
export class HomeComponent {
    
}
