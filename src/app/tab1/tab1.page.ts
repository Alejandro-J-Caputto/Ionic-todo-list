import { Component } from '@angular/core';
import { WishListService } from '../services/wish-list.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public wish: WishListService, private router: Router, private alertController: AlertController) {


  }

  async addList() {
    //this.router.navigateByUrl('/tabs/tab1/generar')

    const alert = await this.alertController.create({
      header: 'New List',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Name for the list'

        }
      ],
      buttons: [{
        text: 'Cancel',
        role: ' cancel ',
        handler: () => {
          console.log('Cancel');
        }
      },
      {
        text: 'Add a List',
        handler: (data) => {
          if (data.titulo.length === 0) {
            return;
          }
          const listId = this.wish.addList(data.titulo)
          this.router.navigateByUrl(`/tabs/tab1/generar/${listId}`)
        }
      }
      ]
    });

    await alert.present();
  }






}
