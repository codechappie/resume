import React, { Fragment } from 'react'
import styled from 'styled-components'

import NavBar from '../Components/NavBar'

import imgEmail from '../images/icons8_email.svg'
import imgFacebook from '../images/icons8_facebook.svg'
import imgGithub from '../images/icons8_github_filled.svg'
import imgInstagram from '../images/icons8_instagram.svg'
import imgLink from '../images/icons8_link_3.svg'
import imgWeb from '../images/icons8_internet.svg'
import imgLinkedin from '../images/icons8_linkedin.svg'
import imgTwiter from '../images/icons8_twitter.svg'
import imgYoutube from '../images/icons8_youtube_play.svg'
import { Link } from 'react-router-dom'

const Main = () => {

    const CoverPageStyled = styled.div`
        width: 100%;
        min-height: 30vh;
        height: 250px;
        background: #333;
        overflow: hidden;
        background-position: 0 0;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    const ImageCoverPageStyled = styled.img`
        width: 100%;
    `;
    const PersonData = styled.div`
        display: grid;
        grid-template-columns: 5fr 8fr;
        width: 90%;
        margin: auto;
        min-height: 70vh;
        gap: 20px;
        @media screen and (max-width: 990px){
            grid-template-columns: 1fr;
            width: 90%;
            margin: auto;
            margin-bottom: 30px;
        }
    `;
    const MainData = styled.div`
        width: 100%;
        padding: 0 20px;
        min-height: 200px;
        height: auto;
        /* display: flex;
        align-items: center;
        align-content: space-between; */
        display: grid;
        align-items: flex-start;
        justify-items: center;
        grid-template-rows: 130px auto;
        /* flex-direction: column; */
        background: white;
        position: relative;
        @media screen and (max-width: 425px){
            padding: 0 0;
        }
    `;
    const MainImageCard = styled.div`
        position: relative;
        top: -70px;
        display: grid;
        align-items: center;
        justify-items: center;
    `;
    const ResumeData = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `;
    const ImageProfile = styled.div`
        border: 4px solid #fff;
        width: 130px;
        height: 130px;
        overflow: hidden;
        box-shadow: inset 1px 20px #333;
        border-radius: 200px;
        background-size: cover;
    `;
    const ImageFromProfileImage = styled.img`
        width: 130px;
        height: 130px;
    `;
    const FullName = styled.h4`
        text-align: center;
        font-weight: 500;
        font-size: 1.3rem;
    `;
    const Occupation = styled.h5`
        text-align: center;
        font-weight: 300;
        font-size: 1.2rem;
    `;
    const ShortDescription = styled.p`
        text-align: center;
        font-weight: 300;
        width: 90%;
        font-size: 1.1rem;
        margin-top: 0rem;
    `;
    const SocialNetworkingSites = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 3rem 0 1rem 0;

        a{
            box-sizing: content-box;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            border: 1px solid #ddd;
            margin: 0 1rem;
            transition: background .4s ease-in-out;
        }
        a:hover{
            background: #ddd;
            transition: background .4s ease-in-out;
        }
        
        @media screen and (max-width: 768px){
            a{
                width: 50px;
                height: 50px;
                margin: 0 .5rem;
            }
        }
    `;
    const TitleResume = styled.h4`
        font-size: 1.2rem;
        font-weight: 400;
        color: #333;
        margin: 1.4rem 0 .8rem 0;
    `;
    const SkillStyled = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    `;
    const ItemSkill = styled.div`
        border: 1px solid #333;
        padding: 5px 10px;
        margin: .2rem .5rem;
        font-size: .9rem;
        border-radius: 30px;
    `;
    const GalleryStyled = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    `;
    const GalleryContainerStyled = styled.div`
        /* background: red; */
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        /* row-gap: 50px; */
        align-items: center;
        justify-items: center;
        width: 100%;
        height: auto;

        @media screen and (max-width: 1124px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 990px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 768px){
            grid-template-columns: repeat(1, 1fr);
        }

    `;
    const BoxProject = styled.div`
        box-shadow: 0 0 2px #ddd;
        width: 100%;
        height: auto;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        overflow: hidden;
        border-radius: 8px;
        transition: all .3s ease-in-out;
        position: relative;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
        }
        .overlay-box{
            position: absolute;
            width: 100%;
            height:100%;
            box-shadow: none;
            top: 0;
            display: block;
            z-index: 98;
            transition: box-shadow .6s ease-in-out;
        }
        :hover .overlay-box{
            box-shadow: inset 2px 2px 90px rgba(0,0,0,0.2);
            transition: box-shadow .4s ease-in-out;
        }
        .openLink{
            bottom: 10px;
            z-index: 99;
            position: absolute;
            font-size: 1.1rem;
            background: rgba(0,0,0,0.8);
            color: #fff;
            padding: 8px 20px;
            text-decoration: none;
            border-radius: 6px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 300;
        }
        .openLink img{
            margin-right: 8px;
            width: 16px;
            height: 16px;
        }
    `;
    return (
        <Fragment>
            {/* <NavBar /> */}
            <CoverPageStyled>
                <ImageCoverPageStyled src="https://miro.medium.com/max/3840/1*xMuIOwjliGUPjkzukeWKfw.jpeg" alt="background image" />
            </CoverPageStyled>
            <PersonData>
                <MainData>
                    <MainImageCard>
                        <ImageProfile>
                            <ImageFromProfileImage src="https://i.redd.it/6onq25y0sh311.jpg" alt="Imagen de perfil" />
                        </ImageProfile>
                        <FullName>Daniel Rodriguez Moriano</FullName>
                        <Occupation>Desarrollador Frontend</Occupation>
                    </MainImageCard>
                    <ResumeData>
                        <TitleResume>Resumen</TitleResume>
                        <ShortDescription>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam consectetur quis voluptas ducimus et facilis magni voluptatem quae! Nulla, ab!
                    </ShortDescription>
                        <TitleResume>Mis principales habilidades</TitleResume>
                        <SkillStyled>
                            <ItemSkill>Puntual</ItemSkill><ItemSkill>Autodidacta</ItemSkill>
                            <ItemSkill>Leal</ItemSkill><ItemSkill>Proactivo</ItemSkill>
                        </SkillStyled>
                        <TitleResume>Tecnoligas que suelo usar</TitleResume>
                        <SkillStyled>
                            <ItemSkill>React Js</ItemSkill><ItemSkill>Photoshop</ItemSkill>
                            <ItemSkill>Illustrator</ItemSkill><ItemSkill>HTML5</ItemSkill>
                            <ItemSkill>Vue Js</ItemSkill><ItemSkill>Photoshop</ItemSkill>
                            <ItemSkill>HTML5</ItemSkill>
                        </SkillStyled>
                        <SocialNetworkingSites>
                            <Link href="#">
                                <img src={imgGithub} alt="" />
                            </Link>
                            <Link href="#">
                                <img src={imgLinkedin} alt="" />
                            </Link>
                            <Link href="#">
                                <img src={imgWeb} alt="" />
                            </Link>
                            <Link href="#">
                                <img src={imgEmail} alt="" />
                            </Link>
                        </SocialNetworkingSites>
                    </ResumeData>
                </MainData>
                <GalleryStyled>
                    <TitleResume>Mis proyectos</TitleResume>
                    <GalleryContainerStyled>
                        <BoxProject>
                            <div className="overlay-box"></div>
                            <img src="https://cdn.dribbble.com/users/2019344/screenshots/6085297/01-a.png" alt="" />
                            <a className="openLink" href="#"><img src={imgLink} alt=""/>Visitar</a>
                        </BoxProject>
                        <BoxProject>
                            <div className="overlay-box"></div>
                            <img src="https://cdn.dribbble.com/users/2019344/screenshots/6085297/01-a.png" alt="" />
                            <a className="openLink" href="#"><img src={imgLink} alt=""/>Visitar</a>
                        </BoxProject>
                        <BoxProject>
                            <div className="overlay-box"></div>
                            <img src="https://cdn.dribbble.com/users/2019344/screenshots/6085297/01-a.png" alt="" />
                            <a className="openLink" href="#"><img src={imgLink} alt=""/>Visitar</a>
                        </BoxProject>
                        <BoxProject>
                            <div className="overlay-box"></div>
                            <img src="https://cdn.dribbble.com/users/2019344/screenshots/6085297/01-a.png" alt="" />
                            <a className="openLink" href="#"><img src={imgLink} alt=""/>Visitar</a>
                        </BoxProject>
                        <BoxProject>
                            <div className="overlay-box"></div>
                            <img src="https://cdn.dribbble.com/users/2019344/screenshots/6085297/01-a.png" alt="" />
                            <a className="openLink" href="#"><img src={imgLink} alt=""/>Visitar</a>
                        </BoxProject>
                        <BoxProject>
                            <div className="overlay-box"></div>
                            <img src="https://cdn.dribbble.com/users/5089267/screenshots/12595315/media/8cdf1405f75f15d9ab655366004e043e.png" alt="" />
                            <a className="openLink" href="#"><img src={imgLink} alt=""/>Visitar</a>
                        </BoxProject>
                    </GalleryContainerStyled>
                </GalleryStyled>
            </PersonData>
        </Fragment>
    )
}

export default Main
