export class Item {
  public id!:number
  public nombre!:string
  set(data:any){
    this.id = data.id
    this.nombre = data.nombre
  }
}
