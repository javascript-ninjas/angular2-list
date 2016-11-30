import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ListElementComponent } from '../components/list-element/list-element.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListService {
    constructor(private _http: Http) {}

    fetchList(url): Observable<ListElementComponent[]> {
        return this._http.get(url)
            .map((response: Response) => <ListElementComponent[]>response.json())
            .do(data => {})
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    fetchListElement(url): Observable<ListElementComponent> {
        return this._http.get(url)
            .map((response: Response) => <ListElementComponent>response.json())
            .do(data => {})
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}
