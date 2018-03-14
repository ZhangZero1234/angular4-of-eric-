/**
 * @author: Thiago Lima
 * @name: edit.omponent.ts
 * @description: Edit component targeting 
 * to be exported to the the main app component
 */

import { Component, NgModule, OnInit, trigger, transition, style, animate, state } from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationExtras, NavigationStart } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { PMO } from '../../models/pmo';
import { Mail } from '../../models/mail';
import { PMOService } from '../../services/pmo/index';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
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
  styleUrls: ['./edit.component.scss'],
  providers: [PMOService, PMO]
})

export class EditComponent implements OnInit {

  public pmo;
  public PMOValidation;
  public show: Boolean = false;
  public loading: Boolean = false;
  public model: any = { PMOValidation: {} };
  public status;
  public error;

  constructor(private http: Http,
    private router: Router,
    private route: ActivatedRoute,
    private PMOService: PMOService) { }

  ngOnInit() {

    this.route.params
      .switchMap((params) => this.PMOService.getById(params.ibmId))
      .subscribe(pmo => this.pmo = pmo);

    this.model.ibmId = this.route.snapshot.params['ibmId'];
    this.model.PMOValidation.CMRNumber = this.route.snapshot.params['CMRNumber'];
    this.model.PMOValidation.contractNumber = this.route.snapshot.params['contractNumber'];
    this.model.PMOValidation.workNumber = this.route.snapshot.params['workNumber'];
    this.model.PMOValidation.status = this.route.snapshot.params['status'];
    this.model.PMOValidation.rejectCriteria = this.route.snapshot.params['rejectCriteria'];
    this.model.PMOValidation.created = this.route.snapshot.params['created'];
    this.model.PMOValidation.lastModified = this.route.snapshot.params['lastModified'];

    this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });

  }

  private getAllPMO() {

    this.PMOService.getAllPMO().subscribe(pmo => { this.pmo = pmo; });

  }

  private mailSender() {

   const mail = {
      sendTo: `${this.model.ibmId}`,
      subject: 'IBM Agritech - Buying Rejected',
      content: '<h3> Hi ' + `${this.model.ibmId}` + ',</h3>' +
      '<p> an error occured on approve buying the API.</p>' + 
      '<h3> Contract Number: </h3>' + '<p>' + `${this.model.PMOValidation.contractNumber}` + '</p>' +
      '<h3> Status: </h3>' + '</p>' + `${this.model.PMOValidation.status}` + '</p>'
    };

    this.PMOService.sendMail(mail).subscribe(mail => { mail = mail; }, error => {

      this.error = 'Error on sending e-mail.';

    });

  }

  private rejectService() {

    this.PMOService.reject(this.pmo["iui"]).subscribe(res =>
    {
      res = res;
      console.log(res);
    },error => {
    this.error = 'Error in calling Reject Service';
    console.log(this.error);
    });

  }

  public postPMO() {

    this.loading = true;

    this.model.PMOValidation.lastModified = new Date();

    this.PMOService.update(this.model).subscribe(data => {

    this.model.PMOValidation.status === "R" ? this.rejectService() : 'error exit';
    this.router.navigate(['/software/agritech/platform/pmo/table/data']);
    this.getAllPMO();

    },
    error => {
      this.error = 'Error on saving the user.';
      this.loading = false;
    });

  }

}
