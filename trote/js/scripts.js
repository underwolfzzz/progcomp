function calcular(){
    let mascote, homenagem, leite, kit, suplemento, soma, equipe
    mascote = Number(document.getElementById("mascote").value)
    homenagem = Number(document.getElementById("homenagem").value)
    leite = Number(document.getElementById("leite").value)
    kit = Number(document.getElementById("kit").value)
    suplemento = Number(document.getElementById("suplemento").value)
    soma = mascote + homenagem + (2 * leite) 
    
    equipe = document.getElementById("equipe").value
   
    if (equipe=="laranja"){
        if(kit >= 97 && suplemento>=49 ){
            soma = soma + 5000 + ((kit-97)*30) + ((suplemento-49)*15)
        }
        else if (kit >= 78 && suplemento>=39){
            soma = soma + 4000 + ((kit-78)*30) + ((suplemento-39)*15)
        }
        else if (kit >= 49 && suplemento>=25){
            soma = soma + 2500 + ((kit-49)*30) + ((suplemento-25)*15)
        }
        else if (kit >= 19 && suplemento>=10){
            soma = soma + 1000 + ((kit-19)*30) + ((suplemento-10)*15)
        }
        if (sangue >= 49){
            soma = soma + 2500 + ((sangue - 49) * 20)
        }
        else{
            soma = soma + (sangue * 20)
        }
    }
    else if(equipe=="preto"){

    }
    else if(equipe=="roxo"){

    }
    else if(equipe=="verde"){

    }
    else{

    }



    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}