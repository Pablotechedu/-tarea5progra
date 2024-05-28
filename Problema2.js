let user1 = {
    nombre: 'María',
    apellido: 'González',
    email: 'maria.gonzalez@gmail.com',
    direccion: {
        municipio: 'Antigua Guatemala',
        calle: 'Calle Real',
        numero: 102,
    },
    estado: true,
    recuperarClave: function () {
        console.log('Recuperar clave ...');
    },
};

let user2 = {
    nombre: 'José',
    apellido: 'Martínez',
    email: 'jose.martinez@hotmail.com',
    direccion: {
        municipio: 'Quetzaltenango',
        calle: 'Avenida de la Reforma',
        numero: 58,
    },
    estado: true,
    recuperarClave: function () {
        console.log('Recuperar clave ...');
    },
};

let user3 = {
    nombre: 'Carla',
    apellido: 'López',
    email: 'carla.lopez@yahoo.com',
    direccion: {
        municipio: 'Cobán',
        calle: 'Calle del Arco',
        numero: 213,
    },
    estado: true,
    recuperarClave: function () {
        console.log('Recuperar clave ...');
    },
};

let user4 = {
    nombre: 'Luis',
    apellido: 'Ramírez',
    email: 'luis.ramirez@outlook.com',
    direccion: {
        municipio: 'Chichicastenango',
        calle: 'Avenida Santander',
        numero: 77,
    },
    estado: true,
    recuperarClave: function () {
        console.log('Recuperar clave ...');
    },
};

let user5 = {
    nombre: 'Ana',
    apellido: 'Fernández',
    email: 'ana.fernandez@icloud.com',
    direccion: {
        municipio: 'Flores',
        calle: 'Calle de los Árboles',
        numero: 45,
    },
    estado: true,
    recuperarClave: function () {
        console.log('Recuperar clave ...');
    },
};

let user6 = {
    nombre: 'Paola',
    apellido: 'Ortiz',
    email: 'paola@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25,
    },
    estado: true,
    recuperarClave: function () {
        console.log('Recuperar clave ...');
    },
};

// Array de usuarios
let usuarios = [user1, user2, user3, user4, user5, user6];

// Mostrar usuarios en consola
for (let i = 0; i < usuarios.length; i++) {
    let user = usuarios[i];
    console.log(`Usuario ${i + 1}:`);
    console.log(`Nombre: ${user.nombre}`);
    console.log(`Apellido: ${user.apellido}`);
    console.log(`Email: ${user.email}`);
    console.log(`Dirección: ${user.direccion.municipio}, ${user.direccion.calle}, ${user.direccion.numero}`);
    console.log(`Estado: ${user.estado}`);
    user.recuperarClave();
    console.log('-------------------');
}