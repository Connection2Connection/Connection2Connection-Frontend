import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Rol } from 'src/app/model/rol';
import { RolService } from 'src/app/service/rol.service'
import { RolDialogoComponent } from './rol-dialogo/rol-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-rol-listar',
  templateUrl: './rol-listar.component.html',
  styleUrls: ['./rol-listar.component.css']
})
export class RolListarComponent implements OnInit{

  dataSourceRol: MatTableDataSource<Rol>=new MatTableDataSource();
  idMayor: number = 0
  displayedColumnsRol: string[] = ['id', 'rol', 'usuario', 'accion01', 'accion02']
  @ViewChild(MatPaginator,{ static:true }) paginator!: MatPaginator;

  constructor(private rolService: RolService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.rolService.List().subscribe(data=> {
      this.dataSourceRol = new MatTableDataSource(data);
      this.dataSourceRol.paginator = this.paginator;
    })
    this.rolService.GetList().subscribe(data=> {
      this.dataSourceRol = new MatTableDataSource(data)
      this.dataSourceRol.paginator = this.paginator;
    })
    this.rolService.GetConfirmDelete().subscribe(data=>{
      data== true? this.eliminar(this.idMayor) : false;
    })
  }

  filtrar(e:any){
    this.dataSourceRol.filter = e.target.value.trim();
  }

  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(RolDialogoComponent);
  }
  eliminar(id: number) {
    this.rolService.Delete(id).subscribe(() => {
      this.rolService.List().subscribe(data => {
        this.rolService.SetList(data);
      })
    })
  }

}
