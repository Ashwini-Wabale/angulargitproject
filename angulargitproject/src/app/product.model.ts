export class Product{
    pid:number;
    pname:string;
    price:number;
    //constructor is provided by constructor only
    //as we are providing hard code value thats why constructor is written
    //data is going to come from webservices 
    constructor(pid:number,nm:string,price:number){
        this.pid=pid;
        this.pname=nm;
        this.price=price;
    }
}