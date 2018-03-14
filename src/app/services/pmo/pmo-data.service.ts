
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PMO } from '../../models/pmo';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PMODataService {

  private pmo: PMO;
  private headers = new Headers({'Content-Type': 'application/json'});
  private basePath: string = 'https://agritechservice.mybluemix.net/';
  private getAllService: string = 'AgriTechService/v1/Users/PMO/getAll';

  constructor(private http: Http) {
    this.pmo;
  }

  public getAllPMO(): Promise <PMO[]> {

    return this.http.get(this.basePath + this.getAllService)
      .toPromise()
      .then(response => response.json() as PMO[]);

  }

}
