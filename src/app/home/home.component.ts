import { ModalComponent } from '../modal/modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { pessoas } from './../models/placeholder.model';
import { PessoasService } from './../services/pessoas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pessoas: any;
  erro: any;

  mensagem = "";
  numero = "";


  cards = [
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];
  pagando() {
    if (this.numero == "1111111111111111") {
      this.mensagem = "O pagamento foi provado";
    }
    else if (this.numero !== "1111111111111111") {
      this.mensagem = "Não foi aceito o pagamento!";
    }
  }


  constructor(private router: Router,
    private pessoasService: PessoasService,
    public dialog: MatDialog,
  ) {
    this.getter();

  }

  ngOnInit() { }

  getter() {
    this.pessoasService.getPessoas().subscribe(
      (data: pessoas) => {
        this.pessoas = data;
      },
      (error: any) => {
        this.erro = error;
        console.error('ERROR: ', error);
      })
  }
  routerModal(): void {
    this.router.navigate(['../app/modal'])
  }
  abrirModal(ngModal): void {
    this.dialog.open(ngModal)
  }

  abrir() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}





