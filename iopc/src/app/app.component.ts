import { Component } from '@angular/core';
import { Iproducts } from './components/model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iopc';
  productArray: Array<Iproducts>=[
    {
      productName:"samsung",
      pdescription:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores eius qui aperiam quaerat numquam sequi excepturi quisquam illo non!`,
      pcategory:"catlog",
    },
    {
      productName:"samsung",
      pdescription:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores eius qui aperiam quaerat numquam sequi excepturi quisquam illo non!`,
      pcategory:"product",
    }
  ]


  onproductadd(data:Iproducts){
console.log(data)
this.productArray.push(data)
  }
}
