import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { EmpresaCRUDComponent } from './components/empresa/empresa-crud/empresa-crud.component';
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { RequisitosCreaeditaComponent } from './components/requisitos/requisitos-creaedita/requisitos-creaedita.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './components/usuario/usuario-creaedita/usuario-creaedita.component';
import { CalificacionComponent } from './components/calificacion/Calificacion.component';
import { CalificacionCreaeditaComponent } from './components/calificacion/Calificacion-creaedita/Calificacion-creaedita.component';
import { InstitucionComponent } from './components/institucion/institucion.component';
import { InstitucionCrudComponent } from './components/institucion/institucion-crud/institucion-crud.component';
import { CarreraComponent } from './components/carrera/carrera.component';
import { CarreraCreaeditaComponent } from './components/carrera/carrera-creaedita/carrera-creaedita.component';
import { LandingComponent } from './components/landing/landing.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { EstudianteCreaeditaComponent } from './components/estudiante/estudiante-creaedita/estudiante-creaedita.component';
import { ReclutadorComponent } from './components/reclutador/reclutador.component';
import { ReclutadorCreaeditaComponent } from './components/reclutador/reclutador-creaedita/reclutador-creaedita.component';
import { PuestoTrabajoComponent } from './components/puesto-trabajo/puesto-trabajo.component';
import { PuestoTrabajoCreaeditaComponent } from './components/puesto-trabajo/puesto-trabajo-creaedita/puesto-trabajo-creaedita.component';

const routes: Routes = [
  {
    path:'' ,component:LandingComponent,

  },
  { path: 'login', component: LoginComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  {
    path:'Empresa' ,component:EmpresaComponent, children:[
      {path:'Crear' ,component:EmpresaCRUDComponent},
      {path:'Edicion/:id', component:EmpresaCRUDComponent}
    ]
  },
  {
    path: 'requisitos', component: RequisitosComponent, children: [
      { path: 'nuevo', component: RequisitosCreaeditaComponent },
      { path: 'edicion/:id', component: RequisitosCreaeditaComponent }
    ]
  },
  {
    path: 'usuarios', component: UsuarioComponent, children: [
      { path: 'nuevo', component: UsuarioCreaeditaComponent },
      { path: 'edicion/:id', component: UsuarioCreaeditaComponent }
    ]
  },
  {
    path: 'Calificacion', component: CalificacionComponent, children: [
      { path: 'nuevo', component: CalificacionCreaeditaComponent },
      { path: 'edicion/:id', component: CalificacionCreaeditaComponent }
    ]
  },
  {
    path: 'Institucion', component: InstitucionComponent, children: [
      { path: 'Crear', component: InstitucionCrudComponent },
      { path: 'Edicion/:id', component: InstitucionCrudComponent }
    ]
  },
  {path:'carreras',component:CarreraComponent, children:[

    { path:'nuevo', component:CarreraCreaeditaComponent },

    {path:'edicion/:id', component:CarreraCreaeditaComponent}
  ]},
  {
    path: 'estudiantes', component: EstudianteComponent, children: [
      { path: 'nuevo', component: EstudianteCreaeditaComponent },
      { path: 'edicion/:id', component: EstudianteCreaeditaComponent }
    ]
  },
  {
    path: 'Reclutadores', component: ReclutadorComponent, children: [
      { path: 'Crear', component: ReclutadorCreaeditaComponent},
      { path: 'Edicion/:id', component:ReclutadorCreaeditaComponent}
    ]
  },
  {
    path: 'Puesto_trabajo', component: PuestoTrabajoComponent, children: [
      { path: 'Crear', component: PuestoTrabajoCreaeditaComponent},
      { path: 'Edicion/:id', component: PuestoTrabajoCreaeditaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
