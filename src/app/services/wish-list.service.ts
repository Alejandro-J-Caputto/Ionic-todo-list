import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  public listas: any[] = []


  constructor() {
    this.loadStorage()


  }


  addList(titulo: string) {
    const nuevaLista = new Lista(titulo)
    this.listas.push(nuevaLista)
    this.saveStorage();
    return nuevaLista.id

  }

  borrarLista(lista: Lista) {

    this.listas = this.listas.filter(listasData =>
      listasData.id !== lista.id);
    this.saveStorage()

  }



  getList(id: string | number) {

    id = Number(id);

    return this.listas.find(listaData => listaData.id === id);
  }


  saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas))
  }

  loadStorage() {
    if (localStorage.getItem('data')) {

      this.listas = JSON.parse(localStorage.getItem('data'))
    } else {
      this.listas = []
    }
  }
}
