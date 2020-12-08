import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class ProductService{
    parr=[new Product(12,"Lays",30.00),
          new Product(26,"Chocolate",150.00),
          new Product(34,"Nachos",50.00),
          new Product(20,"Coca Cola",80.00),
          new Product(50,"Biscuits",70.00)  ];  

          getAllProducts():Product[]{
              return this.parr; //return array to ptab and plist component
          } 
          addProduct(p:Product){
            this.parr.push(p);
          } 
          updateProduct(p:Product){
            for(let i=0;i<this.parr.length;i++){
              if(this.parr[i].pid==p.pid){
                  this.parr[i].pname=p.pname;
                  this.parr[i].price=p.price;
                  break;

              }
            }
          }  
          deleteProduct(p:Product){ 
            for(let i=0;i<this.parr.length;i++){
              if(this.parr[i].pid==p.pid){ 
                this.parr.splice(i,1); //delete from i position and delete only one element
                break;
              }

          }
        }
} 