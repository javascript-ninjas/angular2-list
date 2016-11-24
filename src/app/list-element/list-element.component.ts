import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListService } from '../list/list.service';
import { ListElement } from "../list/list-element";

@Component({
    selector: 'app-list-element',
    templateUrl: './list-element.component.html',
    styleUrls: ['./list-element.component.css']
})

export class ListElementComponent implements OnInit {
    url: string;
    errorMessage: string;
    listElement: ListElement;

    constructor(private route: ActivatedRoute, private router: Router, private listService: ListService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.url = this.buildUrl(params);
            this.listService.fetchListElement(this.url).subscribe(
                (element) => {
                    this.listElement = element;
                    console.log('this.listElement: ', this.listElement);
                },
                error => this.errorMessage = <any>error
            );
        });
    }

    onBack(): void {
        this.router.navigate(['list']);
    }

    buildUrl(params): string {
        return 'https://jsonplaceholder.typicode.com/users/' + params.id;
    }
}
