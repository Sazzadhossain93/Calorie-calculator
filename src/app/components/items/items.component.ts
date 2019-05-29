import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import{ Item } from '../../models/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  totalCalorie: number;
  editState: boolean = false;
  itemToEdit: Item;


  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      
      this.items = items;
      this.getTotalCalorie();
    })
  }

  getTotalCalorie(){
    this.totalCalorie = this.items.reduce((total, item) => {
      return total + parseFloat(item.calorie.toString());
    }, 0);


  }

  deleteItem(event, item){
   this.clearState();
    this.itemService.deleteItem(item);
  }

  editItem($event, item){
  this.editState = true;
  this.itemToEdit = item;
  }

  updateItem(item){
this.itemService.updateItem(item);
this.clearState();
  
}


clearState(){
  this.editState = false;
  this.itemToEdit = null;
}
}
