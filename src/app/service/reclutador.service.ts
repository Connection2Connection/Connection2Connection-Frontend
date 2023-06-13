import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reclutador } from '../model/reclutador';
import { Subject } from 'rxjs';
const base_url= environment.base
@Injectable({
  providedIn: 'root'
})
export class ReclutadorService {
  private url=`${base_url}/reclutadores`
  private listCambio = new Subject<Reclutador[]>()
  private confirmarEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }

  List() {
    return this.http.get<Reclutador[]>(this.url);
  }

  Insert(reclutador: Reclutador) {
    return this.http.post(this.url, reclutador)
  }

  SetList(ListaNueva: Reclutador[]){
    this.listCambio.next(ListaNueva)
  }

  GetList(){
    return this.listCambio.asObservable()
  }

  ListId(id: number){
    return this.http.get<Reclutador>(`${this.url}/${id}`);
  }

  Update(reclutador: Reclutador) {
    //return this.http.put(this.url + "/" + reclutador.id, reclutador);
    return this.http.put(this.url, reclutador)
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
