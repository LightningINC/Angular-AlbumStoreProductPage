import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private _albumUrl = `../assets/album.json`
  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<any>{
    return this._http.get(this._albumUrl).pipe(
      tap(response => console.log(response)),
      map((response) => response.json())
    );
  }
}
