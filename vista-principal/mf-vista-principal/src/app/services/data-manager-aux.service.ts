import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cancion } from '../Clases/Cancion';

@Injectable({
  providedIn: 'root'
})
export class DataManagerAuxService {

  private listaCanciones = new BehaviorSubject([new Cancion()]);
  sharedListaCanciones = this.listaCanciones.asObservable();

  constructor() { }

  nextListaDeCanciones(listaCanciones: Cancion[]) {
    this.listaCanciones.next(listaCanciones)
  }
}
