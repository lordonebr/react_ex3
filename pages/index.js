import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import RedditComponent from '../components/redditComponent'

const Home = () => (
  <div>
    <Head>
      <title>Exercício 3 de REACT</title>
    </Head>

    <div className="title">
      <h1>Exercício 3 de REACT</h1>
      <h4>Pontifícia Universidade Católica de Minas Gerais</h4>
      <h5><span className="tagText">Curso:</span> Desenvolvimento web Full Stack</h5>
      <h5><span className="tagText">Disciplina:</span> Frameworks front end: React</h5>
      <h5><span className="tagText">Professor:</span> Samuel Martins</h5>
      <h5><span className="tagText">Aluno:</span> André Guilherme de Almeida Santos (<a href="https://github.com/lordonebr" rel="noopener noreferrer" target="_blank">Github</a>)</h5>
    </div>
    
    <div className="divHome">
      <p>Chamada direta da requisição na API(JSON): <Link href="api/discussions/javascript"> api/discussions/javascript</Link></p>
      <p>Link para a rota que chama a API procurando o termo javascript (obs: termo pode ser modificado na url): <Link href="reddit/javascript"> /reddit/javascript</Link></p>
    </div>

    <div className="divHome">
      <h4>Utilização de um componente de pesquisa que faz chamadas a API</h4>
      <RedditComponent />
    </div>
    

    <style jsx>{`
    :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
        Helvetica, sans-serif;
    }
    .title {
      margin-left: 10px;
    }
    .tagText {
      text-decoration: underline;
    }
    .divHome {
      margin: 10px;
      padding: 0px 0px 0px 10px;
      border: 3px solid black;
    }
    `}</style>
  </div>
)

export default Home
