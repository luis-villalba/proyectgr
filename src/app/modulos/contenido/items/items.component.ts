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
  public items: Item[] = [];
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
      (response: Item[]) => {
        this.userItems = response;
      },
      (error: any) => {
        console.error('Error al obtener los items:', error);
        // Manejar el error de obtener los items
        // Puedes mostrar un mensaje de error o realizar otra acción adecuada
      }
    );
  }

  onSave() {
    if (this.detalle.item) {
      const item = this.items.find((item) => item.id === this.detalle.item);
      if (item) {
        item.estado = 'enviado';
        this.detalleService.create(this.detalle).subscribe(() => {
          this.detalle = new Detalle();
        });
      }
    }
  }


  onNextItem() {
    const nextItemIndex = this.getNextItemIndex();
    if (nextItemIndex !== -1) {
      const nextItem = this.items[nextItemIndex];
      if (nextItem.estado === 'aprobado') {
        this.onitem(nextItem);
      }
    }
  }


  getNextItemIndex(): number {
    const currentIndex = this.items.findIndex((item) => item.id === this.detalle.item);
    if (currentIndex !== -1 && currentIndex < this.items.length - 1) {
      return currentIndex + 1;
    }
    return -1;
  }

  isNextButtonDisabled(): boolean {
    const nextItemIndex = this.getNextItemIndex();
    return nextItemIndex === -1 || this.items[nextItemIndex].estado !== 'aprobado';
  }

  onitem(item: Item) {
    this.detalle.item = item.id;
  }
  isItemEditable(): boolean {
    const currentItem = this.items.find((item) => item.id === this.detalle.item);
    return currentItem !== undefined && (currentItem.estado === 'borrador' || currentItem.estado === 'correccion');
  }

  onDraft() {
    if (this.detalle.item) {
      const item = this.items.find((item) => item.id === this.detalle.item);
      if (item) {
        item.estado = 'borrador';
      }
    }
  }


}
