function CreateUser(){



    const User = {
        "name": document.getElementById("name").value
        ,"email":document.getElementById("email").value
        ,"password": document.getElementById("password").value
        ,"cpf": document.getElementById("cpf").value
        ,"birthdate":document.getElementById("birthdate").value
        ,"uf":document.getElementById("uf").value
        ,"city":document.getElementById("city").value
        ,"cep":document.getElementById("cep").value
    

    } 
    const options = {
        method: 'POST',
        body: Object.keys(User)
        .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(body[k])}`)
        .join('&')
    };
    fetch("http://localhost:3000/user",options)
    .then(r => R.json())
    .then(() => alert("Sucesso"))
    .catch(()=> alert("erro"))

}