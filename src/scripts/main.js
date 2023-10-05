
document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('form-sorteador').addEventListener('submit', function (e){
        let numeroMaximo = document.getElementById('numero-maximo').value
        e.preventDefault()
        
        numeroMaximo = parseInt(numeroMaximo)

        let numeroAleatorio = Math.random() * numeroMaximo

        numeroAleatorio = Math.floor(numeroAleatorio + 1)


            document.getElementById('resultado-valor').innerText = numeroAleatorio

            document.querySelector('.resultado').style.display = 'block'
    
    })
})