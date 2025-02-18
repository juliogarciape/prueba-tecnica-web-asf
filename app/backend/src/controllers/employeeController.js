import {
	createEmployee,
	getEmployees,
	getEmployee,
	updateEmployee,
	deleteEmployee,
} from '../models/employeeModel.js';

class Employee {
	constructor() {}

	static async getEmployees(req, res) {
		try {
			const employees = await getEmployees();
			return res.json(employees);
		} catch (error) {}
	}

	static async getEmployee(req, res) {
		try {
			const id = req.params.id;
			const employee = await getEmployee(id);
			return res.json(employee);
		} catch (error) {}
	}

	static async createEmployee(req, res) {
		try {
			const employee = req.body;
			const result = await createEmployee(employee);
			return res.json({
				message: result.message,
				error: result.error,
			});
		} catch (error) {}
	}

	static async updateEmployee(req, res) {
		try {
			const id = req.params.id;
			const employee = req.body;
			const result = await updateEmployee(id, employee);
			return res.json({
				message: result.message,
				error: result.error,
			});
		} catch (error) {}
	}

	static async deleteEmployee(req, res) {
		try {
			const id = req.params.id;
			const result = await deleteEmployee(id);
			return res.json({
				message: result.message,
				error: result.error,
			});
		} catch (error) {}
	}
}

export default Employee;
