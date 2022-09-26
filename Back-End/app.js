'use strics'

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
 
 const { getAlunos, getAlunosByCurso,getSubjects,getAluno, getAlunosByStatus, getAlunosByConclusao, filtrarAlunosByStatus, filtrarAlunoByConclusao, getConcluidos } = require('./modulos/alunos.js');
 const { getCursos } = require('./modulos/cursos.js');
 
 const app = express()
 
 app.use((request, response, next) => {
     response.header('Access-Control-Allow-Origin', '*');
     response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
     app.use(cors());
 
     next()
 });
 
 app.get('/curso', cors(), async (request, response, next) => {
     let curso = getCursos();
 
     if (curso) {
         response.status(200);
         response.json(curso);
     } else {
         response.status(404);
     }
 });
 
 // Endpoint para listar todos os alunos
 app.get('/alunos', cors(), async (request, response, next) => {
     let listaAlunos = getAlunos();
 
     if (listaAlunos) {
         response.status(200);
         response.json(listaAlunos);
     } else {
         response.status(404);
     }
 });
 
 // Endpoint para listar todos os alunos de um curso
 app.get('/alunos/curso/?', cors(), async (request, response, next) => {
     let curso = request.query.curso;
     let status = request.query.status;
     let dataConclusao = request.query.conclusao;
     
     let listaAlunos = getAlunosByCurso(curso);
     if (status != undefined) {
         listaAlunos = await filtrarAlunosByStatus(listaAlunos, status);
     }
     if (dataConclusao != undefined) {
         listaAlunos = await filtrarAlunoByConclusao(listaAlunos, dataConclusao);
     }
 
     if (listaAlunos) {
         response.status(200);
         response.json(listaAlunos);
     } else {
         response.status(404);
     }
 });
 
 // Endpoint para listar as informacoes de um aluno pelo numero de matricula
 app.get('/aluno/:matricula', cors(), async (request, response, next) => {
     let alunoEnrollment = request.params.matricula;
     let alunoInfo = getAluno(alunoEnrollment);
 
     if (alunoInfo) {
         response.status(200);
         response.json(alunoInfo);
     } else {
         response.status(404);
     }
 });
 
 // Endpoint para listar as disciplinas de um aluno pela matricula
 app.get('/:matricula/disciplinas', cors(), async (request, response, next) => {
     let alunoEnrollment = request.params.matricula;
     let alunoInfo = getAluno(alunoEnrollment);
 
     let subjects = getSubjects(alunoInfo)
 
     if (subjects) {
         response.status(200);
         response.json(subjects);
     } else {
         response.status(404);
     }
 });
 
 // Endpoint para listar alunos a partir de um status
 app.get('/alunos/status/:status', cors(), async (request, response, next) => {
     let status = request.params.status;
     let listaAlunos = getAlunosByStatus(status);
 
     if (listaAlunos) {
         response.status(200);
         response.json(listaAlunos);
     } else {
         response.status(404);
     }
 });
 
 // Endpoint para listar alunos a partir de um ano de conclusao
 app.get('/alunos/conclusao/:data', cors(), async (request, response, next) => {
     let date = request.params.data;
     let listaAlunos = getAlunosByConclusao(date);
 
     if (listaAlunos) {
         response.status(200);
         response.json(listaAlunos);
     } else {
         response.status(404);
     }
 });
 
 app.get('/conclusao/:curso', cors(), async (request, response, next) => {
     let curso = request.params.curso;
     let conclusao = getConcluidos(curso);
 
     if (conclusao) {
         response.status(200);
         response.json(conclusao);
     } else {
         response.status(500);
     }
 });
 
 app.listen(3030, function() {
     console.log('Servidor aguardando requisicoes');
 });