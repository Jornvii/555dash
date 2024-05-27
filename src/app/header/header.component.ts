import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  empCode: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = atob(token.split('.')[1]);
        const userData = JSON.parse(decodedToken);
        this.empCode = userData.Emp_Code;
      }
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../service/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit {
//   empCode: string = '';

//   constructor(private authService: AuthService, private router: Router) { }

//   ngOnInit(): void {
//     this.loadUserData();
//   }

//   loadUserData(): void {
//     if (typeof localStorage !== 'undefined') {
//       const token = localStorage.getItem('token');
//       if (token) {
//         const decodedToken = atob(token.split('.')[1]);
//         const userData = JSON.parse(decodedToken);
//         this.empCode = userData.Emp_Code;
//       }
//     }
//   }

//   isLoggedIn(): boolean {
//     return this.authService.isLoggedIn();
//   }

//   logout(): void {
//     localStorage.removeItem('token');
//     this.router.navigate(['/login']);
//   }
// }
