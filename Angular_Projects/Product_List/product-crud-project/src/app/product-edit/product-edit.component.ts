import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form:FormGroup;
  id:number;
  constructor(private route: ActivatedRoute,private formBuilder:FormBuilder,
     private router: Router,private  productService:ProductsService)
      {
        this.form=this.formBuilder.group({
          productName:'',
          productDescription:'',
          productPrice:''
        })
        this.id=this.route.snapshot.params.id;

        
        this.productService.get(this.id).subscribe(
          product=>this.form.patchValue(product)
          
        )
       }

  ngOnInit() {
 
   
  }

  submit():void{

    this.productService.update(this.id,this.form.getRawValue())
    .subscribe(
      
      ()=>{
        this.router.navigate(['products'])
      }
    )
  }

}




