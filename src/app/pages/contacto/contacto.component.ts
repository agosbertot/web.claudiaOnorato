import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NetlifyService } from 'src/app/netlify.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactForm = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    asunto: ['', Validators.required],
  });

  errorMsg = '';

  constructor(private fb: FormBuilder,
    private netlify: NetlifyService,
    private router: Router) { }

  ngOnInit(): void {
  }

  closeError() {
    this.errorMsg = '';
  }

  onSubmit() {
    this.netlify.submitContacto(this.contactForm.value).subscribe(
      () => {
        this.contactForm.reset();
        this.router.navigateByUrl('/success');
      },
      err => {
        this.errorMsg = err;
      }
    );
  }
}
