import { Injectable } from '@angular/core';
import { Match } from '../model/match';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url= environment.base

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private url=`${base_url}/Match`
  private listCambio = new Subject<Match[]>()
  private confirmarEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }

  List() {
    return this.http.get<Match[]>(this.url);
  }

  Insert(match : Match) {
    return this.http.post(this.url, match)
  }

  SetList(ListaNueva: Match[]){
    this.listCambio.next(ListaNueva)
  }

  GetList(){
    return this.listCambio.asObservable()
  }

  ListId(id: number){
    return this.http.get<Match>(`${this.url}/${id}`);
  }

  Update(match : Match) {
    
    return this.http.put(this.url, match)
  }
  Delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  GetConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  SetConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }
}
