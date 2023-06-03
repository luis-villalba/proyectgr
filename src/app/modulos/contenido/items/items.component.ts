import { Component, OnInit } from '@angular/core';
import { Detalle } from 'src/app/models/detalle';
import { Item } from 'src/app/models/item';
import { DetalleService } from 'src/app/services/detalle.service';
import { ItemService } from 'src/app/services/item.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {

  public detalle: Detalle = new Detalle();
  public userItems: Item[] = [];

  constructor(
    private itemService: ItemService,
    private detalleService: DetalleService,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    const username = this.authService.getLoggedInUser();
    this.itemService.getItemsByUsuario(username).subscribe(
      (response: Item[]) => {response.forEach((elem: any)=>{
        let temp = new Item()
        temp.set(elem)
        this.userItems = response;
      })
      });

  }

  onSave() {
    if (this.detalle.item) {
      const item = this.userItems.find((item) => item.nombre === this.detalle.item);
      if (item) {

        this.detalleService.create(this.detalle).subscribe(() => {
          this.detalle = new Detalle();
        });
      }
    }
  }


  onitem(item: Item) {
    this.detalle.item = item.nombre;
  }




}
