import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { EmployeeComponent } from './employee/employee.component'
import { RegisterComponent } from './register/registerEmployee.component'
import { authGuard } from './auth/auth.guard'

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'employees',
		component: EmployeeComponent,
		canActivate: [authGuard],
	},
	{
		path: 'employees/new',
		component: RegisterComponent,
		canActivate: [authGuard],
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
