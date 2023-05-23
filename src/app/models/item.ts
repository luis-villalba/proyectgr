export class Item {
  public id!: number;
  public nombre!: string;
  public estado: string = 'borrador';
  public usuario!: string;
  set(data: any) {
    this.id = data.id;
    this.nombre = data.nombre;
  }
}

