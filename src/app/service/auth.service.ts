
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api';
  private apiUrl1 = 'http://localhost:3000/get-products';
  private processUrl = 'http://localhost:3000/get-process-options';
  private mcUrl = 'http://localhost:3000/get-mc-options';

  constructor(private http: HttpClient) { }

  getProducts(data: { PartNo: string, Process: string, MC: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl1, data);
  }

  getProcessOptions(partNo: string): Observable<any> {
    return this.http.post<any>(this.processUrl, { PartNo: partNo });
  }

  getMCOptions(data: { PartNo: string, Process: string }): Observable<any> {
    return this.http.post<any>(this.mcUrl, data);
  }



  submitRequest(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/submit-request`, data);
  }




  // Login method
  login(empCode: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { Emp_Code: empCode });
  }

  // Set employee code
  // setEmpCode(empCode: string): void {
  //   this.empCode = empCode;
  // }

  // Get employee code
  getEmpCode(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/empCode`);
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    if (typeof localStorage !== 'undefined') {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  // Register method
  register(employee: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, employee);
  }

  // Fetch get data to show suggestion PartNo when write PartNo
  Post_PartNo(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Post_PartNo`, data);
    console.log(data);
  }
  // Fetch process options based on PartNo
  Post_Process(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Post_Process`, data);
  }
  // Fetch MC options based on PartNo and Process
  GetMC(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Post_MC`, data);
  }
  Post_ToolDetial(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Post_ToolDetial`, data);
  }
}
