# Gestor de Gastos - API Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

---

## Filosofía del Proyecto
Este backend es un sistema de gestión financiera de alto rendimiento diseñado bajo una arquitectura de capas desacopladas (Controllers - Services - Models). El motor garantiza una integridad de datos absoluta y una respuesta de baja latencia para operaciones críticas de balance y auditoría de movimientos.

Capacidades Core:
* **Security Engine**: Implementación de seguridad multicapa mediante JWT (JSON Web Tokens) para persistencia de sesión y Bcrypt para el blindaje de credenciales sensibles.

* **Business Logic Layer:** Procesamiento avanzado en el servidor para el cálculo dinámico de balances, evitando la sobrecarga en el cliente y garantizando la precisión matemática en tiempo real.

* **Data Integrity:** Validaciones estrictas a nivel de esquema con Mongoose, asegurando que cada entrada de capital o egreso cumpla con los estándares financieros definidos.

* **API RESTful:** Estructura de endpoints estandarizada, optimizada para una integración transparente con interfaces modernas (React/Vite).

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

### Gestión de Movimientos
| Método | Endpoint | Descripción | Protegida |
| :--- | :--- | :--- | :---: |
| `GET` | `/api/movements` | Obtiene la lista completa de ingresos y egresos del usuario. 
| `POST` | `/api/movements` | Registra un nuevo movimiento (Ingreso/Egreso). 
| `GET` | `/api/movements/balance` | Retorna el balance total calculado dinámicamente. 

---

## Estructura de Carpetas
```text
backend/
├── controllers/    # Recepción de peticiones y envío de respuestas
├── middleware/     # Filtros de seguridad (Verificación de Token)
├── models/         # Definición de Esquemas (User, Movement)
├── routes/         # Definición de Endpoints
├── services/       # Lógica de Negocio (Cálculos y procesos core)
└── server.js       # Inicialización del servidor y Middlewares globales


## Instalacion y uso
Clona el repositorio.
Entra a la carpeta: cd backend.
Instala dependencias: npm install.
Crea un archivo .env con tus credenciales de MongoDB y tu JWT_SECRET.
Inicia el servidor: npm run dev.
