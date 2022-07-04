export class Ingredient{
    constructor(public name: string, public amount: number){}
}


//above class will be same as the below class, above class is shortcut provided by typescript
// export class Ingredient{
//     public name: string ;
//     public amount: number;

//     constructor(name: string, amount:number){
//         this.name = name;
//         this.amount = amount;
//     }
// }