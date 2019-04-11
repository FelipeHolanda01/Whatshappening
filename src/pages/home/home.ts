import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   
   nickname = "eu";

   mychats = [
     {
       sendDate: new Date(),
 
       message: "olá tudo bem?!!!!",
 
       user:"eu"
     
     },
     {
       sendDate: new Date(),
 
       message: "estou bem sim",
 
       user: "você"
     }
   ]

   public model = {

    message:""
   };

  constructor(public navCtrl: NavController) {

  }

  sendMessage(){

    var message = {

      sendDate: new Date(),

      message: this.model.message,

      user:"eu"
    }
    this.mychats.push(message);    
  }
}
