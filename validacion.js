function validar(){
    let nombre = document.getElementById("nom");
    let telefono = document.getElementById("tel");
    let consulta = document.getElementById("men");
    let mail = document.getElementById("email");
    let letras = /^[A-Za-z]+$/;
    let numeros = /[0-9]/;
    let valido = true;
    let testMail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


    errorNombre.innerHTML = "";
    errorTelefono.innerHTML = "";
    errorConsulta.innerHTML = "";
    errorMail.innerHTML = "";

    if(nombre.value.trim()== "" || !nombre.value.match(letras)){
        errorNombre.innerHTML = "Nombre invalido";
        valido = false;
    }

    if(telefono.lenght < 10 || !telefono.value.match(numeros)){
        errorTelefono.innerHTML = "Telefono invalido";
        valido = false;
    }

    if(mail.value.trim() == "" || !testMail.test(mail.value.trim())){
        errorMail.innerHTML = "Email invalido";
        valido = false;
    }

    if(consulta.value.trim()== ""){
        errorConsulta.innerHTML = "Consulta vacia";
        valido = false;
    }

    if(valido){
        document.getElementById("listaConsultas").innerHTML = "";
        consul.style.display = "block";
        alert("Consulta enviada, se le contactara a traves del telefono o mail que ingreso")
        let nombreItem = document.createElement("li");
        let telefonoItem = document.createElement("li");
        let consultaItem = document.createElement("li");
        let mailItem = document.createElement("li");

        listaConsultas.appendChild(nombreItem);
        listaConsultas.appendChild(telefonoItem);
        listaConsultas.appendChild(consultaItem);
        listaConsultas.appendChild(mailItem);

        nombreItem.innerHTML = "Nombre: " + nombre.value;
        telefonoItem.innerHTML = "Telefono: " + telefono.value;
        consultaItem.innerHTML = "Consulta: " + consulta.value;
        mailItem.innerHTML = "Email: " + mail.value; 
        consul.appendChild(listaConsultas);
        
    }else{
        consul.style.display = "none";
    }

    return false;
}

