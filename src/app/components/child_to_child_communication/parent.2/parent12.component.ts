import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent12',
  template: '<div style="background-color: brown;"> <p>Parent 12 Component</p> <app-childa2 (data) = "childData($event)"></app-childa2> <br> <app-childb2 [data]="childa2Message"></app-childb2> </div> ',
})
export class ParentComponent12 {

  childa2Message : string ;


  childData(message:string){
this.childa2Message = message;
}
}
