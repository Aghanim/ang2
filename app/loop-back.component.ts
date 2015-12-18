import {Component} from 'angular2/core';

@Component({
	selector: 'loop-back',
	template: `
    <input #box (keyup)="log(box)">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent {
	log(myVar: any) {
		console.log(myVar);
	}
}