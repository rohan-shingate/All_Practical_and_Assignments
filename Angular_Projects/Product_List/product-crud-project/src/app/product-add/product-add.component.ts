import { Component, OnInit } from '@angular/core';

import { FormGroup,  FormBuilder,FormsModule,  Validators } from '@angular/forms';

import { ProductsService } from '../products.service';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

productName='';
productDescription='';
productPrice='';
  constructor(private productService:ProductsService,private router:Router) {
  
   }
  ngOnInit(): void {
  }
      submit():void{
  
      const data=
      {
        productName:this.productName,
        productDescription:this.productDescription,
        productPrice:this.productPrice
       };
  
      
  this.productService.create(data).subscribe(
    ()=>{
    this.router.navigate(['/products'])
  })
    
}
}


