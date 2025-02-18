import jwt from 'jsonwebtoken';

export const createToken = (email, name) => {
	const token = jwt.sign(
		{
			email,
			name,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: '1d',
		}
	);
	return token;
};
