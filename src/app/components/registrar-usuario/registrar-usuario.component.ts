import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router} from '@angular/router'


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
})
export class RegistrarUsuarioComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  u: Usuario = new Usuario();
  mensaje: string = "";

  constructor(
    private uS: UsuarioService,
    private fb: FormBuilder,
    private router: Router

  ) {
  }

  ngOnInit(): void {
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

  registrar(): void {
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
    this.uS.insert(this.u).subscribe(data => {
      this.uS.list().subscribe(data => {
        this.uS.setList(data);
        });
      });
      this.router.navigate(['login']);
    } else if (this.form.value['dni'] && this.form.value['dni'].length > 0 &&
    this.form.value['usuario'] && this.form.value['usuario'].length > 0 &&
    this.form.value['nombre'] && this.form.value['nombre'].length > 0 &&
    this.form.value['correo'] && this.form.value['correo'].length > 0 &&
    this.form.value['contraseña'] && this.form.value['contraseña'].length > 0 &&
    this.form.value['tipo'] && this.form.value['tipo'].length > 0 &&
    this.form.value['tipo'] == 'admin' &&
    this.form.value['key'] && this.form.value['key'].length > 0) {
       this.uS.insert(this.u).subscribe(data => {
         this.uS.list().subscribe(data => {
          this.uS.setList(data);
         });
       });
       this.router.navigate(['login']);
      } else {
         alert("Complete los campos requeridos ¬¬");
        }
  }
}
