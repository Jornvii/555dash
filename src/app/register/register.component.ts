
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      Emp_Code: ['', Validators.required],
      Emp_Name: ['', Validators.required],
      Emp_Surname: ['', Validators.required],
      Emp_Position: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        response => {
          if (response.success) {
            alert('Register successful');
            this.router.navigate(['/login']);
          } else {
            alert(response.message);
          }
        },
        // error => {
        //   alert('An error occurred');
        // }
      );
    }
    else {
      alert('Please fill out all fields');
    }
  }
}
