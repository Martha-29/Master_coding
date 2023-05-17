// Crear una app que tenga un array con 4 objetos, cada objeto tenga un usuario y un password.
// La app debe solicitarle al cliente que ingrese su usuario y password por medio de 2 prompts
// Con la informacion que ingrese el cliente vamos a comparar con la informacion que tenemos registrada en nuestro array.
// Si el usuario y password ingresado por el cliente es igual al que tenemos en nuestro array, mostrarle un mensaje de bienvenida.
// Si no concuerda indicarle que su usuario o password esta incorrecto.

//(+502) 32133515
const usuarios=[
    {usuario:"Maria", password:"1234"},
    {usuario:"Jorge", password:"h0la"},
    {usuario:"Ana", password:"4567"},
    {usuario:"Karla", password:"fr33"}];

let user= prompt("Hola, ingrese su usuario");

let pass= prompt("Ingrese su contraseña");

for(let i=0; i<=usuarios.length; i++)
{
    if(usuarios.usuario[i] == user && usuarios.password[i]==pass)
    {
        console.log("Bienvenid@ ", user);
    }
    else
    {
        console.log("Usuario o contraeña incorrecta ");
    }
}