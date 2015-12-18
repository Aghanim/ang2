System.register(['angular2/core', './hero', './click-me.component', './keyup.components', './loop-back.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_1, click_me_component_1, keyup_components_1, loop_back_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (click_me_component_1_1) {
                click_me_component_1 = click_me_component_1_1;
            },
            function (keyup_components_1_1) {
                keyup_components_1 = keyup_components_1_1;
            },
            function (loop_back_component_1_1) {
                loop_back_component_1 = loop_back_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                    this.heroes = [
                        new hero_1.Hero(1, 'Windstorm'),
                        new hero_1.Hero(13, 'Bombasto'),
                        new hero_1.Hero(15, 'Magneta'),
                        new hero_1.Hero(20, 'Tornado')
                    ];
                    this.myHero = this.heroes[0];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        directives: [click_me_component_1.ClickMeComponent, loop_back_component_1.LoopbackComponent,
                            keyup_components_1.KeyUpComponent_v1,
                            keyup_components_1.KeyUpComponent_v2,
                            keyup_components_1.KeyUpComponent_v3,
                            keyup_components_1.KeyUpComponent_v4],
                        selector: 'my-app',
                        template: "<h2>{{title}}</h2>\n    \t\t\t<h1>My name is {{myHero.name}}</h1>\n    \t\t\t<ul><li *ngFor=\"#hero of heroes\">\n    \t\t\t\t{{hero.name}}\n    \t\t\t</li></ul>\n    \t\t\t<p *ngIf=\"heroes.length > 3\">There are many heroes!</p>\n    \t\t\t<click-me>fail</click-me><br />\n    \t\t\t<key-up1>load</key-up1><br />\n    \t\t\t<key-up2>load</key-up2><br />\n    \t\t\t<key-up3>load</key-up3><br />\n    \t\t\t<key-up4>load</key-up4><br />\n    \t\t\t<loop-back>load2</loop-back>\n    \t\t\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map