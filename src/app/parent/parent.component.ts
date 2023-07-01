import { Component,OnInit,ViewChild} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent,{static : false});

  childData:any;

  userSelection : string = '';
  userItem : string = '';

  // selectedCategory(value : any) {
  //   this.userSelection = value;
  // }

  getItem(e:any) {
    console.log(e);
    this.userItem = e;
  }
  constructor() {

  }

  ngOnInit() {}
}
