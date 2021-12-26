import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.scss'],
  animations: [
    trigger('animationCircle', [
      transition('*=> *', [
        style({ opacity: 0 }),
        animate('3.2s', style({ opacity: 1 })),
      ]),
    ]),
    trigger('move2', [
      state('in', style({transform: 'translateX(0)'})),
      state('out', style({transform: 'translateX(100px)'})),
      transition('in => out', animate('5s linear')),
      transition('out => in', animate('5s linear'))
    ]),
    trigger('crosses', [
      state('in', style({ opacity: 0 })),
      state('out', style({ opacity: 1 })),
      transition('in => out', animate('3s linear')),
      transition('out => in', animate('3s linear'))
    ]),
    trigger('circle', [
      state('out', style({ opacity: 0 })),
      state('in', style({ opacity: 1 })),
      transition('in => out', animate('3s linear')),
      transition('out => in', animate('3s linear'))
    ]),
  ],
})
export class Page6Component implements OnInit {
  moveDivState = 'start';

  changeMoveDivState(): void{
    this.moveDivState = 'end';


  }
  changeOutDivState(): void{
    this.moveDivState = 'start';

  }

  constructor() { }

  ngOnInit(): void {
  }
  state = 'in';
  ngAfterViewInit() {
    setTimeout(() => {
      this.state = 'out';
    }, 0);
  }
  onEnd(event:any) {
    this.state = 'in';
    if (event.toState === 'in') {
      setTimeout(() => {
        this.state = 'out';
      }, 0);
    }
  }
}
