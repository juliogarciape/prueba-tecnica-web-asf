import { Router } from 'express';
import employeeController from '../controllers/employeeController.js';

const router = Router();

router.get('/', employeeController.getEmployees);

router.get('/:id', employeeController.getEmployee);

router.post('/create', employeeController.createEmployee);

router.put('/:id', employeeController.updateEmployee);

router.delete('/:id', employeeController.deleteEmployee);

export default router;
