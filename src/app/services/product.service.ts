import { Injectable } from '@angular/core';

import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1,'./assets/images/p1.JPG',100,1,'mens t-shirt half hands'),
    new Product(2,'./assets/images/p2.JPG',300,1,'mens t-shirt half hands'),
    new Product(3,'./assets/images/p3.JPG',500,1,'mens t-shirt full hands'),
    new Product(4,'./assets/images/p4.JPG',700,1,'mens t-shirt full hands'),
    new Product(5,'./assets/images/p5.JPG',800,1,'mens zeans pant'),
    new Product(6,'./assets/images/p6.JPG',200,1,'mens zeans pant'),
    new Product(7,'./assets/images/p7.JPG',900,1,'mens casual trowser'),
    new Product(8,'./assets/images/p8.JPG',1000,1,'mens zeans pant'),
    new Product(9,'./assets/images/p9.JPG',2000,1,'mens cotton kurta'),
    new Product(10,'./assets/images/p10.JPG',1700,1,'mens cotton kurta'),
    new Product(11,'./assets/images/p11.JPG',1800,1,'mens cotton kurta'),
    new Product(12,'./assets/images/p12.JPG',900,1,'mens cotton kurta'),
    new Product(13,'./assets/images/p13.JPG',7200,1,'mens silk kurta'),
    new Product(14,'./assets/images/p14.JPG',2800,1,'mens silk kurta'),
    new Product(15,'./assets/images/p15.JPG',6300,1,'mens silk kurta'),
    new Product(16,'./assets/images/p16.JPG',3100,1,'mens silk kurta'),

    new Product(17,'./assets/images/w1.JPG',1200,1,'Womens Plain Woven Georgette Saree with Unstitched Blouse...'),
    new Product(18,'./assets/images/w2.JPG',3400,1,'Star Fashions Womens Rayon A-Line Kurta'),
    new Product(19,'./assets/images/w3.JPG',5100,1,'Womens Fit And Flare Knee Length Gown'),
    new Product(20,'./assets/images/w4.JPG',7100,1,'Womens Net and Soft Silk Full Embroidery Semi-Stitched Red Salwar Suit'),
    new Product(21,'./assets/images/w5.JPG',1000,1,'Womens Net Semi stitched Lehenga Choli'),
    new Product(22,'./assets/images/w6.JPG',1200,1,'Womens Tafetta Silk Semi Stitched Lehenga Choli'),
    new Product(23,'./assets/images/w7.JPG',1900,1,'Womens Net Semi stitched Lehenga Choli'),
    new Product(24,'./assets/images/w8.JPG',1599,1,'Womens Cotton Jaipuri Printed Trending Sleeveless Anarkali'),
    new Product(25,'./assets/images/w9.JPG',1699,1,'Womens Tissue Semi-stitched Lehenga Choli'),
    new Product(26,'./assets/images/w10.JPG',1299,1,'Parii Fashion Jaipur Cotton Flared/A-line Stitched Casual'),
    new Product(27,'./assets/images/w11.JPG',1999,1,'Speed X Fashion Womens Handbag'),
    new Product(28,'./assets/images/w12.JPG',1199,1,'Womens cotton Straight Kurta With Checkered Trouser'),
    new Product(29,'./assets/images/w13.JPG',5200,1,'Fashion Womens Banarasi Soft Lichi Silk Saree With Blouse'),
    new Product(30,'./assets/images/w14.JPG',2300,1,'Womens Anarkali Gown Knee Length Dress'),
    new Product(31,'./assets/images/w15.JPG',1400,1,'Womens Georgette Saree With Unstiched Blouse Piece'),
    new Product(32,'./assets/images/w16.JPG',7999,1,'Vaibhav Industries Womens Handloom Cotton A-Line Kurta'),  
  ]



  constructor() { }

  getProducts(): Product[]{
    //return observable
    return this.products
  }
}
