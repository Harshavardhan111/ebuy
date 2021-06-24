import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems =[
    {
      prodId: 1,
      img: "./assets/images/p1.JPG",
      amt: 100,
      qnt: 1,
      name: "men's t-shirt half hands"
  
    },
    
    {
      prodId: 2,
      img: "./assets/images/p2.JPG",
      amt: 300,
      qnt: 1,
      name: "men's t-shirt half hands"
    },
      {
      
        prodId: 3,
        img: "./assets/images/p3.JPG",
        amt: 500,
        qnt: 1,
        name: "mens t-shirt full hands"
      },
     {
     
      prodId: 4,
      img: "./assets/images/p4.JPG",
      amt: 700,
      qnt: 1,
      name: "mens t-shirt full hands"
     },
     {
      
      prodId: 5,
      img: "./assets/images/p5.JPG",
      amt: 800,
      qnt: 1,
      name: "mens zeans pant"
     },
    {
     
      prodId: 6,
      img: "./assets/images/p6.JPG",
      amt: 200,
      qnt: 1,
      name: "mens zeans pant"
  
    },
     
    {
      
      prodId: 7,
      img: "./assets/images/p7.JPG",
      amt: 900,
      qnt: 1,
      name: "mens casual trowser"
    },  
      
     {
      
      prodId: 8,
      img: "./assets/images/p8.JPG",
      amt: 1000,
      qnt: 1,
      name: "mens zeans pant"
     },
  
      {
        
        prodId: 9,
        img: "./assets/images/p9.JPG",
        amt: 2000,
         qnt: 1,
         name: "men's cotton kurta" 
      },
      {
        name:"mens cotton kurta",
        prodId: 10,
        img: "./assets/images/p10.JPG",
        amt: 1700,
         qnt: 1 
      }, 
      {
        name:"mens cotton kurta",
        prodId: 11,
        img: "./assets/images/p11.JPG",
        amt: 1800,
         qnt: 1 
      },     
      {
        name:"mens cotton kurta",
        prodId: 12,
        img: "./assets/images/p12.JPG",
        amt: 900,
         qnt: 1 
      },
      {
        name:"mens silk kurta",
        prodId: 13,
        img: "./assets/images/p13.JPG",
        amt: 7200,
         qnt: 1 
      },
      {
        name:"mens silk kurta",
        prodId: 14,
        img: "./assets/images/p14.JPG",
        amt: 2800,
         qnt: 1 
      },
      {
        name:"mens silk kurta",
        prodId: 15,
        img: "./assets/images/p15.JPG",
        amt: 6300,
         qnt: 1 
      },
  
      {
        name:"mens silk kurta",
        prodId: 16,
        img: "./assets/images/p16.JPG",
        amt: 3100,
         qnt: 1 
      },
      {
        name:"Womens Plain Woven Georgette Saree with Unstitched Blouse...",
        prodId: 17,
        img: "./assets/images/w1.JPG",
        amt: 1200,
         qnt: 1 
      },
      {
        name:"Star Fashions Womens Rayon A-Line Kurta",
        prodId: 18,
        img: "./assets/images/w2.JPG",
        amt: 3400,
         qnt: 1 
      },
      {
        name:"Womens Fit And Flare Knee Length Gown",
        prodId: 19,
        img: "./assets/images/w3.JPG",
        amt: 5100,
         qnt: 1 
      },
      {
        name:"Womens Net and Soft Silk Full Embroidery Semi-Stitched Red Salwar Suit",
        prodId: 20,
        img: "./assets/images/w4.JPG",
        amt: 7100,
         qnt: 1 
      },
      {
        name:"Womens Net Semi stitched Lehenga Choli",
        prodId: 21,
        img: "./assets/images/w5.JPG",
        amt: 1000,
         qnt: 1 
      },
      {
        name:"Womens Tafetta Silk Semi Stitched Lehenga Choli",
        prodId: 22,
        img: "./assets/images/w6.JPG",
        amt: 1200,
         qnt: 1 
      },
      {
        name:"Womens Net Semi stitched Lehenga Choli",
        prodId: 23,
        img: "./assets/images/w7.JPG",
        amt: 1900,
         qnt: 1 
      },
      {
        name:"Womens Cotton Jaipuri Printed Trending Sleeveless Anarkali",
        prodId: 24,
        img: "./assets/images/w8.JPG",
        amt: 1599,
         qnt: 1 
      },
      {
        name:"Womens Tissue Semi-stitched Lehenga Choli",
        prodId: 25,
        img: "./assets/images/w9.JPG",
        amt: 1699,
         qnt: 1 
      },
      {
        name:"Parii Fashion Jaipur Cotton Flared/A-line Stitched Casual",
        prodId: 26,
        img: "./assets/images/w10.JPG",
        amt: 1299,
         qnt: 1 
      },
      {
        name:"Speed X Fashion Womens Handbag",
        prodId: 27,
        img: "./assets/images/w11.JPG",
        amt: 1999,
         qnt: 1 
      },
      {
        name:"Womens cotton Straight Kurta With Checkered Trouser",
        prodId: 28,
        img: "./assets/images/w12.JPG",
        amt: 1199,
         qnt: 1 
      },
      {
        name:"Fashion Womens Banarasi Soft Lichi Silk Saree With Blouse",
        prodId: 29,
        img: "./assets/images/w13.JPG",
        amt: 5200,
         qnt: 1 
      },
      {
        name:"Womens Anarkali Gown Knee Length Dress",
        prodId: 30,
        img: "./assets/images/w14.JPG",
        amt: 2300,
         qnt: 1 
      },
      {
        name:"Womens Georgette Saree With Unstiched Blouse Piece",
        prodId: 31,
        img: "./assets/images/w15.JPG",
        amt: 1400,
         qnt: 1 
      },
      {
        name:"Vaibhav Industries Women's Handloom Cotton A-Line Kurta",
        prodId: 32,
        img: "./assets/images/w16.JPG",
        amt: 7999,
         qnt: 1 
      }
  


    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
