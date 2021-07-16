import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item: Item | undefined;
  //@Input() item?: Item;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {

   const id:number = parseInt(this.route.snapshot.paramMap.get('id')!, 10 );

    console.log(id);
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.item) {
      this.itemService.updateItem(this.item)
        .subscribe(() => this.goBack());
    }
  }
}
