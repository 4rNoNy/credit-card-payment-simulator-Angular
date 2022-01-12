import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { pessoas } from './../models/placeholder.model';
import { PessoasService } from './../services/pessoas.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'







@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {




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


  constructor(private router: Router,
    private pessoasService: PessoasService,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalComponent>
  ) {


  }


  ngOnInit() {
  }


  pagando() {
    if (this.numero == "1111111111111111") {
      this.mensagem = "O pagamento foi {{retorna.status}}";
    }
    else if (this.numero !== "1111111111111111") {
      this.mensagem = "Não foi aceito o pagamento!";
    }
  }
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



}
