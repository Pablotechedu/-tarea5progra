function crearPersona(nombre, apellido, email, municipio, calle, numero) {
    return {
        nombre: nombre,
        apellido: apellido,
        email: email,
        direccion: {
            municipio: municipio,
            calle: calle,
            numero: numero
        },
        hablar: function() {
            console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} vivo en el municipio de ${municipio} en la ${calle} en el numero de casa ${numero}, mi correo electronico es ${email}`);
        }
    };
}
  
  const persona1 = crearPersona('María', 'González', 'maria.gonzalez@gmail.com', 'Villa Nueva', 'Avenida La Brigada', 120);
  const persona2 = crearPersona('José', 'Martínez', 'jose.martinez@hotmail.com', 'Mixco', 'Calle Real', 45);
  const persona3 = crearPersona('Carla', 'López', 'carla.lopez@yahoo.com', 'Santa Catarina Pinula', 'Calle del Lago', 85);
  const persona4 = crearPersona('Luis', 'Ramírez', 'luis.ramirez@outlook.com', 'Escuintla', 'Avenida Centroamérica', 203);
  const persona5 = crearPersona('Ana', 'Fernández', 'ana.fernandez@icloud.com', 'Chiquimula', 'Calle Principal', 16);
  const persona6 = crearPersona('Paola', 'Ortiz', 'paola@company.ru', 'San Juan Sacatepéquez', 'Calle Las Flores', 78);

function mostrarConsola(){  
console.log(persona1);
persona1.hablar();
console.log(persona2);
persona2.hablar();
console.log(persona3);
persona3.hablar();
console.log(persona4);
persona4.hablar();
console.log(persona5);
persona5.hablar();
console.log(persona6);
persona6.hablar();}