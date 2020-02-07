import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
    show : boolean = false;
    phrase : any = {
        text: 'Un gran poder requiere una gran responsabilidad',
        author: 'Ben Parker'
    }
}
