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

// Retorna todos os cursos pela sigla
const getCursos = function(siglaCursos){
    let sigla = siglaCursos;
    let listaCursos = [];
    let erro = true;

    if(typeof(sigla) != 'undefined')
    {
        if(sigla != '' && sigla.lenght == 2)
        {
            //Percorrer o array de cursos para validar a sigla
            cursos.forEach(item => {
                
                //Localiza a sigla do curso dentro do array 
                item.cidades.forEach(itemCursos => {
                    listaCursos.push(itemCursos.nome)
                    erro = false;
                })
            })
        }
    }
    if(erro)
    return false;

    else
    return listaCursos;
}

console.table(getCursos('DS'))
