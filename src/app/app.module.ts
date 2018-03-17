import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Api } from '../services/api';
import { AppRoutingModule, websiteComponents } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        websiteComponents
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatCheckboxModule,
        MatMenuModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        HttpModule
    ],
    providers: [
        Api
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
