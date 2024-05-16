import React, { useState } from 'react';
import logo from './imgs/logoDetetive.png';
import menuIcon from './imgs/menu.png'
import confirme from './imgs/confime.png'
import telefone from './imgs/telefone.png'
import user from './imgs/Usericon.png'
import logopix from './imgs/logopix.png'
import cell from './imgs/cell.png'
import pessoas from './imgs/pessoas.png'
import cadeado from './imgs/cadeado.png'
import depoimentoteste from './imgs/depoimentoteste.jpeg'
import IconLadrao from './imgs/IconLadrao.png'
import IconMulher from './imgs/IconMulher.png'
import wppIcon from './imgs/wppIcon.png'
import email from './imgs/email.png'
import iconpagamento from './imgs/pagamentosIcon.png'
import gif1 from './imgs/infos.gif'
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
  const [showInfo4, setShowInfo4] = useState(false);
  const [showInfo5, setShowInfo5] = useState(false);
  const [showInfo6, setShowInfo6] = useState(false);
  const [showInfo7, setShowInfo7] = useState(false);
  const [showInfo8, setShowInfo8] = useState(false);
  const [showInfo9, setShowInfo9] = useState(false);
  const [showInfo10, setShowInfo10] = useState(false);
  const [showInfo11, setShowInfo11] = useState(false);
  const [showInfo12, setShowInfo12] = useState(false);

  const toggleInfo1 = () => {
    setShowInfo1(!showInfo1);
  };

  const toggleInfo2 = () => {
    setShowInfo2(!showInfo2);
  };

  const toggleInfo3 = () => {
    setShowInfo3(!showInfo3);
  };

  const toggleInfo4 = () => {
    setShowInfo4(!showInfo4);
  };

  const toggleInfo5 = () => {
    setShowInfo5(!showInfo5);
  };

  const toggleInfo6 = () => {
    setShowInfo6(!showInfo6);
  };

  const toggleInfo7 = () => {
    setShowInfo7(!showInfo7);
  };

  const toggleInfo8 = () => {
    setShowInfo8(!showInfo8);
  };

  const toggleInfo9 = () => {
    setShowInfo9(!showInfo9);
  };

  const toggleInfo10 = () => {
    setShowInfo10(!showInfo10);
  };

  const toggleInfo11 = () => {
    setShowInfo11(!showInfo11);
  };

  const toggleInfo12 = () => {
    setShowInfo12(!showInfo12);
  };


  return (
    <div className="App">
      {/* header */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='MenuDesktop'>
          <ul className='navbar'>
            <li><a href='#consultas'>Consultas</a></li>
            <li><a href='#depoimentos'>Depoimentos</a></li>
            <li><a href='#como-Funciona'>Como Funciona</a></li>
            <li><a href='#faq'>FAQ</a></li>
            <a className='btnheader' href='#Consultas'>CONTRATAR JÁ</a>
          </ul>
        </div>
        <div className="Menu" onClick={toggleMenu}>
          <img className='imgMenu' src={menuIcon} alt="Menu" />
        </div>
      </header>
      {isOpen && (
        <div className="Menu-options">
          <ul>
            <li className='Menu-options-li'><a href='#consultas'>Consultas</a></li>
            <li className='Menu-options-li'><a href='#vantagens'>Depoimentos</a></li>
            <li className='Menu-options-li'><a href='#Como-Funciona'>Como Funciona</a></li>
            <li className='Menu-options-li'><a href='#faq'>FAQ</a></li>
          </ul>
        </div>
      )}
      {/* home */}
      <div className='home'>
        <div className='mobilehome'>
          <h1 className='titulo'>Precisa Encontrar Uma Pessoa e Não Sabe Como?</h1>
          <span className='text-home'>Podemos te ajudar de forma rápida,
            segura e sem Burocracia.
            Somos especialistas em informações cadastrais.
            Receba a investigação direto no seu WhatApp!
          </span>
          <a className='btnContratar'>Quero Contratar</a>
          <img className='gif1' src={gif1} alt="gif" />
          
        </div>
        <div className='desktopHome'>
          <img className='gif1' src={gif1} alt="gif" />
          <h1 className='titulo'>Precisa Encontrar Uma Pessoa e Não Sabe Como?
            <span className='text-home'>Podemos te ajudar de forma rápida,
              segura e sem Burocracia.
              Somos especialistas em informações cadastrais.
              Receba a investigação direto no seu WhatApp!
            </span>
            <a className='btnContratar'>Quero Contratar</a>
          </h1>
        </div>
      </div>
      {/* Como Funciona */}
      <div id='como-Funciona' className='ComoFunciona'>
        <h5>3 Passos Simples</h5>
        <h2>Como Funciona?</h2>
        <span className='textFunciona'>Para realizar qualquer uma de nossas consultas é muito simples,
          rápido e sem burocracia! Siga os passos abaixo:
        </span>
        <img className='gif3' src={gif1} alt="gif" />
        {/* card drop */}
        <h3 onClick={toggleInfo1}>1 - Escolha sua Consulta
          <span>{showInfo1 ? '▲' : '▼'}
          </span>
        </h3>
        {showInfo1 && (
          <span className='descricao'>
            Escolha qual modalidade de Consulta (Consulta pelo Nome Completo ou CPF,
            Consulta N° Celular ou <span className='negrito'>Consulta Premium</span>)
          </span>
        )}

        <h3 onClick={toggleInfo2}>2 - Realize o Pagamento
          <span>{showInfo2 ? '▲' : '▼'}
          </span>
        </h3>
        {showInfo2 && (
          <span className='descricao'>
            Você poderá realizar o pagamento através de cartão, Pix ou Boleto. O
            pagamento é 100% Seguro. Utilizamos o Mercado Pago!
          </span>
        )}

        <h3 onClick={toggleInfo3}>3 - Receba seu Relatório!
          <span>{showInfo3 ? '▲' : '▼'}
          </span>
        </h3>
        {showInfo3 && (
          <span className='descricao'>
            <span className='negrito'>Após o pagamento entre em contato pelo WhatApp,</span>
            envie o comprovante de pagamento e informe os DADOS que deseja consultar.
            Vamos te enviar tudo por lá.
          </span>
        )}
        <a className='btnContratar'>Quero Consultar</a>
      </div>
      {/* consultas */}
      <div id='consultas' className='Consultas'>
        <h1>CONSULTAS</h1>
        <h5>Nossos Preços</h5>
        <h2>Contrate Agora e Tenha Acesso a Informações Confiáveis e Seguras:
          <br /><span className='desconto'>Aproveite! Consultas Até 48%OFF</span>
        </h2>
        <div className='card-desktop'>
          <div className='card card-celular'>
            <h2 className='titulo'>Pelo nome ou CPF</h2>
            <span className='descricao-card'>A consulta é feita pelo Nome Completo ou CPF e vem
              com as seguintes informações:
              <p>de R$ 167,80</p>
              <div class="price priceD">
                <span class="currency">R$</span>
                <span class="large-number">85</span>
                <span class="small-number">,80</span>
              </div>
            </span>
            <ul className='info-list info-listD'>
              <li>
                <img src={confirme} alt='Confirme' />
                Nome Completo
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Data de Nascimento
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Numero CPF
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Nome Completo da Mãe
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Telefone(s) Celular e Fixo
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Endereço(s)
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Faixa de Renda
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                E-mail(s) da Pessoa
              </li>
            </ul>
            {/* TROCAR LINK */}
            <a className='btnContrate btnD1' href='https://www.mercadopago.com.br/checkout/v1/payment/redirect/97210bc3-3e87-4521-8fee-5b77bbad0669/payment-option-form/?router-request-id=c01680aa-682c-4646-88b8-005377a66349&preference-id=1033283793-e63e934b-19a5-4757-9124-a6e6667c8921&source=link&p=2a982f7c4fa9a949d95d3cba4aa03778#/'>
              CONTRATE JÁ
            </a>
            <span className='textbtn'>*Direito a 1 consulta</span>
          </div>
          {/* card info 2 */}
          <div className='card card-celular'>
            <h2 className='titulo'>Pelo N° Celular</h2>
            <span className='descricao-card'>Através do Número do Telefone, levantamos
              todas as informações do Titular da Linha
              <p>de R$ 197,90</p>
              <div class="price priceD">
                <span class="currency currency-celular">R$</span>
                <span class="large-number">127</span>
                <span class="small-number">,80</span>
              </div>
            </span>
            <ul className='info-list info-listD'>
              <li>
                <img src={confirme} alt='Confirme' />
                Nome Completo
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Data de Nascimento
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Numero CPF
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Nome Completo da Mãe
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Telefone(s) Celular e Fixo
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Endereço(s)
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Faixa de Renda
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                E-mail(s) da Pessoa
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Escolaridade e Profissão
              </li>
            </ul>
            {/* TROCAR LINK */}
            <a className=' btnContrate-celular btnD' href='https://www.mercadopago.com.br/checkout/v1/payment/redirect/97210bc3-3e87-4521-8fee-5b77bbad0669/payment-option-form/?router-request-id=c01680aa-682c-4646-88b8-005377a66349&preference-id=1033283793-e63e934b-19a5-4757-9124-a6e6667c8921&source=link&p=2a982f7c4fa9a949d95d3cba4aa03778#/'>
              CONTRATE JÁ
            </a>
            <span className='textbtn'>*Direito a 1 consulta</span>
          </div>
          {/* card info 3 */}
          <div className='card card-premium'>
            <h2 className='titulo'>Consulta Premium</h2>
            <span className='descricao-premium'>Informações de até 5 bancos de dados diferentes. É a Busca
              mais completa do mercado! Pode ser feita pelo N° Celular ou CPF ou Nome Completo.
              <p>de R$ 347,80</p>
              <div class="price">
                <span class="currency currency-celular">R$</span>
                <span class="large-number">197</span>
                <span class="small-number">,80</span>
              </div>
            </span>
            <ul className='info-list info-list-premium'>
              <li>
                <img src={confirme} alt='Confirme' />
                Nome Completo
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Data de Nascimento
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Numero CPF e RG
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Cidade de Nascimento
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Nome Completo da Mãe e Pai
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                E-mail(s) da Pessoa
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Mais Telefone(s) Celular e Fixo
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Todos Endereços
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Situaçao da CNH
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Veiculos/Placa/Modelo
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Parentes Próximos(Nome e CPF)
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Score e Dívidas
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Grau de Escolaridade
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Faixa de Renda/Profissão
              </li>
              <li>
                <img src={confirme} alt='Confirme' />
                Participação em Empresa (CNPJ)
              </li>
            </ul>
            {/* TROCAR LINK */}
            <a className='btnContrate-premium' href='https://www.mercadopago.com.br/checkout/v1/payment/redirect/97210bc3-3e87-4521-8fee-5b77bbad0669/payment-option-form/?router-request-id=c01680aa-682c-4646-88b8-005377a66349&preference-id=1033283793-e63e934b-19a5-4757-9124-a6e6667c8921&source=link&p=2a982f7c4fa9a949d95d3cba4aa03778#/'>
              CONTRATE JÁ
            </a>
            <span className='textbtn'>*Direito a 1 consulta</span>
          </div>
        </div>


      </div>
      {/* Vantagens */}
      <div id='Vantagens' className='vantagens'>
        <h1 className='titulo-vantagens'>VANTAGENS</h1>
        <h5>Ajudamos Você a</h5>
        <h3 className='sub-titulo'>Resolver os Seus Problemas</h3>
        <span className='text-vantagens'>Aqui você encontra formas de resolver os seus problemas através da
          informação. Ajudamos pessoas a encontrar dados na internet de forma segura
          e prática.
        </span>
        <div className='CardsV-desktop'>
          <div className='card-info'>
            <img src={telefone} alt='icon celular' />
            <h3>Descubra o Nome pelo Número Telefone</h3>
            <span>
              Através da consulta básica pelo Número do Celular já é possível
              saber o nome completo do titular e muito mais.
            </span>
            <a href='#consultas'>Contratar Agora</a>
          </div>
          <div className='card-info'>
            <img src={user} alt='icon user' />
            <h3>Consulta por CPF pelo Nome</h3>
            <span>
              Através do nome completo vamos descobrir o CPF, endereços e muito mais.
            </span>
            <a href='#consultas'>Contratar Agora</a>
          </div>
          <div className='card-info'>
            <img src={logopix} alt='icon pix' />
            <h3>Consulta pela chave PIX</h3>
            <span>
              Descubra pela chave PIX todos os Dados do golpista.
            </span>
            <a href='#consultas'>Contratar Agora</a>
          </div>
          <div className='card-info'>
            <img src={cell} alt='icon celular' />
            <h3>Titular do N° Celular</h3>
            <span>
              Descubra o dono do número de celular em minutos.
            </span>
            <a href='#consultas'>Contratar Agora</a>
          </div>
          <div className='card-info'>
            <img src={pessoas} alt='icon pessoas' />
            <h3>Busca Profissional de Pessoas</h3>
            <span>
              Encontre pessoas pelo nome completo, CPF ou número de celular.
            </span>
            <a href='#consultas'>Contratar Agora</a>
          </div>
          <div className='card-info'>
            <img src={cadeado} alt='icon cadeado' />
            <h3>100% Confiavel e Seguro</h3>
            <span>
              Atuamos de forma regulamentada previstas na Lei 13.432/17
            </span>
            <a href='#consultas'>Contratar Agora</a>
          </div>
        </div>
      </div>
      {/* depoimentos */}
      <div id='depoimentos' className='Depoimentos'>
        <h1 className='titulo-depoimentos'>DEPOIMENTOS</h1>
        <h5>O Que estão Falando</h5>
        <h3 className='sub-titulo'>Depoimentos de Alguns Clientes</h3>
        <div className='CardsD-desktop'>
          <img src={depoimentoteste} />
          <img src={depoimentoteste} />
          <img src={depoimentoteste} />
          <img src={depoimentoteste} />
          <img src={depoimentoteste} />
        </div>
        <div className='card-dados'>
          <img src={IconLadrao} />
          <h2>16M+</h2>
          <h3>Brasileiros Lesados</h3>
          <span>O número representa aproximadamente 16,7 milhões de brasileiros lesados
            por golpes virtuais e aponta um crescimento de 28% em relação á pesquisa
            reslizada em 2019
          </span>
          <img src={IconMulher} />
          <h2>51%</h2>
          <h3>São Mulheres</h3>
          <ul>
            <li>● As Mulheres são a maioria das vítimas de Golpe (51%) é Mulherer;</li>
            <li>● 49% são homens;</li>
            <li>● 56% pertencem á classe C; e</li>
            <li>● 44% na classe A/B.</li>
          </ul>
          <h3 className='titulo-barstatus'>Localizar Pessoas</h3>
          <div class="progress-bar">
            <div class="progress">85%</div>
          </div>
          <h3 className='titulo-barstatus'>Localizar Devedores</h3>
          <div class="progress-bar">
            <div class="progress1">70%</div>
          </div>
          <h3 className='titulo-barstatus'>Localizar Golpistas</h3>
          <div class="progress-bar">
            <div class="progress2">90%</div>
          </div>
          <h3 className='titulo-barstatus'>Levantamento de Informações</h3>
          <div class="progress-bar space">
            <div class="progress3">95%</div>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div id='faq' className='FAQ'>
        <h1 className='titulo-FAQ'>FAQ</h1>
        <h5>Ajuda</h5>
        <h3 className='sub-titulo'>Perguntas e Respostas</h3>
        <span className='text-faq'>Encontre aqui as perguntas e
          respostas que necessita.
        </span>
        <div className='duvidas'>
          <h3>INVESTIGAÇÃO</h3>
          <h4 onClick={toggleInfo4}>Leva quanto tempo para entregar a consulta?
            <span>{showInfo4 ? '▲' : '▼'}
            </span>
          </h4>
          {showInfo4 && (
            <span className='descricao'>
              Pagamento pelo Cartão ou PIX enviamos em até 2horas. Boleto leva
              24 horas após a confirmação do pagamento.</span>
          )}
          <h4 onClick={toggleInfo5}>Como é enviada a consulta?
            <span>{showInfo5 ? '▲' : '▼'}
            </span>
          </h4>
          {showInfo5 && (
            <span className='descricao'>
              Enviamos um Arqquivo PDF com as informações pelo WhatsApp ou E-mail após o pagamento.
            </span>
          )}
          <h4 onClick={toggleInfo6}>Qual é a garantia da consulta?
            <span>{showInfo6 ? '▲' : '▼'}
            </span>
          </h4>
          {showInfo6 && (
            <span className='descricao'>
              Trabalhamos com diversos bancos de dados privados e públicos os dados são 100% integros.</span>
          )}
          <h4 onClick={toggleInfo7}>Qual a garantia que tenho do sigilo?
            <span>{showInfo7 ? '▲' : '▼'}
            </span>
          </h4>
          {showInfo7 && (
            <span className='descricao'>
              Não se preocupe quanto a isto uma das diretrizes da profissão de detetive profissional é o sigilo.
              Trabalhamos sobre sigilo absoluto e ética rigorosa.</span>
          )}
          <h4 onClick={toggleInfo8}>Modelo da Consulta Básica
            <span>{showInfo8 ? '▲' : '▼'}
            </span>
          </h4>
          {showInfo8 && (
            <span className='descricao'>
              *COLOCAR IMG DE EXEMPLO *</span>
          )}
          <h3>PAGAMENTO</h3>
          <h4 onClick={toggleInfo9}>Modelo da Consulta Básica
            <span>{showInfo9 ? '▲' : '▼'}
            </span>
          </h4>
          {showInfo9 && (
            <span className='descricao'>
              Sim é 100% seguro, usamos o <span className='negrito'>MERCADO PAGO</span> como sistema de pagamento</span>
          )}
          <h4 onClick={toggleInfo10}>Modelo da Consulta Básica
            <span>{showInfo10 ? '▲' : '▼'}
            </span>
          </h4>
          {showInfo10 && (
            <span className='descricao'>
              Cartão de crédito, PIX, Boleto e pagamento em lotéricas
              <span className='negrito'>(MERCADO PAGO)</span></span>
          )}
          <h3>LGPD</h3>
          <h4 onClick={toggleInfo11}>Lei Geral de Proteção de Dados Pessoais
            <span>{showInfo11 ? '▲' : '▼'}
            </span>
          </h4>
          {showInfo11 && (
            <span className='descricao'>
              A investigação é de uso exclusivo para a concessão de crédito, realização de venda a prazo ou quaisquer outras transações comerciais e empresariais que impliquem risco financeiro.
              <br /><br />
              <span className='negrito'>Lei Geral de Proteção de Dados</span><br />A LGPD, Lei Geral de Proteção de Dados, é a legislação brasileira que regula a coleta, o armazenamento, o tratamento e o compartilhamento de dados pessoais. Ela foi criada para garantir mais transparência, privacidade e segurança aos titulares dos dados, estabelecendo regras claras sobre como as empresas devem lidar com essas informações.
              <br /><br /><span className='negrito'>Hipóteses De Tratamento</span><br />
              <ul className='listalgpd'>
                <li>● Proteção ao crédito;</li>
                <li>● Legítimo interesse;</li>
                <li>● Consentimento;</li>
                <li>● Execução de políticas públicas;</li>
                <li>● Cumprimento de obrigação legal ou regulatória do controlador;</li>
                <li>● Tutela da saúde</li>
                <li>● Estudos por órgãos de pesquisa;</li>
                <li>● Processo judicial, administrativo ou arbitral;</li>
                <li>● Proteção da vida;</li>
              </ul>
            </span>
          )}
          <h4 onClick={toggleInfo12}>O serviço de Detetive é legalizado?
            <span>{showInfo12 ? '▲' : '▼'}
            </span>
          </h4>
          {showInfo12 && (
            <span className='descricao'>
              Sim, o Detetive Particular hoje atua de forma regulamentada prevista na Lei 13.432/17 de 12 de abril de 2017. Contamos com os Melhores Detetives de Informações Cadastrais 100% Certificados.</span>
          )}
        </div>
        <div className='contrate'>
          <h5>100% Sigiloso e Seguro</h5>
          <span>
            Descubra o Dono do Número de Celular em Até 40 Minutos.
          </span>
          <a href='#'>CONTRATE AGORA</a>
        </div>

      </div>
      {/* contatos */}
      <div className='contatos'>
        <img className='logocontato' src={logo} alt='logo' />
        <a className='wpp' href='#'><img className='wppimg' src={wppIcon} />WhatApp Oficial</a>
        <span className='email'><img className='emailimg' src={email} />Detetive@gmail.com</span>
        {/* Mudar links ou tirar indice */}
        <h3>Índice do Site</h3>
        <a href='#'>Vantagens</a>
        <a href='#'>Preço</a>
        <a href='#'>Depoimentos</a>
        <a href='#'>FAQ</a>
        <a href='#'>Blog</a>
        <a href='#'>Contato</a>
        <h3>Horários de Atendimento</h3>
        <span>Todos os dias: das 8:30 ás 22h00 (Horário de Brasília)</span>
        <h3>Formas de Pagamento</h3>
        <img className='pagamentoicon' src={iconpagamento} />
      </div>
      <div className='contatosD'>
        <div className='contato'>
          <img className='logocontato' src={logo} alt='logo' />
          <div className='containerC'><a className='wpp' href='#'><img className='wppimg' src={wppIcon} />WhatApp Oficial</a>
            <span className='email'><img className='emailimg' src={email} />Detetive@gmail.com</span>
          </div>
        </div>
        {/* Mudar links ou tirar indice */}
        <div className='container'>
          <div className='textocontatosD'>
            <h3>Índice do Site</h3>
            <a href='#'>Vantagens</a>
            <a href='#'>Preço</a>
            <a href='#'>Depoimentos</a>
            <a href='#'>FAQ</a>
            <a href='#'>Blog</a>
            <a href='#'>Contato</a>
          </div>
          <div className='horario'>
            <h3>Horários de Atendimento</h3>
            <span>Todos os dias: das 8:30 ás 22h00 (Horário de Brasília)</span>
          </div>
          <div className='pagamento'>
            <h3>Formas de Pagamento</h3>
            <img className='pagamentoicon' src={iconpagamento} />
          </div>
        </div>
      </div>
      <footer className='footer'>
        <p>Copyright &copy; Detetive Virtual 2024. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}

export default App;
