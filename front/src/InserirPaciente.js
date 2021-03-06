import React, { Component } from 'react';
import $ from 'jquery';

export default class InserirPaciente extends Component {

    constructor(props) {
        super();
        this.state = {
            paciente: {
                nome: '',
                dataNascimento: '',
                cpf: '',
                tipoDeSangue: '',
                sexo: '',
                estado: 'Em atendimento',
                amnese: {
                    QP: '',
                    HDA: {
                        // quando a dor começou
                        epocaInicio: '',
                        // características da dor: onde, tipo (queimação/cólica), duração (cícila ou não), intensidade, se ela se espalha
                        // se impede a realização de alguma tarefa, se melhora/piora com algo, se acompanha mais algum sintoma 
                        caracterizacaoDaDor: {
                            onde: '',
                            tipo: '',
                            duracao: '',
                            intensidade: '',
                            melhora: '',
                            piora: '',
                            acompanhamento: ''
                        }
                    },
                    // antecedentes pessoais
                    HMP: {
                        cirurgias: '',
                        alergias: ''
                    },
                    // histórico familiar
                    HF: {
                        mae: '',
                        pai: ''
                    },
                    // hábitos de vida
                    HPS: {
                        // se o trabalho proporciona estresse, se proporciona risco à saude
                        condicoesTrabalho: {
                            estresse: '',
                            localTrabalho: '',
                            risco: ''
                        },
                        condicoesVida: {
                            alimentacao: '',
                            tabaco: '',
                            alcool: '',
                            medicacaoReceitada: '',
                            drogasIlicitas: '',
                            viagem: {
                                local: ''
                            },
                            animaisEstimacao: ''
                        }
                    },

                },
            }
        }
    }

    salvar(evento) {
        evento.preventDefault();
        console.log(this.state.paciente)
        console.log(JSON.stringify(this.state.paciente))
        $.ajax({
            url: "/api/adicionapaciente/PACIENTE10",
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify(this.state.paciente),
            success: novaListagem => window.location.replace('/'),
            error: resposta => console.log(resposta)
        })
    }

    mudarEstado(prop, evento) {
        evento.preventDefault();
        let paciente = this.state.paciente;
        paciente[prop] = evento.target.value;
        this.setState({ paciente: paciente });
    };

    render() {
        return <>
            <div className="container mt-3">
                <form onSubmit={this.salvar.bind(this)}>
                        <h5>Dados do paciente</h5>
                    <div class="row">
                        <div class="col">
                            <label>Nome completo</label>
                            <input type="text" className="form-control"
                                onChange={this.mudarEstado.bind(this, 'nome')} />
                        </div>
                        <div class="col">
                            <label>Data de Nascimento</label>
                            <input type="text" className="form-control"
                                onChange={this.mudarEstado.bind(this, 'dataNascimento')} />
                        </div>
                        </div>
                        <div className="form-group">
                        <label>CPF</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'cpf')}/>
                    </div>
                    <div className="form-group">
                        <label>Tipo Sanguíneo</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'tipoDeSangue')}/>
                    </div>
                    <div className="form-group">
                        <label>Sexo</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'sexo')}/>
                    </div>
                    <h5>Atendimento</h5>
                    <div className="form-group">
                        <label>Queixa Principal</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amnese.QP')}/>
                        <small>Motivo principal do paciente ter ido ao hospital</small>
                    </div>
                    <div className="form-group">
                        <label>Data inicial da queixa</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amnese.HDA.epocaInicial')}/>
                        <small>Início da dor</small>
                    </div>
                    <div className="form-group">
                        <label>Onde ocorre a dor</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HDA.caracterizacaoDaDor.onde')}/>
                        <small>Local da dor</small>
                    </div>
                    <div className="form-group">
                        <label>Tipo da dor</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HDA.caracterizacaoDaDor.tipo')}/>
                        <small>Ex: queimação, cólica</small>
                    </div>
                    <div className="form-group">
                        <label>Duração da dor</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HDA.caracterizacaoDaDor.duracao')}/>
                        <small>Cíclia ou não</small>
                    </div>
                    <div className="form-group">
                        <label>Intensidade da dor</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HDA.caracterizacaoDaDor.duracao')}/>
                        <small>Escala de 1 à 10</small>
                    </div>
                    <div className="form-group">
                        <label>Melhora</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HDA.caracterizacaoDaDor.melhora')}/>
                        <small>Paciente realiza algo que melhora a dor</small>
                    </div>
                    <div className="form-group">
                        <label>Piora</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HDA.caracterizacaoDaDor.piora')}/>
                        <small>Paciente realiza algo que piora a dor</small>
                    </div>
                    <div className="form-group">
                        <label>Acompanha outra coisa?</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HDA.caracterizacaoDaDor.acompanhamento')}/>
                    </div>
                    <h5 >Antecedentes pessoais</h5>
                    <div className="form-group">
                        <label>Passou por cirurgias recentemente</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HMP.cirurgias')}/>
                    </div>
                    <div className="form-group">
                        <label>Possui alergias</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HMP.alergias')}/>
                    </div>
                    <h5>Histórico Familiar</h5>
                    <div className="form-group">
                        <label>Histórico familiar - mãe</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HF.mae')}/>
                    </div>
                    <div className="form-group">
                        <label>Histórico familiar - pai</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HF.pai')}/>
                    </div>
                    <h5>Trabalho</h5>
                    <div className="form-group">
                        <label>Local de Trabalho</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HPS.condicoesTrabalho.localTrabalho')}/>
                    </div>
                    <div className="form-group">
                        <label>Frequência de estresse no trabalho</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HPS.condicoesTrabalho.estresse')}/>
                    </div>
                    <div className="form-group">
                        <label>Riscos no trabalho</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HPS.condicoesTrabalho.risco')}/>
                    </div>
                    <h5>Hábitos de Vida</h5>
                    <div className="form-group">
                        <label>Realizou alguma viagem? Para onde? </label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HPS.condicoesVida.viagem.local')}/>
                    </div>
                    <div className="form-group">
                        <label>Uso de medicamentos receitados</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HPS.condicoesVida.medicacaoReceitada')}/>
                    </div>
                    <div className="form-group">
                        <label>Frequência do uso de álcool</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HPS.condicoesVida.alcool')}/>
                    </div>
                    <div className="form-group">
                        <label>Frequência do uso do tabaco</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HPS.condicoesVida.tabaco')}/>
                    </div>
                    <div className="form-group">
                        <label>Frequência de drogas ilícitas</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HPS.condicoesVida.drogasIlicitas')}/>
                    </div>
                    <div className="form-group">
                        <label>Possui animais de estimação? Quais?</label>
                        <input type="text" className="form-control" 
                        onChange={this.mudarEstado.bind(this, 'amneses.HPS.condicoesVida.animaisEstimacao')}/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Enviar</button>
                </form>
            </div>
        </>
    }
} 