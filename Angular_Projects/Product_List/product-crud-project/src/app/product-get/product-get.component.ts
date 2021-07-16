import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';


@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  products:Product[]=[] ;


  constructor(private ps:ProductsService) { }

  ngOnInit(): void {

    this.ps.all().subscribe(productList=>{
      this.products=productList
    },
    error=>{
      console.log(error);
    });


  }

  productDel(id:number): void{
    this.ps.delete(id).subscribe(
      ()=>{
        this.products=this.products.filter(p=> p.id !==id);
      }
    )
  }

}
