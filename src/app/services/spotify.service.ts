import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Este servicio podrá ser inyectado en otros lugares.
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
// -----------------------------------------------------------------------------------
  constructor( private _http: HttpClient) { 
    console.log('Spoti Service');
  }
  // -----------------------------------------------------------------------------------
  // Modificamos la base de la api
  getQuery(query : string){
    // Centralizamos toda la petición
    const url = `https://api.spotify.com/v1/${query}`;

    // Headers http ..
    const headers = new HttpHeaders(
      {'Authorization' : 'Bearer BQBK0dw1ugiM_tiZjJGwQfWONghOszpZGuF_v4EaZkdOgg3yRNzkijNPmUrcCj7VxUaeDjqpKlIiu9FkmG8'}
      );
      // Peticion http
      return this._http.get(url, { headers });
  }

  //..

  getNewReleases(){
      return this.getQuery('browse/new-releases').pipe( map( (data : any) => data['albums'].items ))
  }

  getArtist( termino : string ){
      return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map( (data : any) => data['artists'].items ))
  }

  getArtistDetail(id:string){
    return this.getQuery(`artists/${id}`)
    // .pipe( map( (data : any) => data['artists'].items ))
  }

  getArtistsTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?market=ES`).pipe( map( (data : any) => data['tracks'] ))
  }
}
