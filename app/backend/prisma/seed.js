import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	try {
		await prisma.administradores.create({
			data: {
				name: 'Cesar',
				email: 'julio@gmail.com',
				password: '123',
			},
		});

		return true;
	} catch (error) {
		console.log(error);
	}
}

main();
