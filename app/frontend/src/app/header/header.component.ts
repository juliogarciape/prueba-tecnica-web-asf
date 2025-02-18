import { Component } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	isAuthenticated: boolean = false

	constructor(
		private authService: AuthService,
		private router: Router,
		private cookieService: CookieService
	) {}

	ngOnInit(): void {
		const token = this.cookieService.get('access_token')
		this.authService.isLoggedIn(token).subscribe((authStatus: boolean) => {
			this.isAuthenticated = authStatus
		})
	}

	logout() {
		const sesion = this.authService.logout()
		this.isAuthenticated = sesion
		this.cookieService.delete('access_token')
		this.router.navigate(['/'])
	}
}
