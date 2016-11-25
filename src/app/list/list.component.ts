import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../list/list.service';
import { ListElementComponent } from "../list-element/list-element.component";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
    url: string;
    errorMessage: string;
    list: ListElementComponent[];

    constructor(private listService: ListService, private router: Router) {
        this.url = 'https://jsonplaceholder.typicode.com/users';
    }

    ngOnInit() {
        this.listService.fetchList(this.url).subscribe(
            list => this.list = list,
            error => this.errorMessage = <any>error
        );
    }

    onSelect(element: ListElementComponent): void {
        this.router.navigate(['/list', element.id]);
    }
}
