import { Component, OnInit } from '@angular/core';
import { WishListService } from '../services/wish-list.service';
import { Lista } from '../models/lista.model';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from '../models/lista-item-model';

@Component({
  selector: 'app-generar',
  templateUrl: './generar.page.html',
  styleUrls: ['./generar.page.scss'],
})
export class GenerarPage implements OnInit {

  lista: Lista;
  nameItem = ""

  constructor(public wish: WishListService, public route: ActivatedRoute) {


    const listaId = this.route.snapshot.paramMap.get('listId');
    console.log(listaId);
    this.lista = this.wish.getList(listaId);
    console.log(this.lista);
  }

  ngOnInit() {
  }




  addItemToList() {
    if (this.nameItem.length === 0) {
      return;
    }
    const newItem = new ListaItem(this.nameItem)
    this.lista.items.push(newItem)
    this.nameItem = ""
    this.wish.saveStorage()

  }
  cambioCheck(item: ListaItem) {
    const pendientes = this.lista.items.filter(itemData => !itemData.completado).length
    console.log(pendientes);
    if (pendientes === 0) {
      this.lista.terminadaEn = new Date()
      this.lista.terminada = true;

    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false
    }


    this.wish.saveStorage()
    console.log(this.wish.listas);
  }

  borrar(i: number) {
    this.lista.items.splice(i, 1);
    this.wish.saveStorage()
  }
}
