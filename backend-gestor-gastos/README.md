# Gestor de Gastos - API Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

Este es el motor de mi aplicación de finanzas personales. Diseñado bajo el principio de **"aprender haciendo"**, este backend gestiona la seguridad, los usuarios y toda la lógica financiera que alimenta mi interfaz en React.

---

## Filosofía del Proyecto
Este no es solo un código copiado de un tutorial. Se construyó siguiendo una metodología de **entendimiento profundo**:
* **Sin cajas negras:** Cada línea de código tiene un porqué, desde la validación manual de datos hasta la estructura de carpetas.
* **Seguridad primero:** Implementación de hashing de contraseñas y protección de rutas mediante tokens.
* **Escalabilidad:** Separación clara entre la lógica de servidor (Controllers) y la lógica de negocio (Services).

## Stack Tecnológico
* **Runtime:** Node.js
* **Framework:** Express.js
* **Base de Datos:** MongoDB (vía Mongoose)
* **Seguridad:** Bcrypt (Hashing) y JSON Web Tokens (Sesiones)
* **Comunicación:** CORS configurado para integración segura con Frontend

---

## Documentación de la API (Rutas)

### 👤 Usuarios y Autenticación
| Método | Endpoint | Descripción | Protegida |
| :--- | :--- | :--- | :---: |
| `POST` | `/api/users/register` | Crea un nuevo usuario y encripta su contraseña. 
| `POST` | `/api/users/login` | Valida credenciales y devuelve un Token (JWT). 

### 💸 Gestión de Movimientos
| Método | Endpoint | Descripción | Protegida |
| :--- | :--- | :--- | :---: |
| `GET` | `/api/movements` | Obtiene la lista completa de ingresos y egresos del usuario. 
| `POST` | `/api/movements` | Registra un nuevo movimiento (Ingreso/Egreso). 
| `GET` | `/api/movements/balance` | Retorna el balance total calculado dinámicamente. 

---

## Estructura de Carpetas
```text
backend/
├── config/         # Configuración de DB (MongoDB Atlas)
├── controllers/    # Recepción de peticiones y envío de respuestas
├── middleware/     # Filtros de seguridad (Verificación de Token)
├── models/         # Definición de Esquemas (User, Movement)
├── routes/         # Definición de Endpoints
├── services/       # Lógica de Negocio (Cálculos y procesos core)
└── app.js          # Inicialización del servidor y Middlewares globales


## Instalacion y uso
Clona el repositorio.
Entra a la carpeta: cd backend.
Instala dependencias: npm install.
Crea un archivo .env con tus credenciales de MongoDB y tu JWT_SECRET.
Inicia el servidor: npm run dev.
