import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { MaterialModule } from '@angular/material';
import 'rxjs/Rx';

import { MainComponent } from '../main/main.component';
import { HomeComponent } from '../home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ListComponent } from '../list/list.component';
import { ListElementComponent } from '../list-element/list-element.component';
import { ListService } from '../../services/list.service';
import { PaginationService } from '../../services/pagination.service';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'Welcome component title'
        }
    },
    {
        path: 'list',
        component: ListComponent,
        data: {
            title: 'List component title'
        }
    },
    {
        path: 'list/:id',
        component: ListElementComponent
    },
    {
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path: '**', redirectTo: '/404'
    }
];

@NgModule({
    declarations: [
        MainComponent,
        HomeComponent,
        PageNotFoundComponent,
        ListComponent,
        ListElementComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        MaterialModule.forRoot()
    ],
    providers: [ListService, PaginationService, { provide: LocationStrategy, useClass: PathLocationStrategy }],
    bootstrap: [MainComponent]
})

export class AppModule {
}
