/*******************************
 * Objetivo: Obter uma lista de cursos
 * Data: 22/09/2022
 * Autor:Yasmin Santos
 * Versao: 1.0
 *******************************/

var alunos = [
     
    {       "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Aline de Almeida Campos",
            "matricula" : "20151001001",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2024",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "carga" :   "75",
                            "media" :   "93",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "carga" :   "120",
                            "media" :   "68",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Hardware",
                            "carga" :   "75",
                            "media" :   "74",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "carga" :   "240",
                            "media" :   "85",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "carga" :   "150",
                            "media" :   "59",
                            "status":   "Exame"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Ana Carolina Vasconcelos Barreto",
            "matricula" : "20151001002",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2023",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "52",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "carga" :   "75",
                            "media" :   "87",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "carga" :   "120",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Hardware",
                            "carga" :   "75",
                            "media" :   "54",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "carga" :   "240",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            "nome"  : "ANDERSON GERÔNCIO SOUZA SILVA",
            "matricula" : "20151001004",
            "sexo"  :   "M",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2023",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "30",
                            "status":   "Reprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "carga" :   "75",
                            "media" :   "77",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "carga" :   "120",
                            "media" :   "50",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Hardware",
                            "carga" :   "75",
                            "media" :   "84",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "carga" :   "240",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            "nome"  : "Aristóteles da Silva Lima",
            "matricula" : "20151001007",
            "sexo"  :   "M",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2021",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "86",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "carga" :   "75",
                            "media" :   "77",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "carga" :   "120",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Hardware",
                            "carga" :   "75",
                            "media" :   "84",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "carga" :   "240",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Segurança da Informação",
                            "carga" :   "300",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Administração de Serviços",
                            "carga" :   "240",
                            "media" :   "74",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "carga" :   "400",
                            "media" :   "89",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Gabriella Macedo Paiva",
            "matricula" : "20151001014",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2020",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "77",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "carga" :   "75",
                            "media" :   "94",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "carga" :   "120",
                            "media" :   "82",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Hardware",
                            "carga" :   "75",
                            "media" :   "84",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "carga" :   "240",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Segurança da Informação",
                            "carga" :   "300",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Administração de Serviços",
                            "carga" :   "240",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "carga" :   "400",
                            "media" :   "99",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Debora Alves da Silva",
            "matricula" : "20151001012",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Redes de Computadores",
                    "sigla" :   "RDS",
                    "icone" :   "https://img.icons8.com/ultraviolet/344/thin-client.png",
                    "carga" :   "1200",
                    "conclusao" :   "2022",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Redes",
                            "carga" :   "75",
                            "media" :   "98",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Nuvem",
                            "carga" :   "120",
                            "media" :   "87",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Hardware",
                            "carga" :   "75",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Servições de Redes",
                            "carga" :   "240",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Cabeamento Estruturado",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Segurança da Informação",
                            "carga" :   "300",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Administração de Serviços",
                            "carga" :   "240",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "carga" :   "400",
                            "media" :   "99",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Heloisa Santos Araujo",
            "matricula" : "20151001017",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2022",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "carga" :   "150",
                            "media" :   "98",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "carga" :   "120",
                            "media" :   "87",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "carga" :   "75",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "carga" :   "240",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "carga" :   "150",
                            "media" :   "100",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados II",
                            "carga" :   "300",
                            "media" :   "96",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Aplicações Móveis",
                            "carga" :   "240",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "carga" :   "400",
                            "media" :   "99",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "Ingrid Paloma da Costa Porto",
            "matricula" : "20151001018",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2018",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "50",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "carga" :   "150",
                            "media" :   "94",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "carga" :   "120",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "carga" :   "75",
                            "media" :   "30",
                            "status":   "Reprovado"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "carga" :   "240",
                            "media" :   "50",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "carga" :   "150",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados II",
                            "carga" :   "300",
                            "media" :   "20",
                            "status":   "Reprovado"
                        },
                        {
                            "nome"  :   "Aplicações Móveis",
                            "carga" :   "240",
                            "media" :   "88",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Projetos",
                            "carga" :   "400",
                            "media" :   "50",
                            "status":   "Exame"
                        }
                    ]
                },
            ],
            "status" : "Finalizado"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png",
            "nome"  : "HÉLIDA BENTO DE OLIVEIRA LINS",
            "matricula" : "20151001016",
            "sexo"  :   "F",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2024",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "70",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "carga" :   "150",
                            "media" :   "99",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "carga" :   "120",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "carga" :   "75",
                            "media" :   "90",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "carga" :   "240",
                            "media" :   "64",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "carga" :   "150",
                            "media" :   "70",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            "nome"  : "Isaasc de Sousa Araújo",
            "matricula" : "20151001019",
            "sexo"  :   "M",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2022",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "carga" :   "150",
                            "media" :   "90",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "carga" :   "120",
                            "media" :   "95",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "carga" :   "75",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "carga" :   "240",
                            "media" :   "87",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "carga" :   "150",
                            "media" :   "70",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        },
        {
            "foto"  : "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-8-avatar-2754583_120515.png",
            "nome"  : "José Matheus da Silva Miranda",
            "matricula" : "20151001024",
            "sexo"  :   "M",
            "curso" : [
                {
                    "nome"  :   "001 - Técnico em Desenvolvimento de Sistemas",
                    "sigla" :   "DS",
                    "icone" :   "https://image.shutterstock.com/image-vector/api-interface-vector-icon-600w-659203513.jpg",
                    "carga" :   "1200",
                    "conclusao" :   "2023",
                    "disciplinas"   :   [
                        {
                            "nome"  :   "Sistemas Operacionais",
                            "carga" :   "75",
                            "media" :   "50",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Introdução a Programação",
                            "carga" :   "150",
                            "media" :   "40",
                            "status":   "Reprovado"
                        },
                        {
                            "nome"  :   "Linguagem de Marcação",
                            "carga" :   "120",
                            "media" :   "80",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Banco de Dados",
                            "carga" :   "75",
                            "media" :   "60",
                            "status":   "Exame"
                        },
                        {
                            "nome"  :   "Programação Web Back End",
                            "carga" :   "240",
                            "media" :   "90",
                            "status":   "Aprovado"
                        },
                        {
                            "nome"  :   "Programação Web Front End",
                            "carga" :   "150",
                            "media" :   "80",
                            "status":   "Aprovado"
                        }
                    ]
                },
            ],
            "status" : "Cursando"
        }
    ];

    const getAlunos = () => {
        let listaAlunos = [];
        let error = true;
    
        alunos.forEach(item => {
            listaAlunos.push(item);
            error = false;
        })
    
        if (error) {
            return false;
        } else {
            return listaAlunos;
        }
    }
    
    const getAlunosByCurso = (nomeCurso) => {
        let name = nomeCurso
        let listaAlunos = [];
        let error = true;
        
        alunos.forEach(item => {
            item.curso.forEach(itemCurso => {
                if (itemCurso.sigla == name) {
                    listaAlunos.push({
                        nome: item.nome,
                        foto: item.foto,
                        curso: itemCurso.sigla
                    }
                        );
                    error = false;
                }
            });
        });
    
        if (error) {
            return false;
        } else {
            return listaAlunos;
        }
    }

    
    
    const getAluno = (alunos) => {
        let aluno = {};
        let erro = true;
    
        alunos.push(push => {
            alunos.push({
                nome : push.nome,
                foto : push.foto,
                sexo : push.sexo,
                matricula : push.matricula,
                status : push.status,
                curso : push.curso 
            })
                erro = false;
        });
    
        if (erro) {
            return false;
        } else {
            return aluno;
        }
    }
    
    const getSubjects = (alunos) => {
        let subjects = [];
        let error = true
    
        alunos.curso.forEach(item => {
            item.disciplinas.forEach(subjectItem => {
                subjects.push(subjectItem);
                error = false
            });
        });
    
        if (error) {
            return false;
        } else {
            return subjects;
        }
    }
    
    const getAlunosByStatus = (alunosStatus) => {
        let status = alunosStatus;
        let listaAlunos = [];
        let error = true;
    
        alunos.forEach(item => {
            if (status == item.status) {
                listaAlunos.push(item);
                error = false;
            }
        });
    
        if (error) {
            return false;
        } else {
            return listaAlunos;
        }
    }
    
    const filtrarAlunosByStatus = (alunosArray, alunosStatus) => {
        let status = alunosStatus.toLowerCase();
        let listaAlunos = alunosArray;
        let filtrarArray = [];
        let error = true;
    
        if (status == 'status') {
            return listaAlunos;
        }
        listaAlunos.forEach(item => {
            if (item.status.toLowerCase() == status) {
                filtrarArray.push(item);
                error = false;
            }
        });
    
        if (error) {
            return false;
        } else {
            return filtrarArray;
        }
    }
    
    const getConcluidos = (cursoInicial) => {
        let anos = [];
        let curso = cursoInicial
        let error = true;
        
        alunos.forEach(item => {
            item.curso.forEach(itemCurso => {
                if (itemCurso.conclusao == curso) {
                    error = false;
                    anos.push({

                    
                        nome: item.nome,
                        conclusao: itemCurso.conclusao
                    }
                        );
                    
                }
            });
        });
    
        if (error) {
            return false;
        } else {
            return anos;
        }
    }
    
    const getAlunosByConclusao = (anos) => {
        let conclusao = anos;
        let listaAlunos= [];
        let error = true;
        
        alunos.forEach(item => {
            item.curso.forEach(itemCurso => {
                if (conclusao == itemCurso.conclusao) {
                    listaAlunos.push(item);
                    error = false;
                }
            });
        });
    
        if (error) {
            return false;
        } else {
            return listaAlunos;
        }
    }

    const filtrarAlunoByConclusao = (alunosArray, anos) => {
        let conclusao = anos;
        let listaAlunos = alunosArray;
        let filtrarArray = [];
        let error = true;
    
        listaAlunos.forEach(item => {
            item.curso.forEach(itemCurso => {
                if (itemCurso.conclusao == conclusao) {
                    filtrarArray.push(item);
                    error = false;
                }
            });
        });
    
        if (error) {
            return false;
        } else {
            return filtrarArray;
        }
    }

module.exports = {
        getAlunos,
        getAlunosByCurso,
        getSubjects,
        getAluno,
        getAlunosByStatus,
        getAlunosByConclusao,
        filtrarAlunosByStatus,
        filtrarAlunoByConclusao,
        getConcluidos
    }