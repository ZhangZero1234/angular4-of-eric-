/**
 * @author: Thiago Lima
 * @name: table.ts
 * @description: Table component targeting 
 * to be exported to the the main app component.
 */

import { Component, NgModule, OnInit, trigger, transition, style, animate, state } from '@angular/core';
import { Location } from '@angular/common'; 
import { Http, HttpModule, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { PMOService } from '../services/pmo/index';
import { UserService } from '../services/auth/user.service';
import { Pipe, PipeTransform } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { PMO } from '../models/index';
import { Observable } from 'rxjs';
 
@Component({
  moduleId: module.id,
  selector: 'app-table',
  templateUrl: './table.component.html',
  animations: [
    trigger(
      'myAnimation',
      [
        transition(
          ':enter', [
            style({ backgroundColor: 'transparent', color: '#F4F2F4', opacity: 1 }),
            animate('800ms')
          ]
        ),
        transition(
          ':leave', [
            style({ opacity: 0 }),
            animate('800ms')
          ]
        )
      ]
    )
  ],
  styleUrls: ['./table.component.scss'],
  providers: [PMOService, PMO]
})


export class TableComponent implements OnInit {

  public pmo: PMO[] = [];
  public p: number = 1;
  public show: boolean = false;
  public search;
  public token;
  public data;
  public selectedEntry;
  public model: any = {};
  public isOff: boolean = true;
  public pencil: string = '../../assets/pencil_inactive.png';

  constructor(private http: Http,
    private router: Router,
    private PMOService: PMOService,
    private userService: UserService,
    private location: Location) { }


  private getAllPMO() {
    this.PMOService.getAllPMO().subscribe(pmo => { this.pmo = pmo; });
  }

  private reloadRoute(): void {

    if (window.localStorage) {
      if (!localStorage.getItem('firstLoad')) {
        localStorage['firstLoad'] = true;
        window.location.reload();
      }
      else
        localStorage.removeItem('firstLoad');
    }
  }

  ngOnInit() {
    this.location.replaceState('software/agritech/platform/pmo/table/data');
    this.getAllPMO();
  }

}
