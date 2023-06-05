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
    this.u.id= this.form.value['id'];
    this.u.DNI_Usuario= this.form.value['dni'];
    this.u.Usuario_Usuario= this.form.value['usuario'];
    this.u.Nombre_Usuario= this.form.value['nombre'];
    this.u.Correo_Usuario= this.form.value['correo'];
    this.u.Contrasena_Usuario= this.form.value['contraseña'];
    this.u.Tipo_Usuario= this.form.value['tipo'];
    this.u.key= this.form.value['key'];
    if (this.form.value['dni'] && this.form.value['dni'].length > 0 &&
    this.form.value['usuario'] && this.form.value['usuario'].length > 0 &&
    this.form.value['nombre'] && this.form.value['nombre'].length > 0 &&
    this.form.value['correo'] && this.form.value['correo'].length > 0 &&
    this.form.value['contraseña'] && this.form.value['contraseña'].length > 0 &&
    this.form.value['tipo'] && this.form.value['tipo'].length > 0 &&
    this.form.value['tipo'] !== 'admin') {

      if (this.edicion) {
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
    } else if(this.form.value['dni'] && this.form.value['dni'].length > 0 &&
    this.form.value['usuario'] && this.form.value['usuario'].length > 0 &&
    this.form.value['nombre'] && this.form.value['nombre'].length > 0 &&
    this.form.value['correo'] && this.form.value['correo'].length > 0 &&
    this.form.value['contraseña'] && this.form.value['contraseña'].length > 0 &&
    this.form.value['tipo'] && this.form.value['tipo'].length > 0 &&
    this.form.value['tipo'] == 'admin' &&
    this.form.value['key'] && this.form.value['key'].length > 0){
        if (this.edicion) {
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
          id: new FormControl(data.id),
          dni: new FormControl(data.DNI_Usuario),
          usuario: new FormControl(data.Usuario_Usuario),
          nombre: new FormControl(data.Nombre_Usuario),
          correo: new FormControl(data.Correo_Usuario),
          contraseña: new FormControl(data.Contrasena_Usuario),
          tipo: new FormControl(data.Tipo_Usuario),
          key: new FormControl(data.key)
        })
      })
    }
  }
}
