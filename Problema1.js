//usuario0
let nombre = 'Paola';
let apellido = 'Ortiz';
let email = 'paola@company.ru'
let direccion = {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 25,
};

//usuario1
let nombre1 = 'Paolo';
let apellido1 = 'Ortega';
let email1 = 'paolo@company.ru'
let direccion1 = {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 25,
};

//usuario2
let nombre2 = 'José';
let apellido2 = 'Martínez';
let email2 = 'jose.martinez@hotmail.com';
let direccion2 = {
    municipio: 'Quetzaltenango',
    calle: 'Avenida de la Reforma',
    numero: 58
};

//usuario3
let nombre3 = 'María';
let apellido3 = 'González';
let email3 = 'maria.gonzalez@gmail.com';
let direccion3 = {
    municipio: 'Antigua Guatemala',
    calle: 'Calle Real',
    numero: 102
};


//usuario4
let nombre4 = 'Luis';
let apellido4 = 'Ramírez';
let email4 = 'luis.ramirez@outlook.com';
let direccion4 = {
    municipio: 'Chichicastenango',
    calle: 'Avenida Santander',
    numero: 77
};

//usuario5
let nombre5 = 'Ana';
let apellido5 = 'Fernández';
let email5 = 'ana.fernandez@icloud.com';
let direccion5 = {
    municipio: 'Flores',
    calle: 'Calle de los Árboles',
    numero: 45
};

// Mostrar datos en consola
for (let i = 1; i <= 5; i++) {
    console.log(`Persona ${i}:`);
    console.log(`Nombre: ${eval('nombre' + i)}`);
    console.log(`Apellido: ${eval('apellido' + i)}`);
    console.log(`Email: ${eval('email' + i)}`);
    console.log('Dirección:', eval('direccion' + i));
    console.log('-------------------');
}