import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Calificacion_Estudiante } from '../model/calificacion_estudiante';
import { Subject } from 'rxjs';
const base_url= environment.base
@Injectable({
  providedIn: 'root'
})
export class Calificacion_EstudianteService {
  private url=`${base_url}/calificacion_estudiantes`
  private listCambio = new Subject<Calificacion_Estudiante[]>()
  private confirmarEliminacion = new Subject<Boolean>()

  constructor(private http:HttpClient) { }

  List() {
    return this.http.get<Calificacion_Estudiante[]>(this.url);
  }

  Insert(calificacion_estudiante: Calificacion_Estudiante) {
    return this.http.post(this.url, calificacion_estudiante)
  }

  SetList(ListaNueva: Calificacion_Estudiante[]){
    this.listCambio.next(ListaNueva)
  }

  GetList(){
    return this.listCambio.asObservable()
  }

  ListId(id: number){
    return this.http.get<Calificacion_Estudiante>(`${this.url}/${id}`);
  }

  Update(calificacion_estudiante: Calificacion_Estudiante) {
    //return this.http.put(this.url + "/" + puesto_trabajo.id, puesto_trabajo);
    return this.http.put(this.url, calificacion_estudiante)
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
