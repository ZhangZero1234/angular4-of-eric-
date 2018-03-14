import { Component, NgModule, OnInit, trigger, transition, style, animate, state } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';

/**
 * @author: Thiago Lima
 * @name: welcome.ts
 * @description: Login component targeting 
 * to be exported to the the main app component
 */

@Component({
  moduleId: module.id, 
  selector: 'welcome-login',
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
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public show: boolean = false;
  public returnUrl: string;
  public ibmId: string;
  public model: any = {};
  public loading: boolean = false;
  public error;

  constructor(private router: Router, private route: ActivatedRoute) { }

  welcome() {

    this.loading = true;
    this.router.navigate(['/software/agritech/platform/pmo/login']);
    this.reloadPage();

  }

  private reloadPage(): void {
    
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
  
  }

}
