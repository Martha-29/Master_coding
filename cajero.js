const formulario = document.getElementById('formulario'),
    operaciones = document.getElementById('operaciones'),
    consultar = document.getElementById('Balance-btn'),
    retirar = document.getElementById('Withdraw-btn'),
    depositar = document.getElementById('Deposit-btn'),
    retiro = document.getElementById('monto-retiro'),
    deposito = document.getElementById('monto-deposito'),
    confirmdep = document.getElementById("Confirmar-dep-btn"),
    confirmret = document.getElementById("Confirmar-ret-btn"),
    bienvenida = document.getElementById('Bienvenida'),
    saldo = document.getElementById('Saldo'),
    saldo2 = document.getElementById('Saldo2'),
    regresar = document.getElementById('Regresar'),
    NuevoSaldo = document.getElementById('Nuevosaldo'),
    NuevoSaldo2 = document.getElementById('Nuevosaldo2'),
    NuevoSaldo3 = document.getElementById('Nuevosaldo3'),
    NuevoSaldo4 = document.getElementById('Nuevosaldo4'),
    Msgretiro = document.getElementById('Mensaje-retiro'),
    Msgdeposito = document.getElementById('Mensaje-deposito'),
    salir = document.getElementById('Log-out');

let userfound, position, depositar_flag = false, retirar_flag = false, saldo_flag = false, deposito_flag = false, retiro_flag = false;

var cuentas = [
    {
        nombre: 'Sara',
        contraseña: 'alebrije123',
        saldo: 900
    },
    {
        nombre: 'Eduardo',
        contraseña: 'superman456',
        saldo: 200
    }, {
        nombre: 'Jorge',
        contraseña: 'ironman689',
        saldo: 300
    },

];

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    let usuario = document.querySelector('#usuario').value
    let password = document.querySelector('#password').value
    validarDatos(usuario, password);
})

function validarDatos(usuario, password) {
    userfound = cuentas.some(cuentas => cuentas.nombre === usuario);

    if (userfound) {
        for (let i = 0; i <= cuentas.length; i++) {
            if (cuentas[i].nombre == usuario) {
                if (cuentas[i].contraseña == password) {
                    console.log("¡Bienvenid@", usuario, "!");
                    position = i;
                    dashboard();

                    break;
                }
                else {
                    console.log('password incorrecto');
                    mostrarError('Password');
                    break;
                }
            }
        }
    }

    else if (usuario === '' && password === '') {
        console.log('INGRESA TUS DATOS');
        mostrarError('Datos');
    }

    else if (!userfound) {
        console.log('user incorrecto');
        mostrarError('Usuario');
    }
    else {
        console.log('Error, datos incorrectos');
    }
}

function dashboard() {
    formulario.style.display = 'none';
    //formulario.classList.add('escondido');
    mostrarUsuario(cuentas[position].nombre);
    mostrarAvatar(cuentas[position].nombre);
    operaciones.classList.remove('escondido');
    operacion();
}

function mostrarUsuario(identidad) {
    let avatar = document.getElementById(`Usuario${identidad}`);
    avatar.classList.remove('escondido');
    bienvenida.classList.add('escondido');
}

function mostrarAvatar(identidad) {
    let avatar = document.getElementById(`Avatar${identidad}`);
    avatar.classList.remove('escondido');
}

function mostrarError(tipo) {
    let error = document.getElementById(`error${tipo}`);
    error.classList.remove('escondido');
    error.classList.add('error');
    setTimeout(() => {
        error.classList.remove('error')
        error.classList.add('escondido')
    }, 5000)
}

function operacion() {
    consultar.addEventListener('click', () => Saldo());
    retirar.addEventListener('click', () => Retirar());
    depositar.addEventListener('click', () => Depositar());
    salir.addEventListener('click', () => Salir())
}

function Saldo() {
    // console.log("Su saldo es", cuentas[position].saldo);
    retirar.classList.add('escondido')
    depositar.classList.add('escondido')
    saldo.classList.remove('escondido')
    saldo2.classList.remove('escondido')
    salir.classList.add('escondido');
    saldo.innerText = "$" + cuentas[position].saldo;
    regresar.classList.remove('escondido')
    saldo_flag = true;
    regresar.addEventListener('click', () => Regresar());
}

function Depositar() {
    //console.log("Ingresa el monto que desea depositar");
    consultar.classList.add('escondido');
    retirar.classList.add('escondido');
    deposito.classList.remove('escondido');
    confirmdep.classList.remove('escondido');
    regresar.classList.remove('escondido');
    salir.classList.add('escondido');
    Msgdeposito.classList.remove('escondido');
    deposito_flag = true;
    regresar.addEventListener('click', () => Regresar());
    confirmdep.addEventListener('click', (evento) => {
        if (deposito.valueAsNumber > 0) {
            depositar_flag = true;
            validarmonto();
        }
        else if (deposito.value === '') {
            //console.log("El monto no puede estar vacío");
            alert("El monto no puede estar vacío");
        }
    })
    regresar.addEventListener('click', () => Regresar());

}

function Retirar() {
    //console.log("Ingresa el monto que desea retirar");
    consultar.classList.add('escondido');
    depositar.classList.add('escondido');
    retiro.classList.remove('escondido');
    confirmret.classList.remove('escondido');
    regresar.classList.remove('escondido')
    salir.classList.add('escondido')
    Msgretiro.classList.remove('escondido');
    retiro_flag=true;
    confirmret.addEventListener('click', (evento) => {
        if (retiro.valueAsNumber > 0) {
            retirar_flag = true;
            validarmonto();
        }
        else if (retiro.value === '') {
            console.log("El monto no puede estar vacío");
            alert("El monto no puede estar vacío");
        }
    })
    regresar.addEventListener('click', () => Regresar());

}

function validarmonto() {

    if (cuentas[position].saldo == 990) {
        console.log("Lo sentimos no es posible depositar, su cuenta debe tener máximo $990");
        alert(("Lo sentimos no es posible depositar, su cuenta debe tener máximo $990"));
    }

    else if (cuentas[position].saldo < 990 && cuentas[position].saldo >= 10 && depositar_flag && deposito.valueAsNumber > 0) {
        let nuevosaldo = cuentas[position].saldo + deposito.valueAsNumber;

        if (nuevosaldo > 990) {
            //console.log("Lo sentimos no es posible depositar, su cuenta debe tener máximo $990");
            alert(("Lo sentimos no es posible depositar, su cuenta debe tener máximo $990"));
            deposito.value="";
            depositar_flag = false;
        }

        else if (nuevosaldo == 990) {
            //console.log("Depósito exitoso, tenga en cuenta que su cuenta tiene el saldo máximo permitido");
            alert("Depósito exitoso, tenga en cuenta que su cuenta tiene el saldo máximo permitido");
            cuentas[position].saldo = nuevosaldo;
            deposito.value="";
            depositar_flag = false;
            console.log("Nuevo saldo es: ", cuentas[position].saldo);
            NuevoSaldo.classList.remove('escondido')
            NuevoSaldo2.classList.remove('escondido')
            NuevoSaldo.innerText="$" + cuentas[position].saldo;
        }

        else {
            console.log("Depósito exitoso");
            alert("Depósito exitoso");
            cuentas[position].saldo = nuevosaldo;
            depositar_flag = false;
            console.log("Nuevo saldo es de: ", cuentas[position].saldo);
            deposito.value="";
            NuevoSaldo.classList.remove('escondido')
            NuevoSaldo2.classList.remove('escondido')
            NuevoSaldo.innerText="$" + cuentas[position].saldo;
        }
    }

    else if (cuentas[position].saldo <= 990 && cuentas[position].saldo >= 10 && retirar_flag && retiro.valueAsNumber > 0) {
        let nuevosaldo = cuentas[position].saldo - retiro.valueAsNumber;
        if (nuevosaldo < 10) {
            console.log("Lo sentimos no es posible retirar, su cuenta debe tener mínimo $10");
            alert("Lo sentimos no es posible retirar, su cuenta debe tener mínimo $10");
            retiro.value="";
            retirar_flag = false;
        }
        else if (nuevosaldo == 10) {
            console.log("Retiro exitoso, tenga en cuenta que su cuenta tiene el saldo mínimo permitido");
            alert("Retiro exitoso, tenga en cuenta que su cuenta tiene el saldo mínimo permitido");
            retiro.value="";
            cuentas[position].saldo = nuevosaldo;
            NuevoSaldo3.classList.remove('escondido')
            NuevoSaldo4.classList.remove('escondido')
            retirar_flag = false;
            NuevoSaldo3.innerText="$" + cuentas[position].saldo;
            console.log("Nuevo saldo es: ", cuentas[position].saldo);
        }
        else {
            console.log("Retiro exitoso");
            alert("Retiro exitoso");
            cuentas[position].saldo = nuevosaldo;
            retiro.value="";
            NuevoSaldo3.classList.remove('escondido')
            NuevoSaldo4.classList.remove('escondido')
            NuevoSaldo3.innerText="$" + cuentas[position].saldo;
            retirar_flag = false;
            console.log("Nuevo saldo es: ", cuentas[position].saldo);
        }

    }
    else if (cuentas[position].saldo < 10) {
        console.log("Lo sentimos no es posible retirar, su cuenta debe tener mínimo $10");
        alert("Lo sentimos no es posible retirar, su cuenta debe tener mínimo $10");
        retiro.value="";
        retirar_flag = true;
        regresar.addEventListener('click', () => Regresar());

    }
}

function Regresar() {
    if (saldo_flag) {
        retirar.classList.remove('escondido');
        depositar.classList.remove('escondido');
        saldo.classList.add('escondido');
        saldo2.classList.add('escondido')
        regresar.classList.add('escondido');
        salir.classList.remove('escondido');
        saldo_flag = false;
    }

    else if (deposito_flag) {
        consultar.classList.remove('escondido');
        retirar.classList.remove('escondido');
        deposito.classList.add('escondido');
        confirmdep.classList.add('escondido');
        regresar.classList.add('escondido');
        NuevoSaldo.classList.add('escondido')
        NuevoSaldo2.classList.add('escondido')
        Msgdeposito.classList.add('escondido');
        salir.classList.remove('escondido');
        deposito_flag = false;

    }

    else if (retiro_flag) {
        consultar.classList.remove('escondido');
        depositar.classList.remove('escondido');
        retiro.classList.add('escondido');
        confirmret.classList.add('escondido');
        regresar.classList.add('escondido');
        salir.classList.remove('escondido');
        Msgretiro.classList.add('escondido');
        NuevoSaldo3.classList.add('escondido');
        NuevoSaldo4.classList.add('escondido');
        retiro_flag = false;
    }

}

function Salir() {
    alert("Gracias por tu visita, vuelve pronto "+ cuentas[position].nombre + " 👋🏻😊");
    operaciones.classList.add('escondido');
    formulario.removeAttribute('style')
    let avatar1 = document.getElementById(`Usuario${cuentas[position].nombre}`);
    avatar1.classList.add('escondido');
    bienvenida.classList.remove('escondido');
    let avatar2 = document.getElementById(`Avatar${cuentas[position].nombre}`);
    document.getElementById('usuario').value = "";
    document.getElementById('password').value = "";
}
