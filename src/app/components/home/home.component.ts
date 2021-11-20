import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent{
  // Caja de variables
  newAlbums : any[] = [];
  loading : boolean;
  error : boolean;
  msgError : string = '';
  nError : string = '';

  // ..
  constructor( private _spoti : SpotifyService ) { 
    // ..
    this.loading = true;
    this.error = false;

    this._spoti.getNewReleases()
    .subscribe((data : any) => { 
      this.newAlbums = data; /* Mapeado ya en el service */ 
      this.loading = false;   
    },( e ) => {
      console.log(e)
      this.loading = false;
      this.error = true;
      this.msgError = e.error.error.message
      this.nError = e.status.toString()
    });



    }
  // ..

  
}

// this._spoti.getNewReleases().subscribe((data : any) => {
//   console.log(data)
//   this.newAlbums = data.albums.items
// })
// Se escribe (data : any) para que no lancen errores sobre lo que puede tener el objeto

// this._http.get('').subscribe(data => {
//   console.log(data)
// })
// // Para usarlo, hay que subscribirnos. Sería similar a un axios.get().then()