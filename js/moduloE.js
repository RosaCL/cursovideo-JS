function contando(){
    let ini=document.getElementById('texti')
    let fim=document.getElementById('textf')
    let passo=document.getElementById('textp')
    let res=document.getElementById('res')

    if(ini.value.length==0 || fim.value.length==0 || passo.value.length==0){
        alert('[Erro] Faltam dados')
    }else{
        alert('tudo ok') 
        res.innerHTML='Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c=1; c<=5; c+=p){
            res.innerHTML+=`${c}`
        }
    }
}