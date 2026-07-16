<div align="center">

# Actividad 1. Introduccion a Spring Boot

![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.5-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-Project-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![Thymeleaf](https://img.shields.io/badge/Thymeleaf-Template-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white)

**Instituto Tecnologico Nacional de Mexico - Instituto Tecnologico de Oaxaca**

| | |
|---|---|
| **Carrera** | Ingenieria en Sistemas Computacionales |
| **Materia** | Programacion Web |
| **Docente** | Adelina Martinez |
| **Actividad** | Actividad 1. Introduccion a Spring Boot - Configuracion y Primeros Controladores |
| **Alumno** | Diego Alonso Sanchez Hernandez |

[![GitHub Diego](https://img.shields.io/badge/GitHub-Diego-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/diegooash)
[![VPS](https://img.shields.io/badge/VPS-Spring%20Boot-1E90FF?style=for-the-badge&logo=serverfault&logoColor=white)](http://auramusic.lat:8081/api/identificacion)

</div>

---

## Descripcion

Este proyecto fue desarrollado con Spring Boot como parte de la Actividad 1 de Programacion Web. Su objetivo es mostrar la configuracion basica de un proyecto web en Java, asi como la creacion de controladores y endpoints HTTP funcionales.

El sistema incluye:

- 2 controladores
- 4 endpoints de prueba
- respuestas en JSON
- una vista HTML con Thymeleaf

---

## Endpoints

| Endpoint | Tipo de respuesta | Descripcion |
|---|---|---|
| `/api/identificacion` | JSON | Regresa los datos del proyecto y del autor. |
| `/api/materias` | JSON | Regresa una lista simulada de materias con horario. |
| `/detalles_info` | HTML | Muestra una vista renderizada con Thymeleaf. |
| `/detalles_info2` | JSON | Regresa un objeto simple con informacion del servidor. |

---

## Estructura del proyecto

```text
DASHact1_t4/
├── pom.xml
├── mvnw
├── mvnw.cmd
├── README.md
├── src/
│   ├── main/
│   │   ├── java/com/ash/spring/ejercicio1/dashact1_t4/
│   │   │   ├── Dashact1T4Application.java
│   │   │   └── controllers/
│   │   │       ├── EjemploController.java
│   │   │       └── EjemploRestController.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── templates/
│   │           └── detalles_info.html
│   └── test/
│       └── java/com/ash/spring/ejercicio1/dashact1_t4/
│           └── Dashact1T4ApplicationTests.java
```

---

## Ejecucion en local

```bash
cd DASHact1_t4
./mvnw spring-boot:run
```

Luego puedes probar en navegador o Postman:

- `http://localhost:8080/api/identificacion`
- `http://localhost:8080/api/materias`
- `http://localhost:8080/detalles_info`
- `http://localhost:8080/detalles_info2`

---

## Despliegue en VPS

El proyecto fue desplegado en el VPS usando un archivo `.jar` ejecutado con Java y un puerto definido manualmente.

URLs publicas del proyecto:

- `http://auramusic.lat:8081/api/identificacion`
- `http://auramusic.lat:8081/api/materias`
- `http://auramusic.lat:8081/detalles_info2`

---

## Tecnologias usadas

- Java 17
- Spring Boot 3.2.5
- Maven Wrapper
- Spring Web
- Thymeleaf

