const txttoencrip = document.querySelector(".txtfencrip")
const msjencrip = document.querySelector(".txtencrip")

//Boton de encriptar

function btnencriptar(){
    const textoEncriptado = encrip(txttoencrip.value)
    msjencrip.value = textoEncriptado
    msjencrip.style.backgroundImage="none"
    txttoencrip.value=""
}

function encrip(stringEncriptar){
    let matrizcodigo =[["e","enter"],["i" ,"imes"],["a" ,"ai"],["o" ,"over"],["u" ,"upa"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for(let i = 0; i < matrizcodigo.length;i++){
        if(stringEncriptar.includes(matrizcodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1]);
        }
    }
    return stringEncriptar;
}

//Boton Desencriptar

function btndesencriptar(){
    const textoDescrip = descrip(txttoencrip.value)
    msjencrip.value = textoDescrip
    msjencrip.style.backgroundImage="none"
    txttoencrip.value=""
}

function descrip(stringDesencriptar){
    let matrizcodigo =[["e","enter"],["i" ,"imes"],["a" ,"ai"],["o" ,"over"],["u" ,"upa"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizcodigo.length;i++){
        if(stringDesencriptar.includes(matrizcodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0]);
        }
    }
    return stringDesencriptar;
}

//Boton Copiar

function btncopy(){
    msjencrip.select();
    navigator.clipboard.writeText(msjencrip.value);
    msjencrip.value="";
    alert("Copiado al porta papeles");
}