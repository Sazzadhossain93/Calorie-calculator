import { Component, OnInit } from '@angular/core';
import{ ItemService } from '../../services/item.service';
import{ Item } from '../../models/Item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    name: '',
    quantity: '',
    calorie : ''
  }

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.item.name != '' && this.item.quantity != '' && this.item.calorie != ''){
      this.itemService.addItem(this.item);
      this.item.name = '';
      this.item.quantity = '';
      this.item.calorie = '';
    }
  }

}
