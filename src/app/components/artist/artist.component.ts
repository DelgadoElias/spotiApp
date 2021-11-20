import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent{

  loading : boolean;
  artist : any = {};
  tracks : any[] = [];

  constructor(private router: ActivatedRoute, private _spotifyService: SpotifyService) { 

    this.loading = true;

    this.router.params.subscribe(params => {
      this.getArtist( params['id'] );
      this.getTopTracks( params['id'] );

    })

  }

  // .. Service --> Html
  getArtist(id : string){
    this._spotifyService.getArtistDetail( id ).subscribe(artist =>{ 
      this.artist = artist;
      this.loading = false;
    })
  }

  getTopTracks(id: string){
    this._spotifyService.getArtistsTopTracks( id ).subscribe((tracks : any) =>{ 
      this.tracks = tracks;
      console.log(tracks)
      this.loading = false;
    })
  }

}
