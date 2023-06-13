import { Reclutador } from "./reclutador"
import { Requisito } from "./requisito"

export class Puesto_trabajo{
  id:number =0
  reclutador: Reclutador = new Reclutador()
  requisitos: Requisito = new Requisito()
}
