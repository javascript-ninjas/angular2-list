import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListComponent } from './list/list.component';
import { ListService } from './list/list.service';
import 'rxjs/Rx';

const appRoutes: Routes = [
    {
        path: '',
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
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        ListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [ListService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
