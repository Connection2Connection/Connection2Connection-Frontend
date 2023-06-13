import { Component, OnInit } from '@angular/core';
import { ReclutadorService } from 'src/app/service/reclutador.service';

import { Reclutador } from 'src/app/model/reclutador';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reclutador-crud',
  templateUrl: './reclutador-crud.component.html',
  styleUrls: ['./reclutador-crud.component.css']
})
export class ReclutadorCrudComponent  implements OnInit{

  form: FormGroup = new FormGroup({});
  reclutador: Reclutador = new Reclutador();
  mensaje: string = "";
  id: number = 0;
  edicion: boolean = false;

  constructor(private reclutadorService: ReclutadorService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) =>{
     this.id = data['id'];
     this.edicion = data['id']!=null;
     this.init();
    })
    this.form = new FormGroup({
     id: new FormControl(),
     Descripcion_Reclutador: new FormControl(),
     empresa: new FormControl(),
     usuario: new FormControl()
   });
   }

   aceptar(): void {
    this.reclutador.id= this.form.value['id'];
    this.reclutador.descripcion_Reclutador= this.form.value['descripcion_Reclutador'];
    this.reclutador.empresa = this.form.value['empresa'];
    this.reclutador.usuario = this.form.value['usuario'];
    if (this.form.value['descripcion_Reclutador'].length > 0 ){

      if (this.edicion) {
        //actualice
        this.reclutadorService.Update(this.reclutador).subscribe(() => {
          this.reclutadorService.List().subscribe(data => {
            this.reclutadorService.SetList(data);
          })
        })

      } else {
        this.reclutadorService.Insert(this.reclutador).subscribe(data => {
          this.reclutadorService.List().subscribe(data => {
            this.reclutadorService.SetList(data);
          })
        })
      }

      this.router.navigate(['Reclutadores']);
    } else {
      this.mensaje = "Complete todos los campos!";
    }
  }

  init() {
    if (this.edicion) {
      this.reclutadorService.ListId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          descripcion_Reclutador: new FormControl(data.descripcion_Reclutador),
          empresa: new FormControl(data.empresa),
          usuario: new FormControl(data.usuario),
        })
      })
    }
  }

}
