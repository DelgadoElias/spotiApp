import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  // Caja de variables

  newArtists : any[] = [];
  loading : boolean;

  //..
  constructor(private _spotiSearch : SpotifyService) {
    this.loading = false;
   }

  search(data : string){
    this.loading = true;
    this._spotiSearch.getArtist(data).subscribe((artist : any) => { 
      this.loading = false;
      this.newArtists = artist })
  }
}
