import { Component, OnInit } from '@angular/core'
import { EmployeeService } from '../employee.service'
import { Employee } from '../employee.model'
import { HttpErrorResponse } from '@angular/common/http'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'

@Component({
	selector: 'app-register-employee',
	templateUrl: './registerEmployee.component.html',
	styleUrls: ['./registerEmployee.component.css'],
})
export class RegisterComponent implements OnInit {
	employee: any = {}

	constructor(
		private employeeService: EmployeeService,
		private router: Router,
		private cookieService: CookieService
	) {}

	ngOnInit(): void {
		this.employee = {}
	}

	saveEmployee(employeeForm: NgForm): void {
		const token = this.cookieService.get('access_token')
		this.employeeService.saveEmployee(this.employee, token).subscribe({
			next: (res: Employee) => {
				employeeForm.reset()
				this.router.navigate(['/employees'])
			},
			error: (err: HttpErrorResponse) => {
				console.log(err)
			},
		})
	}
}
