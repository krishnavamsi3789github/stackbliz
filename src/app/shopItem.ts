export class ShopItem {
    Item: any;
    count: number ;
    img : string;
    constructor(Item?: any , count?:number , img?:string) {
        this.Item = Item;
        this.count = count;
        this.img = img;
    }
}