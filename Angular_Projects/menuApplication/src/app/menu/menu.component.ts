import { Component, OnInit } from '@angular/core';
import { Item } from './../item';
import { ItemService } from '../item.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  //selectedItem?: Item;
  items: Item[] = [];
  constructor(private itemService:ItemService,private messageService: MessageService) { }

  ngOnInit(): void {
    this.getItems();
  }

  /*onSelect(item: Item): void {
    this.selectedItem = item;
    this.messageService.add(`MenuComponent: Selected item id=${item.id}`);
  }*/

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.items = items);
  }

  add(id:any,name: string, price: any): void {
    id=id;
    name = name.trim();
    price=price;
    if (!id||!name||!price) { return; }
    this.itemService.addItem({ id,name,price } as Item)
      .subscribe(item => {
        this.items.push(item);
        window.location.reload();
      });
  }
  delete(item: Item): void {
    this.items = this.items.filter(i => i !== item);
    this.itemService.deleteItem(item.id).subscribe();
  }
}
