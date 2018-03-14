import { Component, NgModule, OnInit, trigger, transition, style, animate, state } from '@angular/core';

/**
 * @author: Thiago Lima
 * @name: footer.ts
 * @description: Footer component targeting 
 * to be exported to the the main app component
 */

@Component({
  moduleId: module.id,
  selector: 'app-footer',
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
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
