let selectedOption = 0;

function validate(event){

    if(selectedOption === 0){
        event.preventDefault()// estamos usando um event para evitar que a página recarregue (preventDefault), o evento é recebido de todos os botões
        alert("please select an option!")
        return
    }

    localStorage.setItem('selectedOption',selectedOption)//o set iten recebe 2 parametros, o nome do campo em string e o valor a ser salvo
}

function start(){
    const options = document.querySelectorAll('.options button')
    const button = document.querySelector('#submit-button')

    options.forEach(option => {
        option.addEventListener('click', () => {
            selectedOption = parseInt(option.textContent)
        })
    })//usando arrow functions

    button.addEventListener('click', validate)
}

start ()