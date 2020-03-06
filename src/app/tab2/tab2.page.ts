import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  data: any[] = [
    {
      "name": "Tip"
    },
    {
      "name": "Tip"
    },
    {
      "name": "Tip"
    },
    {
      "name": "Tip"
    },
    {
      "name": "Tip"
    },
    {
      "name": "Tip"
    },
    {
      "name": "Tip"
    },
    {
      "name": "Tip"
    }
  ];

  busqueda: any;

  inputS($event){
    console.log(this.busqueda);
  }
}
