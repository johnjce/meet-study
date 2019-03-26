import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MeetingI} from '../../app/models/meeting.interface';
import {AnuncioProvider} from '../../providers/anuncio';
import { Subscription  } from 'rxjs/Subscription';
/**
 * Generated class for the GestionAnuncioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestion-anuncio',
  templateUrl: 'gestion-anuncio.html',
})
export class GestionAnuncioPage implements OnInit{
  anuncio: MeetingI = {
    name: "",
    primarySubject: "",
    secondarySubject: "",
    time: "",
  };
  anuncioId = "";
  observer: Subscription ;
  constructor(public navCtrl: NavController,private anuncioService: AnuncioProvider, public navParams: NavParams) {
    this.anuncioId = this.navParams.get('id');
  }
  ngOnInit() {
    if(this.anuncioId){
      this.loadTodo();
    }
  }
  async loadTodo(){
    console.log("Entró");
    this.anuncioService.getAnuncio(this.anuncioId).subscribe(res => {
      console.log("hola");
      this.anuncio = res;
    });
  }
  removeAnuncios(){
    this.anuncioService.removeAnuncio(this.anuncioId);
    this.navCtrl.pop();
  }
}
