import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private _albumUrl = `{
    "id": 1,
    "artist": "The Prependers",
    "album": {
      "name": "Opacity Zero",
      "releaseDate": "September 25, 2014",
      "coverImage": "assets/opacity-zero.jpg",
      "tracks":[
        {"trackNumber": 1, "trackName": "The Last", "trackLength": "4:48", "trackPrice": 0.99 },
        {"trackNumber": 2, "trackName": "Downtown", "trackLength": "3:13", "trackPrice": 0.99 },
        {"trackNumber": 3, "trackName": "Yellow Carpet", "trackLength": "3:42", "trackPrice": 0.99 },
        {"trackNumber": 4, "trackName": "Rocket to Mars", "trackLength": "4:31", "trackPrice": 0.99 },
        {"trackNumber": 5, "trackName": "Walk, not Run", "trackLength": "2:53", "trackPrice": 0.99 },
        {"trackNumber": 6, "trackName": "Design", "trackLength": "5:12", "trackPrice": 0.99 },
        {"trackNumber": 7, "trackName": "Shopping Cart", "trackLength": "9:07", "trackPrice": 0.99 },
        {"trackNumber": 8, "trackName": "Our Gift to You", "trackLength": "3:59", "trackPrice": 0.99 }
      ]
    }
  }`
  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<any>{
    return this._http.get(this._albumUrl).pipe(
      tap(response => console.log(response)),
      map((response) => response.json())
    );
  }
}
