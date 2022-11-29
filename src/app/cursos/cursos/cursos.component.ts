import { CursosService } from './../servicos/cursos.service';
import { Cursos } from './../modelo/cursos';
import { Component } from '@angular/core';
import { catchError, Observable , of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/componentes/error-dialog/error-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {

  cursos$: Observable<Cursos[]>;
  displayedColumns = ['nome','categoria'];

  //cursosService: CursosService;

  constructor(
    private cursosService: CursosService,
    public dialog: MatDialog
    ){

   // this.cursosService = new CursosService();
    this.cursos$ = this.cursosService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([])
      })
    );
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
