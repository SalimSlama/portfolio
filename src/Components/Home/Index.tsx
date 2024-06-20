import {
  HomeSection,
  HomeContainer,
  HomeContent,
  HomeSocial,
  HomeImg,
  HomeData,
  HomeTitle,
  HomeSubtitle,
  HomeDescription,
  HomeButton
} from './Style';

import {ReactComponent as Img} from '../../Assets/Img/home_image.svg';

export default function Home() {
  return (
    <HomeSection id="home">
      <HomeContainer>
        <HomeContent>
          <HomeSocial>
            <a href="https://www.linkedin.com/in/mohamed-salim-slama-mouslisla/" target="_blank" rel="noreferrer">
              <i className="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://github.com/SalimSlama" target="_blank" rel="noreferrer">
              <i className="uil uil-github-alt"></i>
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <i className="uil uil-instagram"></i> 
            </a>
          </HomeSocial>
          <HomeImg>
            <Img/>
          </HomeImg>

          <HomeData>
            <HomeTitle>Olá, Yuri aqui!</HomeTitle>
            <HomeSubtitle>FullStack Developer</HomeSubtitle>
            <HomeDescription>
            Développeur Web passionné de technologie..
            </HomeDescription>
            <HomeButton href="#contact">
              Contact <i className="uil uil-message"/>
            </HomeButton>
          </HomeData>
        </HomeContent>
      </HomeContainer>
    </HomeSection>
  )
}