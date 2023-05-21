import { Component, OnInit } from '@angular/core';
import { Detalle } from 'src/app/models/detalle';
import { Item } from 'src/app/models/item';
import { DetalleService } from 'src/app/services/detalle.service';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {
  public items: Item[] = []
  public detalle: Detalle = new Detalle
  constructor(
    private itemService: ItemService,
    private detalleService: DetalleService

  ) { }

  ngOnInit(): void {
    this.itemService.load().subscribe((res: any) => {
      res.forEach((elem: any) => {
        let temp = new Item()
        temp.set(elem)
        this.items.push(temp)
      });
    })
  }
  onSave(){
    this.detalleService.create(this.detalle).subscribe(()=>{
this.detalle= new Detalle
    })
    }
onitem(item: Item){
this.detalle.item = item.id

}

}



