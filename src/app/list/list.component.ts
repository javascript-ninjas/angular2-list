import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../list/list.service';
import { ListElement } from "./list-element";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
    list: ListElement[];
    errorMessage: string;

    constructor(
        private _listService: ListService,
        private router: Router) {
    }

    ngOnInit() {
        this._listService.fetchList().subscribe(
            list => this.list = list,
            error => this.errorMessage = <any>error
        );
    }

    onSelect(element: ListElement) {
        console.log('Clicked element: ', element);
        this.router.navigate(['/element', element.id]);
    }
}
