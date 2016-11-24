import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-element',
    templateUrl: './list-element.component.html',
    styleUrls: ['./list-element.component.css']
})

export class ListElementComponent implements OnInit {
    constructor(private _router: Router) {}

    ngOnInit() {}

    onBack(): void {
        this._router.navigate(['list']);
    }
}
