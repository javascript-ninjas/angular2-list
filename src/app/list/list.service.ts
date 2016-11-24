import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ListElement } from './list-element';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListService {
    private _listUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private _http: Http) {
    }

    fetchList(): Observable<ListElement[]> {
        return this._http.get(this._listUrl)
            .map((response: Response) => <ListElement[]>response.json())
            .do((data) => {
                //console.log('All: ', JSON.stringify(data));
                //console.table(data)
            })
            .catch((error) => {
                console.error(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}
