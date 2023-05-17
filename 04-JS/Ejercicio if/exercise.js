// Hacer un programa que se encargue de validar quienes pueden vacunarse 
// Las personas que pueden optar por la vacuna son las siguientes:
// Mayores de 18 años que vivan en municipio fronterizo del norte del pais yup
// Embarazadas mayores de 18 años, con mas de 9 semanas de gestacion yup
// Personas que cumplen 30 años o mas en el presente año

let edad = prompt("Hola, bienvenid@, ¿cuál es tu edad?");

if(edad>=18 && edad<30)
{
    let municipio= prompt("¿Vives en un municipio fronterizo al norte del país?");
    let sexo = prompt("¿Eres del sexo femenino o masculino?");
    if(sexo=='femenino'){
        let embarazo = prompt("¿Estás embarazada?");
        if(embarazo=='si')
        {
            let semanas = prompt("¿Cuántas semanas de gestación tienes?")
            if(semanas>=9)
            {
                console.log("¡Puedes vacunarte! Acude a tu centro de salud más próximo");
            }
        }
        else if(edad==29)
        {
            let año_nacim = prompt("¿En qué año naciste?");
            if(2023 - año_nacim==30)
            {
                console.log("¡Puedes vacunarte! Acude a tu centro de salud más próximo");
            }
            else{
                console.log("Lamentablemente no puedes vacunarte en este momento");
            }
        }
        else{
            console.log("Lamentablemente no puedes vacunarte en este momento");
        }
    }
    else if (municipio=='si'){
        console.log("¡Puedes vacunarte! Acude a tu centro de salud más próximo");}
    else {
        let año_nacim = prompt("¿En qué año naciste?");
        if(2023 - año_nacim==30)
        {
            console.log("¡Puedes vacunarte! Acude a tu centro de salud más próximo");
        }
        else{
            console.log("Lamentablemente no puedes vacunarte en este momento");
        }
    }
    
}

else if(edad>=30)
{
    console.log("¡Puedes vacunarte! Acude a tu centro de salud más próximo");

}

else 
{
    console.log("Lamentablemente no puedes vacunarte en este momento");
}





