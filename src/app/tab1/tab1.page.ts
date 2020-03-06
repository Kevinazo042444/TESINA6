import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  data: any[] = [
    {
      "name": "Titulo",
      "info": "Informacion",
      "image": "https://www.outletmabe.com.mx/medias/Mabe-Refrigerador-400L-Extreme-Platinum-RMS400IXMRE0-Frente.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzI4OTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGViL2g0ZC84OTY1NzM2NDY0NDE0LmpwZ3wwMzBmZDZmY2U3OTFiNWMzMjc5M2ZhOWI4MTIwYzNhYzk1OTk3YzBkMzI5YTIwNTJlMWQyMzBlYzAyYjRiNTVm"
    },
    {
      "name": "Titulo",
      "info": "Informacion",
      "image": "https://www.outletmabe.com.mx/medias/Mabe-Refrigerador-400L-Extreme-Platinum-RMS400IXMRE0-Frente.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzI4OTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGViL2g0ZC84OTY1NzM2NDY0NDE0LmpwZ3wwMzBmZDZmY2U3OTFiNWMzMjc5M2ZhOWI4MTIwYzNhYzk1OTk3YzBkMzI5YTIwNTJlMWQyMzBlYzAyYjRiNTVm"
    },
    {
      "name": "Titulo",
      "info": "Informacion",
      "image": "https://www.outletmabe.com.mx/medias/Mabe-Refrigerador-400L-Extreme-Platinum-RMS400IXMRE0-Frente.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzI4OTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGViL2g0ZC84OTY1NzM2NDY0NDE0LmpwZ3wwMzBmZDZmY2U3OTFiNWMzMjc5M2ZhOWI4MTIwYzNhYzk1OTk3YzBkMzI5YTIwNTJlMWQyMzBlYzAyYjRiNTVm"
    },
    {
      "name": "Titulo",
      "info": "Informacion",
      "image": "https://www.outletmabe.com.mx/medias/Mabe-Refrigerador-400L-Extreme-Platinum-RMS400IXMRE0-Frente.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzI4OTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGViL2g0ZC84OTY1NzM2NDY0NDE0LmpwZ3wwMzBmZDZmY2U3OTFiNWMzMjc5M2ZhOWI4MTIwYzNhYzk1OTk3YzBkMzI5YTIwNTJlMWQyMzBlYzAyYjRiNTVm"
    },
    {
      "name": "Titulo",
      "info": "Informacion",
      "image": "https://www.outletmabe.com.mx/medias/Mabe-Refrigerador-400L-Extreme-Platinum-RMS400IXMRE0-Frente.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzI4OTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGViL2g0ZC84OTY1NzM2NDY0NDE0LmpwZ3wwMzBmZDZmY2U3OTFiNWMzMjc5M2ZhOWI4MTIwYzNhYzk1OTk3YzBkMzI5YTIwNTJlMWQyMzBlYzAyYjRiNTVm"
    },
    {
      "name": "Titulo",
      "info": "Informacion",
      "image": "https://www.outletmabe.com.mx/medias/Mabe-Refrigerador-400L-Extreme-Platinum-RMS400IXMRE0-Frente.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzI4OTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGViL2g0ZC84OTY1NzM2NDY0NDE0LmpwZ3wwMzBmZDZmY2U3OTFiNWMzMjc5M2ZhOWI4MTIwYzNhYzk1OTk3YzBkMzI5YTIwNTJlMWQyMzBlYzAyYjRiNTVm"
    },
    {
      "name": "Titulo",
      "info": "Informacion",
      "image": "https://www.outletmabe.com.mx/medias/Mabe-Refrigerador-400L-Extreme-Platinum-RMS400IXMRE0-Frente.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzI4OTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGViL2g0ZC84OTY1NzM2NDY0NDE0LmpwZ3wwMzBmZDZmY2U3OTFiNWMzMjc5M2ZhOWI4MTIwYzNhYzk1OTk3YzBkMzI5YTIwNTJlMWQyMzBlYzAyYjRiNTVm"
    },
    {
      "name": "Titulo",
      "info": "Informacion",
      "image": "https://www.outletmabe.com.mx/medias/Mabe-Refrigerador-400L-Extreme-Platinum-RMS400IXMRE0-Frente.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzI4OTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGViL2g0ZC84OTY1NzM2NDY0NDE0LmpwZ3wwMzBmZDZmY2U3OTFiNWMzMjc5M2ZhOWI4MTIwYzNhYzk1OTk3YzBkMzI5YTIwNTJlMWQyMzBlYzAyYjRiNTVm"
    },
    {
      "name": "Titulo",
      "info": "Informacion",
      "image": "https://www.outletmabe.com.mx/medias/Mabe-Refrigerador-400L-Extreme-Platinum-RMS400IXMRE0-Frente.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzI4OTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGViL2g0ZC84OTY1NzM2NDY0NDE0LmpwZ3wwMzBmZDZmY2U3OTFiNWMzMjc5M2ZhOWI4MTIwYzNhYzk1OTk3YzBkMzI5YTIwNTJlMWQyMzBlYzAyYjRiNTVm"
    },
    {
      "name": "Titulo",
      "info": "Informacion",
      "image": "https://www.outletmabe.com.mx/medias/Mabe-Refrigerador-400L-Extreme-Platinum-RMS400IXMRE0-Frente.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzI4OTF8aW1hZ2UvanBlZ3xpbWFnZXMvaGViL2g0ZC84OTY1NzM2NDY0NDE0LmpwZ3wwMzBmZDZmY2U3OTFiNWMzMjc5M2ZhOWI4MTIwYzNhYzk1OTk3YzBkMzI5YTIwNTJlMWQyMzBlYzAyYjRiNTVm"
    }
  ];

  busqueda: any;
  inputS($event){
    console.log(this.busqueda);
  }
}
