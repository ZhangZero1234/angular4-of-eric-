/**
 * @author: Thiago Lima <thiagobr@br.ibm.com>
 * @name: authentication.service.ts
 * @description: Injectable responsible for setting the authorization
 * on the local storage.
 * @param: { username, password }
 * @function: login(username, password){};
 * 
 */

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

    private OAuthLoginEndPointUrl = 'https://agritech-platform-pmo-dev.mybluemix.net/software/agritech/platform/pmo/table';  // Oauth Login EndPointUrl to web API
    private clientId = 'MTM3Y2I5ZWMtYmM0OS00';
    private clientSecret = 'MjNiNjk1MTktODJjYy00';

    constructor(public http: Http) { }

    login(ibmId, password): Observable <any> {

        let params: URLSearchParams = new URLSearchParams();
        params.set('username', ibmId);
        params.set('password', password);
        params.set('client_id', this.clientId);
        params.set('client_secret', this.clientSecret);
        params.set('grant_type', 'password');

        return this.http.get(this.OAuthLoginEndPointUrl, {
            search: params
        }).map(this.handleData)
            .catch(this.handleError);
    }

    private handleData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    public logout() {
        localStorage.removeItem('currentUser');
    }
}