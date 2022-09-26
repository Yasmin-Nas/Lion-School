/*******************************
 * Objetivo: Obter uma lista de cursos
 * Data: 22/09/2022
 * Autor:Yasmin Santos
 * Versao: 1.0
 *******************************/

var cursos = [
    {
        "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
        "sigla" :   "DS",
        "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
        "carga" :   "1200",
    },
    {
        "nome"  :   "002 - Técnico em Redes de Computadores",
        "sigla" :   "RDS",
        "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
        "carga" :   "1200"
    }
];

const getCursos = () => {
    let curso = [];
    let erro = true;

    cursos.forEach(item => {
        curso.push(item);
        erro = false;
    })

    if(erro){
    return false;
    }else{
    return curso;
    }
}

module.exports = {
    getCursos
}
