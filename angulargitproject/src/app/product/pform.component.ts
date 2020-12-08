import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
@Component({
    selector:"pform",
    templateUrl:'./pform.component.html',
    styleUrls:['./pform.component.css']
})
export class PformComponent{
    constructor(private pservice:ProductService){

    }
    pid:number;
    pname:string;
    price:number; 
    @Output() myevent=new EventEmitter(); //to pass the value from child to parent
    
    @Input("upprod") prod:Product; //to get the value upprod in prod (from ptab parent component in pform child component) 
    //i.e from parent to child(ptab to pform)
    //to check if the values is received in prod ngonchanges method is used
    
    ngOnChanges(change:SimpleChanges){  //when any @input property changes it get called everytime automatically
        console.log("ngonchanges pform get called");
        console.log(change); //data is received in form first
        if(change["prod"].currentValue!=change["prod"].previousValue){ //execute if prod property previous and current value are not same
            //assign data to form , get reflected in form  which id to be change
            this.pid=this.prod.pid;
            this.pname=this.prod.pname;
            this.price=this.prod.price;
        }

    } 
    
    addProduct(){
        let p=new Product(this.pid,this.pname,this.price);
        console.log(p);
        this.pservice.addProduct(p); //to add the product in parr i.e product service
        this.pid=0; //to clear the form
        this.pname="";
        this.price=0;
        this.myevent.emit(false); //pass to parent ptab using emit
    } 
    updateProduct(){
        let p=new Product(this.pid,this.pname,this.price);
        console.log(p);
        this.pservice.updateProduct(p); //to update the product in parr i.e product service
        this.pid=0; //to clear the form
        this.pname="";
        this.price=0;
        this.myevent.emit(false);  //to change the value of flag to false in ptab so that after update form will not appear
    }

}