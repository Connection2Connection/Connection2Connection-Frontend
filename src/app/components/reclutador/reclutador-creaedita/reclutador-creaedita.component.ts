import { Component, OnInit } from '@angular/core';
import { ReclutadorService } from 'src/app/service/reclutador.service';

import { Reclutador } from 'src/app/model/reclutador';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reclutador-creaedita',
  templateUrl: './reclutador-creaedita.component.html',
  styleUrls: ['./reclutador-creaedita.component.css']
})
export class ReclutadorCreaeditaComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  reclutador : Reclutador = new Reclutador();
  mensaje: string = "";
  id: number = 0;
  edicion: boolean = false;

  constructor(private reclutadorService: ReclutadorService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
   this.route.params.subscribe((data: Params) =>{
    this.id = data['id'];
    this.edicion = data['id']!=null;
    this.init();
   })
   this.form = new FormGroup({
    id: new FormControl(),
    descripcion_Reclutador: new FormControl(),
    empresaId: new FormControl(),
    usuarioId: new FormControl()
  });
  }

  aceptar(): void {
    this.reclutador.id = this.form.value['id'];
    this.reclutador.descripcion_Reclutador = this.form.value['descripcion_Reclutador'];
    this.reclutador.empresa.id = this.form.value['empresaId'];
    this.reclutador.usuario.idUsuario = this.form.value['usuarioId'];
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
          empresaId: new FormControl(data.empresa.id),
          usuarioId: new FormControl(data.usuario.idUsuario),
        })
      })
    }
  }

}

