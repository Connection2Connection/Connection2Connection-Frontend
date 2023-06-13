import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Reclutador } from '../model/reclutador';

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
    //return this.http.put(this.url + "/" + empresa.id, empresa);
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
