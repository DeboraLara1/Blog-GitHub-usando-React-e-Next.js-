import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import Footer from '../components/footer'

const SubTitle = styled.h2`
  background-color: var(--primary)
  color: white;
  display: inline-block;
  padding:5px
`

export default function Home(props) {
  console.log(props)
  return (
  <div>
    <header className="headerContainer">
      <img src={props.avatar_url} />
      <Link href="/sobre">
      <a>
        <h1>Teste Developer</h1>
      </a>
      </Link>
    </header>
    <section className="postContainer">
      <SubTitle>
        Posst
      </SubTitle>
      <article className="postContainer_post"> 
        <a href="/">Titilo do post</a>
        <p>Resumo do post</p>
      </article>
    </section>

    <section className="postContainer">
      <SubTitle>
        Repositorios Favoritos:
      </SubTitle>
      {
        props.repos.map((projetos) =>{
          return(
          <article
          key={projetos.repo} className="postContainer_post"> 
            <a href="/">{projetos.repo}</a>
            <p>{projetos.description}</p>
          </article>)
        })
      }
    </section>

    <Footer
        facebook="debora.beatriz.925"
        linkedin="deboralara"
        github="DeboraLara1"
      />
  </div>
  )
}
export async function getStaticProps(){
  // Pegando a img do meu github
  const githubResponse = await fetch('https://api.github.com/users/deboralara1')
  .then(res => res.json())
  // Pegando meu repositorios da api github
  const githubRespos = await fetch('https://gh-pinned-repos.now.sh/?username=deboralara1')
  .then(res => res.json())
  return{
    props:{
      avatar_url: githubResponse.avatar_url,
      repos: githubRespos
    }
  }
}