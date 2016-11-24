import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ListElement } from './list-element';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListService {
    constructor(private _http: Http) {}

    fetchList(url): Observable<ListElement[]> {
        return this._http.get(url)
            .map((response: Response) => <ListElement[]>response.json())
            .do((data) => {})
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    fetchListElement(url): Observable<ListElement> {
        return this._http.get(url)
            .map((response: Response) => <ListElement>response.json())
            .do((data) => {})
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}
