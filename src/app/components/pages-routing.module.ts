import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../service/guard.service';

import { EmpresaComponent } from './empresa/empresa.component';
import { EmpresaCRUDComponent } from './empresa/empresa-crud/empresa-crud.component';
import { RequisitosComponent } from './requisitos/requisitos.component';
import { RequisitosCreaeditaComponent } from './requisitos/requisitos-creaedita/requisitos-creaedita.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './usuario/usuario-creaedita/usuario-creaedita.component';
import { CalificacionComponent } from './calificacion/Calificacion.component';
import { CalificacionCreaeditaComponent } from './calificacion/Calificacion-creaedita/Calificacion-creaedita.component';
import { InstitucionComponent } from './institucion/institucion.component';
import { InstitucionCrudComponent } from './institucion/institucion-crud/institucion-crud.component';
import { CarreraComponent } from './carrera/carrera.component';
import { CarreraCreaeditaComponent } from './carrera/carrera-creaedita/carrera-creaedita.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { EstudianteCreaeditaComponent } from './estudiante/estudiante-creaedita/estudiante-creaedita.component';
import { ReclutadorComponent } from './reclutador/reclutador.component';
import { ReclutadorCreaeditaComponent } from './reclutador/reclutador-creaedita/reclutador-creaedita.component';
import { PuestoTrabajoComponent } from './puesto-trabajo/puesto-trabajo.component';
import { PuestoTrabajoCreaeditaComponent } from './puesto-trabajo/puesto-trabajo-creaedita/puesto-trabajo-creaedita.component';
import { Calificacion_EstudianteComponent } from './calificacion_estudiante/calificacion_estudiante.component';
import { Calificacion_EstudianteCreaeditaComponent } from './calificacion_estudiante/calificacion_estudiante-creaedita/calificacion_estudiante-creaedita.component';
import { RolComponent } from './rol/rol.component';
import { RolCreaeditaComponent } from './rol/rol-creaedita/rol-creaedita.component';
import { MatchComponent } from './match/match.component';
import { MatchCreaeditaComponent } from './match/match-creaedita/match-creaedita.component';
import { Reporte01Component } from './reportes/reporte01/reporte01.component';
import { RepositorioComponent } from './repositorio/repositorio.component';
import { RepositorioCreaeditaComponent } from './repositorio/repositorio-creaedita/repositorio-creaedita.component';
import { Reporte02Component } from './reportes/reporte02/reporte02.component';

const routes: Routes = [
  {
    path:'Empresa' ,component:EmpresaComponent, children:[
      {path:'Crear' ,component:EmpresaCRUDComponent},
      {path:'Edicion/:id', component:EmpresaCRUDComponent}
    ],canActivate:[GuardService]
  },
  {
    path: 'requisitos', component: RequisitosComponent, children: [
      { path: 'nuevo', component: RequisitosCreaeditaComponent },
      { path: 'edicion/:id', component: RequisitosCreaeditaComponent }
    ],canActivate:[GuardService]
  },
  {
    path: 'usuarios', component: UsuarioComponent, children: [
      { path: 'nuevo', component: UsuarioCreaeditaComponent },
      { path: 'edicion/:id', component: UsuarioCreaeditaComponent }
    ],canActivate:[GuardService]
  },
  {
    path: 'Calificacion', component: CalificacionComponent, children: [
      { path: 'nuevo', component: CalificacionCreaeditaComponent },
      { path: 'edicion/:id', component: CalificacionCreaeditaComponent }
    ],canActivate:[GuardService]
  },
  {
    path: 'Institucion', component: InstitucionComponent, children: [
      { path: 'Crear', component: InstitucionCrudComponent },
      { path: 'Edicion/:id', component: InstitucionCrudComponent }
    ],canActivate:[GuardService]
  },
  {
    path:'carreras',component:CarreraComponent, children:[

    { path:'nuevo', component:CarreraCreaeditaComponent },

    {path:'edicion/:id', component:CarreraCreaeditaComponent}
  ],canActivate:[GuardService]
  },
  {
    path: 'estudiantes', component: EstudianteComponent, children: [
      { path: 'nuevo', component: EstudianteCreaeditaComponent },
      { path: 'edicion/:id', component: EstudianteCreaeditaComponent }
    ],canActivate:[GuardService]
  },
  {
    path: 'Reclutadores', component: ReclutadorComponent, children: [
      { path: 'Crear', component: ReclutadorCreaeditaComponent},
      { path: 'Edicion/:id', component:ReclutadorCreaeditaComponent}
    ],canActivate:[GuardService]
  },
  {
    path: 'Puesto_trabajo', component: PuestoTrabajoComponent, children: [
      { path: 'Crear', component: PuestoTrabajoCreaeditaComponent},
      { path: 'Edicion/:id', component: PuestoTrabajoCreaeditaComponent}
    ],canActivate:[GuardService]
  },
  {
    path: 'Match', component: MatchComponent, children: [
      { path: 'Crear', component: MatchCreaeditaComponent},
      { path: 'Edicion/:id', component: MatchCreaeditaComponent}
    ],canActivate:[GuardService]
  },
  {
    path: 'Calificacion_Estudiante', component: Calificacion_EstudianteComponent, children: [
      { path: 'Crear', component: Calificacion_EstudianteCreaeditaComponent},
      { path: 'Edicion/:id', component: Calificacion_EstudianteCreaeditaComponent}
    ],canActivate:[GuardService]
  },
  {
    path: 'Rol', component: RolComponent, children: [
      { path: 'Crear', component: RolCreaeditaComponent},
      { path: 'Edicion/:id', component: RolCreaeditaComponent}
    ],canActivate:[GuardService]
  },
  {
    path: 'Repositorio', component: RepositorioComponent, children: [
      { path: 'Crear', component: RepositorioCreaeditaComponent},
      { path: 'Edicion/:id', component: RepositorioCreaeditaComponent}
    ],canActivate:[GuardService]
  },
  {
    path: 'Reporte01', component: Reporte01Component, canActivate:[GuardService]
  },
  {
    path: 'Reporte02', component: Reporte02Component, canActivate:[GuardService]
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }
