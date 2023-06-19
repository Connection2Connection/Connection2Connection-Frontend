import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-usuario-creaedita',
  templateUrl: './usuario-creaedita.component.html',
  styleUrls: ['./usuario-creaedita.component.css']
})
export class UsuarioCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  u: Usuario = new Usuario();
  mensaje: string = "";
  id: number = 0;
  edicion: boolean = false;


  constructor(
    private uS: UsuarioService,
    private route: ActivatedRoute,
    private router: Router

  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })
    this.form = new FormGroup({
      id: new FormControl(),
      dni: new FormControl(),
      usuario: new FormControl(),
      nombre: new FormControl(),
      correo: new FormControl(),
      contraseña: new FormControl(),
      tipo: new FormControl(),
      key: new FormControl()
    });
  }

  aceptar(): void {
    this.u.idUsuario= this.form.value['id'];
    this.u.dni_Usuario= this.form.value['dni'];
    this.u.usuario_Usuario= this.form.value['usuario'];
    this.u.nombre_Usuario= this.form.value['nombre'];
    this.u.correo_Usuario= this.form.value['correo'];
    this.u.contrasena_Usuario= this.form.value['contraseña'];
    this.u.tipo_Usuario= this.form.value['tipo'];
    this.u.key= this.form.value['key'];
    if (this.form.value['dni'] && this.form.value['dni'].length > 0 &&
    this.form.value['usuario'] && this.form.value['usuario'].length > 0 &&
    this.form.value['nombre'] && this.form.value['nombre'].length > 0 &&
    this.form.value['correo'] && this.form.value['correo'].length > 0 &&
    this.form.value['contraseña'] && this.form.value['contraseña'].length > 0 &&
    this.form.value['tipo'].length > 0 &&
    this.form.value['tipo'] !== 'admin') {

      if (this.edicion) {
        console.log("edit")
        //actualice
        this.uS.update(this.u).subscribe(() => {
          this.uS.list().subscribe(data => {
            this.uS.setList(data);
          })
        })

      } else {
        this.uS.insert(this.u).subscribe(data => {
          this.uS.list().subscribe(data => {
            this.uS.setList(data);
          })
        })
      }
      this.router.navigate(['usuarios']);
    }
      else {
        this.mensaje = "Complete los campos requeridos ¬¬";
      }
  }

  init() {
    if (this.edicion) {
      this.uS.listId(this.id).subscribe(data => {
        this.form = new FormGroup({
          id: new FormControl(data.idUsuario),
          dni: new FormControl(data.dni_Usuario),
          usuario: new FormControl(data.usuario_Usuario),
          nombre: new FormControl(data.nombre_Usuario),
          correo: new FormControl(data.correo_Usuario),
          contraseña: new FormControl(data.contrasena_Usuario),
          tipo: new FormControl(data.tipo_Usuario),
          key: new FormControl(data.key)
        })
      })
    }
  }
}
