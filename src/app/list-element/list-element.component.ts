import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListService } from '../list/list.service';
import { forEach } from "@angular/router/src/utils/collection";

@Component({
    selector: 'app-list-element',
    templateUrl: './list-element.component.html',
    styleUrls: ['./list-element.component.css']
})

export class ListElementComponent implements OnInit {
    url: string;
    errorMessage: string;

    id: number;
    name: string;
    username: string;
    email: string;
    address: Object;
    phone: string;
    website: number;
    company: Object;

    constructor(private route: ActivatedRoute, private router: Router, private listService: ListService) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.url = this.buildUrl(params);
            this.listService.fetchListElement(this.url).subscribe(
                element => this.setListElementProperties(element),
                error => this.errorMessage = <any>error
            );
        });
    }

    private setListElementProperties(element): void {
        forEach(element, (value, key) => {
            this[key] = value;
        });
    }

    onBack(): void {
        this.router.navigate(['list']);
    }

    buildUrl(params): string {
        return 'https://jsonplaceholder.typicode.com/users/' + params.id;
    }
}
