import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-registraritems',
  templateUrl: './registraritems.component.html',
  styleUrls: ['./registraritems.component.sass']
})
export class RegistraritemsComponent  implements OnInit{

  public item: Item = new Item
  public usuario: string=''



constructor(
private itemService:ItemService,
public router: Router,
private authService: AuthenticationService

){

}
ngOnInit(): void {}

onSave() {
  this.itemService.create(this.item).subscribe(
    () => {
      alert('Item registrado exitosamente');
      this.router.navigate(['/contenido']);
    },
    (error: any) => {
      console.error('Error al guardar el item:', error);
      // Manejar el error de guardar el item
      // Puedes mostrar un mensaje de error o realizar otra acción adecuada
    }
  );
}

}
