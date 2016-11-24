import { Component, OnInit } from '@angular/core';
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

    constructor(private _listService: ListService) {
    }

    ngOnInit() {
        this._listService.fetchList().subscribe(
            list => this.list = list,
            error => this.errorMessage = <any>error
        );
    }
}
