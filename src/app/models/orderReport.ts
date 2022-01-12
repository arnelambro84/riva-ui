
export interface Orders{
    ordersId: number;
    poInternal: string;
    poExternal:string;
    receivedDate:Date,
    productName:string;
    qtyOrdered:number,
    entryDate:Date,
    dueDate:Date
}