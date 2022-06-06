let selectedOption = 0;


// ---------------------------------VOTO-------------------------
const vote = {
    validate(event){

        if(selectedOption === 0){
            event.preventDefault()// estamos usando um event para evitar que a página recarregue (preventDefault), o evento é recebido de todos os botões
            alert("please select an option!")
            return
        }
    
        localStorage.setItem('selectedOption',selectedOption)//o set iten recebe 2 parametros, o nome do campo em string e o valor a ser salvo
    },

    changeSelectedOption(optionNumber){
        selectedOption = optionNumber
    }
}


// ---------------------INICIO DA APLICAÇÂO-------------------------
const app = { // objeto com funções
    start(){
        const options = document.querySelectorAll('.options button')
        const button = document.querySelector('#submit-button')
    
        options.forEach(option => {
            option.addEventListener('click', () => {
                let optionNumber = parseInt(option.textContent)
                vote.changeSelectedOption(optionNumber)
            })
        })//usando arrow functions
    
        button.addEventListener('click', vote.validate)
    }
}

app.start()