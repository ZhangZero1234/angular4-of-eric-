import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable()
export class UserService {
    constructor(private http: Http) { }

    openIdConnect() {
        return this.http.get('/software/agritech/platform/pmo').map((response: Response) => response.json());
    }

    getOpenConnect() {
        return this.http.get('/software/agritech/platform/pmo/login').map((response: Response) => response.json());
    }

    getById(_id: any) {
        return this.http.get('/software/agritech/platform/pmo/api/user/' + _id, this.jwt()).map((response: Response) => response.json());
    }

    create() {
        return this.http.post('/software/agritech/platform/pmo/api/signup', this.jwt()).map((response: Response) => response.json());
    }

    update() {
        return this.http.put('/software/agritech/platform/pmo/api/user/', this.jwt()).map((response: Response) => response.json());
    }

    delete(_id: number) {
        return this.http.delete('/software/agritech/platform/pmo/api/user/' + _id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}