export class Detalle {
  public id!:number
  public detalle!:string
  public item!:number
  public usuario!: string;
  set(data:any){
    this.id = data.id
    this.detalle = data.detalle
    this.item = data.item
  }
}
