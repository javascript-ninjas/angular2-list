import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListService } from '../services/list.service';
import { forEach } from "@angular/router/src/utils/collection";

@Component({
    selector: 'app-list-element',
    templateUrl: './list-element.component.html',
    styleUrls: ['./list-element.component.css']
})

export class ListElementComponent implements OnInit {
    requestUrl: string;
    errorMessage: string;

    albumId: number;
    id: number;
    url: string;
    title: string;
    thumbnailUrl: string;
    description: string;

    constructor(private route: ActivatedRoute, private router: Router, private listService: ListService) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.requestUrl = this.buildUrl(params);
            this.listService.fetchListElement(this.requestUrl).subscribe(
                element => this.setListElement(element),
                error => this.errorMessage = <any>error
            );
        });
    }

    private setListElementProperties(key, value) {
        this[key] = value;
        if (key === 'title')
            this.description = this.parseDescription(value);
    }

    private parseDescription(text): string {
        let description = null;
        for (let i=0; i<60; i++) {
            description += text;
        }
        return description;
    }

    private setListElement(element): void {
        forEach(element, (value, key) => {
            this.setListElementProperties(key, value);
        });
    }

    onBack(): void {
        this.router.navigate(['list']);
    }

    buildUrl(params): string {
        return 'https://jsonplaceholder.typicode.com/photos/' + params.id;
    }
}
