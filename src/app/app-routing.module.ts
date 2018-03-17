import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MangaHomePage } from '../pages/manga/mangaHomePage/manga-home.component';
import { PageNotFoundComponent } from '../pages/errors/pageNotFoundComponent/page-not-found.component';
import { HomeComponent } from '../pages/home/home.component';
import { MangaModule } from '../pages/manga/manga.module';

const mangaRoutes = [
    { path: 'manga', component: MangaHomePage }, 
    { path: 'home', component: HomeComponent }
];


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(mangaRoutes),
        RouterModule.forRoot(routes),
        MangaModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const websiteComponents = [
    PageNotFoundComponent,
    HomeComponent,
    MangaHomePage
]
