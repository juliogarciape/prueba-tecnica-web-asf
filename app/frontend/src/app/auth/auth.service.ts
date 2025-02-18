import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { catchError, map, Observable, of } from 'rxjs'
import { CookieService } from 'ngx-cookie-service'
import { environment } from 'src/environments/environment'

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private loggedIn: boolean = false
	private apiUrl = environment.apiUrl

	constructor(private http: HttpClient) {}

	login(
		email: string,
		password: string
	): Observable<{ error: boolean; token?: string }> {
		return this.http
			.post<{ error: boolean; token?: string }>(
				`${this.apiUrl}/auth/login`,
				{ email, password }
			)
			.pipe(
				catchError((error) => {
					console.error('Error logging in', error.message)
					return of({ error: true })
				})
			)
	}

	logout(): boolean {
		return (this.loggedIn = false)
	}

	isLoggedIn(token: string): Observable<boolean> {
		return this.http
			.get<{ error: boolean; message: string }>(
				`${this.apiUrl}/auth/validate`,
				{
					headers: new HttpHeaders({
						Authorization: `Bearer ${token}`,
					}),
				}
			)
			.pipe(
				map((response) => !response.error),
				catchError((error) => {
					console.error('Error validating token', error.message)
					return of(false)
				})
			)
	}
}
