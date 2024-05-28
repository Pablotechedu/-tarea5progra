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

agregarDpi = function(){
user1.dpi='1234 567890 1234'
user2.dpi='5678 123456 7890'
user3.dpi='9876 543210 9876'
user4.dpi='4321 098765 4321'
user5.dpi='6789 012345 6789'
user6.dpi='3456 789012 3456'
}

cambiarDireccion = function(){
user1.direccion.municipio="Villa NUeva"
user1.direccion.calle="La Brigada"
user1.direccion.numero="120"
user2.direccion.municipio="Mixco"
user3.direccion.calle="Calle Real"
user4.direccion.numero="45"
user3.direccion.municipio="Santa Catarina Pinula"
user3.direccion.calle="Calle del Lago"
user3.direccion.numero="85"
user4.direccion.municipio="Escuintla"
user4.direccion.calle="Avenida Centroamerica"
user4.direccion.numero="203"
user5.direccion.municipio="Chiquimula"
user5.direccion.calle="Principal"
user5.direccion.numero="16"
user6.direccion.municipio="San Juan Sacatepequez"
user6.direccion.calle="Las Flores"
user6.direccion.numero="78"
}


let usuarios = [user1, user2, user3, user4, user5, user6];

// Mostrar usuarios en consola

let mostrarLog = function(){
for (let i = 0; i < usuarios.length; i++) {
    let user = usuarios[i];
    console.log(`Usuario ${i + 1}:`);
    console.log(`Nombre: ${user.nombre}`);
    console.log(`Apellido: ${user.apellido}`);
    console.log(`Dpi: ${user.dpi}`);
    console.log(`Email: ${user.email}`);
    console.log(`Dirección: ${user.direccion.municipio}, ${user.direccion.calle}, ${user.direccion.numero}`);
    console.log(`Estado: ${user.estado}`);
        console.log('-------------------');
}}

