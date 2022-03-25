function hour(){
    let hora = new Date()
    let NomeDia = hora.getDay()
    let NumeroDia = hora.getDate()
    let Mes = hora.getMonth()
    let Ano = hora.getFullYear()
    let DiaExtenso
    let MesExtenso 
    let caseP = document.getElementById('case')
    //Avalia Dia
    switch(NomeDia){
        case 0:
            DiaExtenso = "Domingo"
            break
        case 1:
            DiaExtenso = "Segunda"
            break
        case 2:
            DiaExtenso = "Terça"
            break
        case 3:
            DiaExtenso = "Quarta"
            break
        case 4:
            DiaExtenso = "Quinta"
            break
        case 5:
            DiaExtenso = "Sexta"
            break
        case 6:
            DiaExtenso = "Sábado"
            break
        default:
            DiaExtenso = "#Erro!"       
    }
    switch(Mes){
        case 0:
            MesExtenso = "Janeiro"
            break
        case 1:
            MesExtenso = "Fevereiro"
            break
        case 2:
            MesExtenso = "Março"
            break
        case 3:
            MesExtenso = "Abril"
            break
        case 4:
            MesExtenso = "Maio"
            break
        case 5:
            MesExtenso = "Junho"
            break
        case 6:
            MesExtenso = "Julho"
            break
        case 7:
            MesExtenso = "Agosto"
            break
        case 8:
            MesExtenso = "Setembro"
            break
        case 9:
            MesExtenso = "Outubro"
            break
        case 10:
            MesExtenso = "Novembro"
            break
        case 11:
            MesExtenso = "Dezembro"
            break
    }
    caseP.innerHTML = `${DiaExtenso}, ${NumeroDia} de ${MesExtenso} de ${Ano}. `
}
function loginAttemp(){
    let button = document.getElementById('anchor')
    alert("Desculpe, houve um erro. Vamos tentar logar novamente?")
    window.location.href = "https://sia.estacio.br/sianet/logon"
}




