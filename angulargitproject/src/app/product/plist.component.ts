import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
    selector:"plist",
    templateUrl:'./plist.component.html',
    styleUrls:['./plist.component.css']
})
export class PlistComponent implements OnInit{
    parr:Product[];
    constructor(private pservice:ProductService){ //pservice object gets injected here automatically internally object create by angular
        console.log("plist constructor called");
    } 
    //to get all products from service after constructor init gets called
    ngOnInit(){
        console.log("ngInit plist called");
        this.parr=this.pservice.getAllProducts(); //to get array from service class
    }
}