import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Match } from 'src/app/model/match';
import { MatchService } from 'src/app/service/match.service';
import { MatchDialogoComponent } from './match-dialogo/match-dialogo.component';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-match-listar',
  templateUrl: './match-listar.component.html',
  styleUrls: ['./match-listar.component.css']
})
export class MatchListarComponent implements OnInit{
  dataSourceMatch: MatTableDataSource<Match>=new MatTableDataSource();
  idMayor: number = 0
  displayedColumnsMatch: string[] = ['id', 'numero_match','confirmacion_match','reclutador', 'estudiante', 'accion01', 'accion02']
  estudiantes: any = [];
  reclutadores: any = [];
  @ViewChild(MatPaginator,{ static:true }) paginator!: MatPaginator;

  constructor(private matchService : MatchService, private dialog: MatDialog, private usuarioService: UsuarioService) {
    this.getEstudiantes();
    this.getReclutadores();
  }

  ngOnInit(): void {
    this.matchService.List().subscribe(data=> {
      this.dataSourceMatch = new MatTableDataSource(data);
      this.dataSourceMatch.paginator = this.paginator;
    })
    this.matchService.GetList().subscribe(data=> {
      this.dataSourceMatch = new MatTableDataSource(data)
      this.dataSourceMatch.paginator = this.paginator;
    })
    this.matchService.GetConfirmDelete().subscribe(data=>{
      data== true? this.eliminar(this.idMayor) : false;
    })


  }

  getEstudiantes(): void {
    this.usuarioService.list().subscribe(resp => {
      this.estudiantes = resp.filter(item => item.Tipo_Usuario === 'estudiante');
    })
  }

  getReclutadores(): void {
    this.usuarioService.list().subscribe(resp => {
      this.reclutadores = resp.filter(item => item.Tipo_Usuario === 'reclutador');
    })
  }

  filtrar(e:any){
    this.dataSourceMatch.filter = e.target.value.trim();
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(MatchDialogoComponent);
  }
  eliminar(id: number) {
    this.matchService.Delete(id).subscribe(() => {
      this.matchService.List().subscribe(data => {
        this.matchService.SetList(data);
      })
    })
  }

  nombreEstudiante(estudianteId: string) {
    return this.estudiantes.find((item: any) => item.id === Number(estudianteId))?.Nombre_Usuario
  }

  nombreReclutador(reclutadorId: string) {
    return this.reclutadores.find((item: any) => item.id === Number(reclutadorId))?.Nombre_Usuario
  }
}
