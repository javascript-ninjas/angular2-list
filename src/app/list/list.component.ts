import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../services/list.service';
import { PaginationService } from '../services/pagination.service';
import { ListElementComponent } from "../list-element/list-element.component";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
    url: string;
    errorMessage: string;
    allItems: ListElementComponent[];

    pager: any = {};
    pagedItems: any[];

    constructor(private listService: ListService, private router: Router, private paginationService: PaginationService) {
        this.url = 'https://jsonplaceholder.typicode.com/photos';
    }

    ngOnInit() {
        this.listService.fetchList(this.url).subscribe(
            list => {
                this.allItems = list;
                this.setPage(1);
            },
            error => this.errorMessage = <any>error
        );
    }

    private checkPageRange(page: number): boolean {
        return page < 1 || page > this.pager.totalPages;
    }

    private getCurrentPageOfItems(): Array<ListElementComponent> {
        return this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    onSelect(element: ListElementComponent): void {
        this.router.navigate(['/list', element.id]);
    }

    setPage(page: number): void {
        let isPageOutOfRange = this.checkPageRange(page);
        if (isPageOutOfRange)
            return;
        this.pager = this.paginationService.getPagination(this.allItems.length, page);
        this.pagedItems = this.getCurrentPageOfItems();
    }
}
