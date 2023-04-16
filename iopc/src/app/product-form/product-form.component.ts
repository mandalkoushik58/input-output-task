import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iproductcategory, Iproducts } from '../components/model/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

 @Output() addproduct:EventEmitter<Iproducts>  = new EventEmitter<Iproducts>()
 constructor(){}
  ngOnInit(): void {

  }
 addItem(pname:HTMLInputElement,pdesc:HTMLTextAreaElement,catg:Iproductcategory){

  let obj:Iproducts={
    productName:pname.value,
    pdescription:pdesc.value,
    pcategory:catg
  }
 // console.log(obj)
  pname.value='';
  pdesc.value='';
  this.addproduct.emit(obj)
 }




}




