import {Component} from 'angular2/core';
import {Hero} from './hero';
import {ClickMeComponent} from './click-me.component';
import {KeyUpComponent_v1,
KeyUpComponent_v2,
KeyUpComponent_v3,
KeyUpComponent_v4
}   from './keyup.components';

import {LoopbackComponent}   from './loop-back.component';

@Component({
	directives: [ClickMeComponent, LoopbackComponent,
		KeyUpComponent_v1,
		KeyUpComponent_v2,
		KeyUpComponent_v3,
		KeyUpComponent_v4],
    selector: 'my-app',
    template: `<h2>{{title}}</h2>
    			<h1>My name is {{myHero.name}}</h1>
    			<ul><li *ngFor="#hero of heroes">
    				{{hero.name}}
    			</li></ul>
    			<p *ngIf="heroes.length > 3">There are many heroes!</p>
    			<click-me>fail</click-me><br />
    			<key-up1>load</key-up1><br />
    			<key-up2>load</key-up2><br />
    			<key-up3>load</key-up3><br />
    			<key-up4>load</key-up4><br />
    			<loop-back>load2</loop-back>
    			`
})
export class AppComponent {
	title = 'Tour of Heroes';
	heroes = [
		new Hero(1, 'Windstorm'),
		new Hero(13, 'Bombasto'),
		new Hero(15, 'Magneta'),
		new Hero(20, 'Tornado')
	];
	myHero = this.heroes[0];
}