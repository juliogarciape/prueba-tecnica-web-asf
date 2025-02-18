import { Component } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	employeeForm: FormGroup
	loginError = false

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router,
		private cookieService: CookieService
	) {
		this.employeeForm = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
		})
	}

	loginForm(): void {
		this.authService
			.login(
				this.employeeForm.get('email')?.value,
				this.employeeForm.get('password')?.value
			)
			.subscribe(
				(result: {
					message?: string
					error: boolean
					token?: string
				}) => {
					if (result.error) {
						this.loginError = true
						return console.error(result.message)
					}

					this.cookieService.set('access_token', result.token!)
					this.router.navigate(['/employees'])
				}
			),
			(error: any) => {
				console.error('Error logging in', error.message)
			}
	}
}
