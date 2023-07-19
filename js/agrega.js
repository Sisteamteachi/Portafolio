let patterPhone = /^3\d{9}$/;
let patterName = /^[a-zA-Z\s]{4,}$/;
let patterEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorPost = new bootstrap.Modal('#errorPost', {keyboard: false});
const exitoPost = new bootstrap.Modal('#exitoPost', {keyboard: false});
const modalToggle = document.getElementById('toggleMyModal');

function validarPhone(){
    let phone = document.getElementById('phone').value

    if(!patterPhone.test(phone)){
        document.getElementById('errorphone').innerHTML= "El numero no es valido"
    }else{
        
        document.getElementById('errorphone').innerHTML= ""
    }
}

function validorName(){

    let name = document.getElementById('name').value


    if(!patterName.test(name)){
        document.getElementById('errorname').innerHTML = "El nombre no es valido"
    }else{
        document.getElementById('errorname').innerHTML = ""
    }
}


function validorEmail(){
    let name = document.getElementById('email').value


    if(!patterEmail.test(name)){
        document.getElementById('erroremail').innerHTML = "El correo no es valido"
    }else{
        document.getElementById('erroremail').innerHTML = ""
    }
}



function save(){
    let email = document.getElementById('email').value
    let name = document.getElementById('name').value
    let phone = document.getElementById('phone').value
    let message = document.getElementById('message').value
    //
    let resulemail = patterEmail.test(email) 
    let resulname = patterName.test(name)
    let resulphone = patterPhone.test(phone)
    
    if(!resulemail || !resulname || !resulphone || message == ""){
        alert("la informacion ingresada no es valido")
        return
    }

    const dataObj ={
        nombre:name,
        correo:email,
        telefono:phone,
        mensaje:message
    }

    const apiUrl = 'https://portafolio-back-mauve.vercel.app/agregarcliente';

    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Indica que se enviará un objeto JSON
        },
        body: JSON.stringify(dataObj), // Convierte el objeto a una cadena JSON antes de enviarlo
      };
      
      // Realizar la solicitud utilizando fetch
      fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('Respuesta de la API:', data);
          document.getElementById('erroremail').value = ""
          document.getElementById('errorname').value = ""
          document.getElementById('errorphone').value= ""
          exitoPost.show(modalToggle);
        })
        .catch(error => {
            errorPost.show(modalToggle);
          console.error('Error al enviar el objeto:', error);
        });
}




