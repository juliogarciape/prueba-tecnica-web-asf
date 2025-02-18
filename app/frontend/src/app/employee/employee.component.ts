import { Component, OnInit } from '@angular/core'
import { Employee } from '../employee.model'
import { Router } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http'
import { EmployeeService } from '../employee.service'
import { CookieService } from 'ngx-cookie-service'
import { MatTableDataSource } from '@angular/material/table'
import { NgForm } from '@angular/forms'
import * as boostrap from 'bootstrap'

@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
	dataSource: any = new MatTableDataSource<Employee>()
	employeeDetails: Employee = {
		id: 0,
		name: '',
		lastName: '',
		dni: '',
		address: '',
		position: '',
		salary: 0,
		pension: '',
		dateOfAdmission: '',
		dateOfBirth: '',
	}

	displayedColumns: string[] = [
		'id',
		'name',
		'lastName',
		'dni',
		'address',
		'position',
		'salary',
		'pension',
		'actions',
	]

	constructor(
		private employeeService: EmployeeService,
		private router: Router,
		private cookieService: CookieService
	) {}

	ngOnInit(): void {
		this.getEmployeeList()
	}

	updateEmployee(employeeFrom: NgForm): void {
		const token = this.cookieService.get('access_token')
		this.employeeService
			.updateEmployee(employeeFrom.value, token)
			.subscribe({
				next: (res: boolean) => {
					const modalElement = document.getElementById('exampleModal')
					if (res) {
						this.getEmployeeList()
					}
					if (modalElement) {
						const backdrop =
							document.querySelector('.modal-backdrop')

						const modalInstance =
							boostrap.Modal.getInstance(modalElement)
						modalInstance?.hide()
						if (backdrop && backdrop.parentNode) {
							backdrop.parentNode.removeChild(backdrop)
						}
					}
				},
				error: (err: HttpErrorResponse) => {
					console.log(err)
				},
			})
	}

	getEmployee(id: number): void {
		const token = this.cookieService.get('access_token')
		this.employeeService.getEmployee(token, id).subscribe({
			next: (res: any) => {
				this.employeeDetails = res.data
			},
			error: (err: HttpErrorResponse) => {
				console.log(err)
			},
		})
	}

	deleteEmployee(employeeId: number): void {
		const token = this.cookieService.get('access_token')
		this.employeeService.deleteEmployee(employeeId, token).subscribe({
			next: (res: any) => {
				this.getEmployeeList()
			},
			error: (err: HttpErrorResponse) => {
				console.log(err)
			},
		})
	}

	getEmployeeList(): void {
		const token = this.cookieService.get('access_token')
		this.employeeService.getEmployees(token).subscribe({
			next: (employees: any) => {
				console.log(employees)
				this.dataSource.data = employees.data
			},
			error: (err: HttpErrorResponse) => {
				console.log(err)
			},
		})
	}
}
