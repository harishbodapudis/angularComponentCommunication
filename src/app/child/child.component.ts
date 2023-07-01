import { Component,OnInit,Input,Output,EventEmitter,OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  dataBox : any = [
    {
      type:'Color',
      item:'Green'
    },
    {
      type:'Color',
      item:'Red'
    },
    {
      type:'Color',
      item:'Yellow'
    },
    {
      type:'Color',
      item:'Blue'
    },
    {
      type:'Animal',
      item:'Dog'
    },
    {
      type:'Animal',
      item:'Cow'
    },
    {
      type:'Animal',
      item:'Goat'
    },
    {
      type:'Animal',
      item:'Cat'
    },
    {
      type:'Fruit',
      item:'Mango'
    },
    {
      type:'Fruit',
      item:'Cherry'
    },
    {
      type:'Fruit',
      item:'Banana'
    },
    {
      type:'Fruit',
      item:'Apple'
    },
  ];

  @Input()
  selectCategory : any = '';
  tempData : any = this.dataBox.filter((data:any) => data.type === this.selectCategory);
  finalData = !this.selectCategory ? this.dataBox : this.tempData;

  @Output() 
  selectedItem = new EventEmitter()


  reset() {
    this.selectCategory = '';
    this.selectedItem.emit('');
  }

  setEmit(value:any) {
    console.log(value)
    this.selectedItem.emit(value);
  }

  constructor() {
    console.log(this.finalData + "const");
  }

  ngOnInit() {
    
    this.tempData = this.dataBox.filter((data:any) => data.type === this.selectCategory);
    this.finalData = !this.selectCategory ? this.dataBox : this.tempData;
    console.log(this.finalData + "ngOn" + this.tempData);
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.tempData = this.dataBox.filter((data:any) => data.type === this.selectCategory);
  //   this.finalData = this.selectCategory ? this.dataBox : this.tempData;
  // }

  selectedCategory(value : any) {
    this.tempData = this.dataBox.filter((data:any) => data.type === value);
    this.finalData = !this.selectCategory ? this.dataBox : this.tempData;
  }
  

}
