import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-registraritems',
  templateUrl: './registraritems.component.html',
  styleUrls: ['./registraritems.component.sass']
})
export class RegistraritemsComponent  implements OnInit{

  public item: Item = new Item



constructor(
private itemServive:ItemService,
public route: Router

){

}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}

onSave(){
this.itemServive.create(this.item).subscribe(()=>{
this.route.navigate(['/contenido'])
})
}

}
