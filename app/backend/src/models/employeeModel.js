import prismaClient from '../utils/prismaClient.js';

export const getEmployees = async () => {
	try {
		const employees = await prismaClient.employees.findMany();
		return {
			data: employees,
			error: false,
		};
	} catch (error) {
		return {
			error: true,
			message: 'Error al obtener los empleados',
		};
	}
};

export const createEmployee = async (employee) => {
	try {
		await prismaClient.employees.create({
			data: {
				name: employee.name,
				lastName: employee.lastName,
				address: employee.address,
				position: employee.position,
				salary: employee.salary,
				pension: employee.pension.toUpperCase(),
				dni: employee.dni,
				dateOfBirth: employee.dateOfBirth,
				dateOfAdmission: employee.dateOfAdmission,
			},
		});
		return {
			message: 'Nuevo registro creado',
			error: false,
		};
	} catch (error) {
		return {
			error: true,
			message: 'Error al guardar el empleado',
		};
	}
};

export const getEmployee = async (id) => {
	try {
		const employee = await prismaClient.employees.findUnique({
			where: {
				id: parseInt(id),
			},
		});
		return {
			data: employee,
			error: false,
		};
	} catch (error) {
		return {
			error: true,
			message: 'Error al obtener el empleado',
		};
	}
};

export const updateEmployee = async (id, employee) => {
	try {
		await prismaClient.employees.update({
			where: {
				id: parseInt(id),
			},
			data: {
				name: employee.name,
				lastName: employee.lastName,
				address: employee.address,
				position: employee.position,
				salary: employee.salary,
				pension: employee.pension,
				dni: employee.dni,
				dateOfBirth: employee.dateOfBirth,
				dateOfAdmission: employee.dateOfAdmission,
			},
		});
		return {
			message: 'Empleado actualizado',
			error: false,
		};
	} catch (error) {
		return {
			error: true,
			message: 'Error al actualizar el empleado',
		};
	}
};

export const deleteEmployee = async (id) => {
	try {
		await prismaClient.employees.delete({
			where: {
				id: parseInt(id),
			},
		});
		return {
			message: 'Empleado eliminado',
			error: false,
		};
	} catch (error) {
		return {
			error: true,
			message: 'Error al eliminar el empleado',
		};
	}
};
