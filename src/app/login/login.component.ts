import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      Emp_Code: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  proceedLogin(): void {
    if (this.loginForm.valid) {
      const empCode = this.loginForm.value.Emp_Code;
      this.authService.login(empCode).subscribe(
        (response) => {
          if (response.auth) {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/dashboard']); // Redirect to dashboard or home page
          } else {
            alert(response.message);
          }
        },
        (error) => {
          alert('Wrong Employee ID');
        }
      );
    } else {
      alert('Please enter an Employee Code');
    }
  }
}

// export class LoginComponent implements OnInit {
//   loginForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private authService: AuthService,
//     private router: Router
//   ) {
//     this.loginForm = this.fb.group({
//       Emp_Code: ['', Validators.required]
//     });
//   }

//   ngOnInit(): void {}

//   proceedLogin(): void {
//     if (this.loginForm.valid) {
//       const empCode = this.loginForm.value.Emp_Code;
//       // Simulate successful login, replace it with actual login logic
//       this.authService.authStatus.next(true); // Notify that user is logged in
//       this.router.navigate(['/dashboard']); // Redirect to dashboard or home page
//     } else {
//       alert('Please enter an Employee Code');
//     }
//   }
// }
