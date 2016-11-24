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
    url: string;
    errorMessage: string;

    constructor(private listService: ListService, private router: Router) {
        this.url = 'https://jsonplaceholder.typicode.com/users';
    }

    ngOnInit() {
        this.listService.fetchList(this.url).subscribe(
            (list) => {
                this.list = list;
                console.log('this.list: ', this.list);
            },
            error => this.errorMessage = <any>error
        );
    }

    onSelect(element: ListElement) {
        console.log('Clicked element: ', element);
        this.router.navigate(['/element', element.id]);
    }
}
