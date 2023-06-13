import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Puesto_trabajo } from '../model/puesto_trabajo';
import { Subject } from 'rxjs';
const base_url= environment.base
@Injectable({
  providedIn: 'root'
})
export class Puesto_trabajoService {
  private url=`${base_url}/puesto_trabajos`
  private listCambio = new Subject<Puesto_trabajo[]>()
  private confirmarEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }

  List() {
    return this.http.get<Puesto_trabajo[]>(this.url);
  }

  Insert(puesto_trabajo: Puesto_trabajo) {
    return this.http.post(this.url, puesto_trabajo)
  }

  SetList(ListaNueva: Puesto_trabajo[]){
    this.listCambio.next(ListaNueva)
  }

  GetList(){
    return this.listCambio.asObservable()
  }

  ListId(id: number){
    return this.http.get<Puesto_trabajo>(`${this.url}/${id}`);
  }

  Update(puesto_trabajo: Puesto_trabajo) {
    //return this.http.put(this.url + "/" + puesto_trabajo.id, puesto_trabajo);
    return this.http.put(this.url, puesto_trabajo)
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
