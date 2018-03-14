import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { PMO } from '../../models/index';
import { Mail } from '../../models/index';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';

@Injectable()
export class PMOService {
    
    private headers = new Headers({'Content-Type': 'application/json'});
    private basePath: string = environment.pmoServiceBasePath;
    private getAllDocuments: string = environment.pmoServiceGetAllDocuments;
    private getDocumentsByIbmId: string = environment.pmoServiceGetDocumentsByIbmId;
    private updatePMOById: string = environment.pmoServiceUpdatePMOById;
    private mailService: string = environment.pmoServiceMailService;
    private rejectService: string = environment.pmoServiceRejectService;

    constructor(private http: Http, private pmo: PMO) { }

    public getAllPMO() {
        return this.http.get(this.basePath + this.getAllDocuments).map((response: Response) => response.json());
    }

    public getById(ibmId: any) {
        return this.http.get(this.basePath + this.getDocumentsByIbmId + ibmId).map((response: Response) => response.json());
    }

    public update(pmo: PMO) {
        return this.http.post(this.basePath + this.updatePMOById, pmo).map((response: Response) => response.json());
    }

    public sendMail(mail: Mail) {
        return this.http.post(this.basePath + this.mailService, mail).map((response: Response) => response.json());
    }

    public delete(_id: number) {
        return this.http.delete('/api/pmo/' + _id, this.jwt()).map((response: Response) => response.json());
    }

    public reject(iui: any) {
        return this.http.get(this.basePath + this.rejectService + iui).map((response: Response) => response.json());
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