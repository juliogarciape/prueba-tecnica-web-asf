# :sparkles: Prueba Técnica: Web Developer :dart:

## Descripción :page_facing_up:

Este proyecto es una prueba técnica para el puesto de Web Developer en la empresa Administradora de Servicios Funerarios (ASF). El proyecto consiste en desarrollar una aplicación web para el control de empleados en la empresa ABC S.A.C 

> [!NOTE]
> Para información más detallada sobre los requerimientos de la prueba técnica, revisar el archivo [examen-habilidades- tecnicas-web.docx](media/examen-habilidades-tecnicas-web.docx).

## Tecnologías :computer:

- **Base de Datos**: SQL Server
- **Backend**: Node.js, Express.js, Prisma
- **Frontend**: Angular, Typescript, Angular Material
- **Servicios**: AWS (RDS)

## Requisitos :pencil:

- Crear una base de datos SQL Server 2016
- Crear un archivo .env en la carpeta `backend` para establecer las variables de entorno que aparecen en el archivo [.env.example](/app/backend/.env.example)

## Instalación :inbox_tray:

1) **Clona el repositorio:**

```bash
git clone https://github.com/juliogarciape/prueba-tecnica-web-asf.git
```

2) **Instala las dependencias:**

```bash
npm install && npm run install   # Instala las dependencias del proyecto usando concurrently
```

3) **Ejecuta la aplicación:**

```bash
npm run dev   # Modo Desarrollo
ó
npm run start # Modo Produccion 
```

> [!IMPORTANT]
> Esta configuración solo se realizó con el fin de probar la aplicación web con pocos comandos y de forma rápida, para un entorno de producción lo mas recomendable es separar los proyectos en diferentes repositorios con una configuracion independiente.

## Detalles Técnicos :bulb:

- Se utilizó la capa Free Tier de AWS para la creacion de la base de datos SQL Server en AWS RDS
- Se utilizó el paquete `concurrently` para ejecutar el backend y el frontend al mismo tiempo con un solo comando.

## Screenshots :camera:

![](/media/screenshots/screenshot01.png)

![](/media/screenshots/screenshot02.png)

![](/media/screenshots/screenshot03.png)

![](/media/screenshots/screenshot04.png)

![](/media/screenshots/screenshot05.png)

![](/media/screenshots/screenshot06.png)
