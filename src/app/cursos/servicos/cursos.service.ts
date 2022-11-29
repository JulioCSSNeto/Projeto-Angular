import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cursos } from '../modelo/cursos';
import { delay, first, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = 'api/cursos'

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Cursos[]>(this.API)
    .pipe(
      first(),
      tap(cursos => console.log(cursos))
    );
  }
}
