import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
@Component({
    selector:"ptab",
    templateUrl:'./ptab.component.html',
    styleUrls:['./ptab.component.css']

})
    

export class PtabComponent implements OnInit{
    //temporary hard code value is taken
    parr:Product[]; 
    
    pob:Product; //to pass the product object to child
          flag=false; 
        
          constructor(private pservice:ProductService){
                console.log("ptab constructor called");
          } 
          ngOnInit(){
                console.log("ngInit ptab called");
              this.parr=this.pservice.getAllProducts();
          }  
          updateProduct(p:Product){
                this.flag=true; //to open the form
                this.pob=p; //to pass product object to child
          } 
          deleteProduct(p:Product){
              this.pservice.deleteProduct(p); //pass to product service to delete the product
          }

          displayForm(){
              this.flag=true;//when button is click we have to show form so we will make it true
          }
}