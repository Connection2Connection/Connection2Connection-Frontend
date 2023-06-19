import { Estudiante } from "./estudiante"
import { Reclutador } from "./reclutador"


export class Match{
  id:number =0
  numero_match: number = 0
  confirmacion_match: boolean = false
  reclutador: Reclutador = new Reclutador()
  estudiante : Estudiante = new Estudiante()

}