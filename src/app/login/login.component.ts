import { Component, NgModule, OnInit, trigger, transition, style, animate, state } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/auth/user.service';

/**
 * @author: Thiago Lima
 * @name: login.ts
 * @description: Login component targeting 
 * to be exported to the the main app component
 */

@Component({
  moduleId: module.id, 
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public show: boolean = false;
  public loading: boolean = false;
  public model: any = {};
  public error;
  public data;

  constructor(private userService: UserService, private router: Router) { }
  
  login() {

    this.loading = true;
    this.router.navigate(['/software/agritech/platform/pmo/table']);

  }

  private reloadPage(): void {
     location.reload();
    }

    private getOpenIdRoute() {
      this.userService.getOpenConnect().subscribe(data => { this.data = data; })
    }

  ngOnInit() {
    this.getOpenIdRoute();
    //this.reloadPage();
    location.replace('/software/agritech/platform/pmo/table/data');
  }

}
