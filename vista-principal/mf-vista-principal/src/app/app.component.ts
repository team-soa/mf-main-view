import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { fromEvent } from 'rxjs';
import { Cancion } from './Clases/Cancion';
import { DataManagerAuxService } from './services/data-manager-aux.service';
import { DataManagerService } from './services/data-manager.service';

@Component({
  selector: 'mf-vista-principal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mf-vista-principal';
  newSearch$ = fromEvent(window, "newSearch");
  isSearching = false;
  constructor(private router: Router, private service: DataManagerService,
    private listaCancionesService: DataManagerAuxService, private cookie: CookieService) { }

  listaDeCacniones: Cancion[] = [];
  cancionActual: Cancion = new Cancion();

  ngOnInit(): void {
    this.listaCancionesService.sharedListaCanciones.subscribe(listaCanciones => this.listaDeCacniones = listaCanciones)

    this.service.obtenerListaCancionesPublicas().subscribe(lista => {
      this.listaDeCacniones = lista;
    })
    this.validating();
  }

  validating() {
    this.newSearch$.subscribe((resp: any) => {
      console.log(resp);
      this.listaDeCacniones =resp.detail;
    })
  }

  public  IrAStrem(item: Cancion) {
    this.service.saveCancionStream(item);
    const event = new CustomEvent('newStream', { detail: JSON.stringify(item) });
    window.dispatchEvent(event);
    
    // this.cookie.set("streamSong", JSON.stringify(item));
    this.router.navigate(['/stream']);
    
  }

}
