import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { WishListService } from '../../services/wish-list.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';




@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @ViewChild(IonList, { static: true }) lista: IonList
  @Input() terminada = true;

  constructor(public wish: WishListService, public router: Router, public alertController: AlertController) {

  }

  ngOnInit() { }


  selectedList(lista: Lista) {
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/generar/${lista.id}`)
    } else {

      console.log(lista.id);
      this.router.navigateByUrl(`/tabs/tab1/generar/${lista.id}`)
    }
  }

  borrarLista(lista: Lista) {
    this.wish.borrarLista(lista)
  }

  async editarNombre(lista: Lista) {
    const alert = await this.alertController.create({
      header: 'Edit List',
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
        text: 'Update',
        handler: (data) => {
          if (data.titulo.length === 0) {
            return;
          }

          lista.titulo = data.titulo
          this.wish.saveStorage()
          this.lista.closeSlidingItems()
        }
      }
      ]
    });

    await alert.present();
  }





}
