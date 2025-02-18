import jwt from 'jsonwebtoken';

export const validateToken = (req, res, next) => {
	const headerAuth = req.headers['authorization'];
	const token = headerAuth && headerAuth.split(' ')[1];

	if (!token) {
		return res.json({
			message: 'Token not provided',
			error: true,
		});
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (error) {
		console.log(error);
		return res.json({ message: 'Invalid token', error: true });
	}
};
