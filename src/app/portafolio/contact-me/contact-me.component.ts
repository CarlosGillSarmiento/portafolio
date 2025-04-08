import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactMeService } from './contact-me.service';
import { ContactMeResponse } from '../../shared/interfaces/contactMe.interface';
import { map, Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  formulario = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });
  contactme$!: Observable<ContactMeResponse>;

  constructor(private contactMeService: ContactMeService) { }

  onSubmit() {
    if (this.formulario.valid) {
      console.log("Datos del formulario:", this.formulario.value);
      this.contactme$ = this.contactMeService.addUser(this.formulario.value).pipe(
        tap((data)=>{
          if (data.status === 200) {
            this.formulario.reset();
          }
        })
      )
    } else {
      console.log("Formulario inválido");
      alert("Formulario inválido");
    }
  }
  
}
