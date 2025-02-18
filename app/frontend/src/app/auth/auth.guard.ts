import { CanActivateFn } from '@angular/router'
import { inject } from '@angular/core'
import { AuthService } from './auth.service'
import { CookieService } from 'ngx-cookie-service'

export const authGuard: CanActivateFn = (route, state) => {
	const authService = inject(AuthService)
	const cookieService = inject(CookieService)
	const token = cookieService.get('access_token')

	if (!token) {
		return false
	}

	if (!authService.isLoggedIn(token)) {
		return false
	}

	return true
}
