import { createToken } from '../utils/jwt.js';
import prismaClient from '../utils/prismaClient.js';

class AuthController {
	constructor() {}

	static async login(req, res) {
		try {
			const { email, password } = req.body;
			const exist = await prismaClient.administradores.findUnique({
				where: {
					email: email,
				},
			});

			if (!exist) {
				return res.json({ error: true, message: 'User not found' });
			}

			if (exist.password !== password) {
				return res.json({ error: true, message: 'Invalid password' });
			}

			const { name } = exist;
			const token = createToken(email, name);

			return res.status(200).json({ token, error: false });
		} catch (error) {
			return res.json({ error: true, message: error.message });
		}
	}

	static async validate(req, res, next) {
		try {
			return res.json({ message: 'Token is valid', error: false });
		} catch (error) {
			return res.json({ error: true, message: error.message });
		}
	}
}

export default AuthController;
