import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Employee } from './employee.model'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
	providedIn: 'root',
})
export class EmployeeService {
	private apiUrl = environment.apiUrl

	constructor(private httpClient: HttpClient) {}

	public saveEmployee(
		employee: Employee,
		token: string
	): Observable<Employee> {
		return this.httpClient.post<Employee>(
			`${this.apiUrl}/employees/create`,
			employee,
			{
				headers: new HttpHeaders({
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				}),
			}
		)
	}

	public getEmployees(token: string): Observable<Employee[]> {
		return this.httpClient.get<Employee[]>(`${this.apiUrl}/employees`, {
			headers: new HttpHeaders({
				Authorization: `Bearer ${token}`,
			}),
		})
	}

	public deleteEmployee(employeeId: number, token: string) {
		return this.httpClient.delete(
			`${this.apiUrl}/employees/${employeeId}`,
			{
				headers: new HttpHeaders({
					Authorization: `Bearer ${token}`,
				}),
			}
		)
	}

	public updateEmployee(
		employee: Employee,
		token: string
	): Observable<boolean> {
		return this.httpClient.put<boolean>(
			`${this.apiUrl}/employees/${employee.id}`,
			employee,
			{
				headers: new HttpHeaders({
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				}),
			}
		)
	}

	public getEmployee(token: string, id: number): Observable<Employee> {
		return this.httpClient.get<Employee>(`${this.apiUrl}/employees/${id}`, {
			headers: new HttpHeaders({
				Authorization: `Bearer ${token}`,
			}),
		})
	}
}
