import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AboutMeComponent } from './about-me/about-me.component';


@NgModule({
    id: 'pages',
    declarations: [
        HomeComponent,
        AboutMeComponent
    ],
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent },
            {path: 'about-me', component: AboutMeComponent}
        ]),
        BrowserModule,
        SharedModule
    ],
    exports: [
        RouterModule
    ]
})

export class PagesModule{}