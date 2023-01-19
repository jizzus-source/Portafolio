
import Image from 'next/image'

import styled from "styled-components";
import { SIZES } from '@/constants/constants';
import TextComponent, { TextType } from '@/constants/textcomponent';
import { NextPage } from 'next';
import { LinearProgress } from '@mui/material';

type Props = {};


const MainScreen = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items: center;
background-color:	#F0F0F0;

`;
const MainBody = styled.div`
width:80%;
display:flex;
flex-direction:row;
margin-top:3rem;
gap:2rem;

`;
const MenuContainer = styled.div`
background-color:#1732b5;
width:20%;
border-radius: ${SIZES.ONE};
max-height:55vh;
position:sticky;
top:80px;
`;
const PortfolioContainer = styled.div`
display:flex;
flex-direction:column;
gap:4rem;
width:70%;
scroll-behavior: smooth !important;
`;
const MenuContent = styled.div`

padding:20px 10px 10px 20px;
display:flex;
flex-direction:column;
width:100%;
`;
const ListContainer = styled.div`
margin-top:30px;
`;
const ListContent = styled.div`
display:flex;
flex-direction:row;
width:100%;
gap:10px;
cursor:pointer;
`;
const PortfolioCardBlue = styled.div`
background-color:#1732b5;
display:flex;
border-radius: ${SIZES.ONE};
height:70vh;
align-items: center;
justify-content: center;
flex-direction:column;
box-shadow: 0px 0px 30px 0px #8c8c8c;
`;
const PortfolioContent = styled.div`
width:80%;
`;
const PortfolioWhiteContent = styled.div`
display:flex;
flex-direction:row;
justify-content: center;
align-items: center;
padding: 4rem 0 0 10px;
gap:2rem;
`;
const PortfolioCardWhite = styled.div`
display:flex;
border-radius: ${SIZES.ONE};
height:70vh;
flex-direction:column;
background-color:white;
box-shadow: 0px 0px 30px 0px #8c8c8c;
`;
const PortfolioTitle = styled.div`
padding: 2rem 0 0 3rem ;
`;
const TitleUnderlined = styled.section`
content: "";
background: #FF5959;
border-radius: 25px;
display: block;
height: 5px;
width: 30px;
`;
const AboutContent = styled.div`
display:flex;
flex-direction:column;
width:80%;
`;
const AboutData = styled.div`
display:grid;
margin-top:10px;
grid-template-columns: 32ch 32ch;
justify-content: space-between;
justify-items: stretch;
`;
const BottonContainer = styled.div`
margin-top:40px;
display:flex;
flex-direction:row;
width:100%;
justify-content: center;
align-items: center;
gap:20px;
`;
const BottonBlue = styled.div`
width:15%;
height:30px;
background-color:#3366ff;
cursor:pointer;
display:flex;
justify-content: center;
align-items: center;
border-radius: ${SIZES.EIGHT};
`;
const BottonRed = styled.div`
background-color:#ff4d4d;
width:10%;
height:30px;
cursor:pointer;
display:flex;
justify-content: center;
align-items: center;
border-radius: ${SIZES.EIGHT};
`;
const SkillData = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
`;
const SkillContent = styled.div`
margin-top:1rem;
display:flex;
flex-direction:column;
width:80%;
`

const Home: NextPage<Props> = () => {
  return (
    <MainScreen>
      <MainBody>
        <MenuContainer>
          <MenuContent>
            <Image
            src="/icons/profile.svg"
            height={40}
            width={40} 
            alt="Your Name"
            />
            <TextComponent textType={TextType.HEADING_THREE} alignment="left" color='white'>
            Jesus Pareja
            </TextComponent>
            <TextComponent textType={TextType.BODY_MEDIUM} alignment="left" color='white'>
            Web Developer
            </TextComponent>
            <ListContainer>
              <ListContent>
              <Image
                src="/icons/home.svg"
                height={20}
                width={20} 
                alt="Your Name"
                />
                <a href='#home'>
                <TextComponent textType={TextType.HEADING_FIVE} alignment="left" color='white'>
                Home
              </TextComponent>
                </a>
              </ListContent>
              <ListContent>
              <Image
                src="/icons/profile.svg"
                height={20}
                width={20} 
                alt="Your Name"
                />
              <a href='#about'>
              <TextComponent textType={TextType.HEADING_FIVE} alignment="left" color='white'>
                About
              </TextComponent>
              </a>
              </ListContent>
              <ListContent>
              <Image
                src="/icons/cap.svg"
                height={20}
                width={20} 
                alt="Your Name"
                />
              <TextComponent textType={TextType.HEADING_FIVE} alignment="left" color='white'>
                Resume
              </TextComponent>
              </ListContent>
              <ListContent>
              <Image
                src="/icons/work.svg"
                height={20}
                width={20} 
                alt="Your Name"
                />
              <TextComponent textType={TextType.HEADING_FIVE} alignment="left" color='white'>
                Works
              </TextComponent>
              </ListContent>
              <ListContent>
              <Image
                src="/icons/phone.svg"
                height={20}
                width={20} 
                alt="Your Name"
                />
              <TextComponent textType={TextType.HEADING_FIVE} alignment="left" color='white'>
                Contact
              </TextComponent>
              </ListContent>
            </ListContainer>
          </MenuContent>
        </MenuContainer>


        <PortfolioContainer id='home'>
          <PortfolioCardBlue >
            <PortfolioContent>
            <TextComponent textType={TextType.HEADING_ONE} alignment="left" color='white'>
                I´m Jesus Pareja
          </TextComponent>
          <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='white'>
          He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.
          </TextComponent>
            </PortfolioContent>
          </PortfolioCardBlue>
          <PortfolioCardWhite id='about'>
            <PortfolioTitle>
              <TextComponent  textType={TextType.HEADING_TWO} alignment="left" color='black'>
                About me
              </TextComponent>
              <TitleUnderlined/>
            </PortfolioTitle>
            <PortfolioWhiteContent>
            <Image
            src="/icons/profile.svg"
            height={40}
            width={40} 
            alt="Your Name"
            />
            <AboutContent>
              <TextComponent  textType={TextType.HEADING_TWO} alignment="left" color='black' >
                Hello
              </TextComponent>
              <TextComponent  textType={TextType.BODY_MEDIUM} alignment="left" color='#606060'>
                I am Jesus Pareja a web developer from Barranquilla, Colombia. I have plenty experience in web site develop, design and constumization, also im good on wix and wordpress 
              </TextComponent>
              <AboutData>
              <TextComponent  textType={TextType.BODY_MEDIUM} alignment="left" color='#606060' display='flex' direction='row' gap='5px'>
                Name: <TextComponent textType={TextType.BODY_MEDIUM} alignment="left" color='black'> Jesus Pareja</TextComponent>
              </TextComponent>
              <TextComponent  textType={TextType.BODY_MEDIUM} alignment="left" color='#606060' display='flex' direction='row' gap='5px'>
                Birthday <TextComponent textType={TextType.BODY_MEDIUM} alignment="left" color='black'> 6 May, 2004</TextComponent>
              </TextComponent>
              <TextComponent  textType={TextType.BODY_MEDIUM} alignment="left" color='#606060' display='flex' direction='row' gap='5px'>
                 Location<TextComponent textType={TextType.BODY_MEDIUM} alignment="left" color='black'> Barranquilla, COL</TextComponent>
              </TextComponent>
              <TextComponent  textType={TextType.BODY_MEDIUM} alignment="left" color='#606060' display='flex' direction='row' gap='5px'>
                Email: <TextComponent textType={TextType.BODY_MEDIUM} alignment="left" color='black'> jesus06m@gmail.com</TextComponent>
              </TextComponent>
              
              </AboutData>

            </AboutContent>
            </PortfolioWhiteContent>
            <BottonContainer>
              <BottonBlue>
              <a href='../icons/cv.pdf' target="_blank" rel="noopener noreferrer" download={"cv.pdf"}>
              <TextComponent textType={TextType.BODY_MEDIUM} alignment="center" color='#d9d9d9'>
                Download CV
              </TextComponent>
              </a>
              </BottonBlue>
              <BottonRed>
                <a href='mailto:jesus06m@gmail.com'>
                <TextComponent textType={TextType.BODY_MEDIUM} alignment="center" color='#d9d9d9'>
                Hire me
              </TextComponent>
                </a>
              </BottonRed>
            </BottonContainer>
          </PortfolioCardWhite>



          <PortfolioCardWhite>
            <PortfolioTitle>
              <TextComponent  textType={TextType.HEADING_TWO} alignment="left" color='black'>
                My skills
              </TextComponent>
              <TitleUnderlined/>
            </PortfolioTitle>
            <PortfolioWhiteContent>
            <SkillContent>
              <TextComponent  textType={TextType.BODY_MEDIUM} alignment="left" color='#606060'>
                
I have plenty experience working with databases based on Node.JS and backend connections
              </TextComponent>
              
              <AboutData>
                  <SkillData>
                    <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#606060' display='flex' direction='row' content='space-between'>
                      HTML & CSS 
                      <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#b3b3b3'>90%</TextComponent>
                    </TextComponent>  
                    <LinearProgress variant='determinate' value={90} />
                  </SkillData>
                  <SkillData>
                    <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#606060' display='flex' direction='row' content='space-between'>
                      JavaScript
                      <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#b3b3b3'>80%</TextComponent>
                    </TextComponent>  
                    <LinearProgress variant='determinate' value={80} />
                  </SkillData>
                  <SkillData>
                    <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#606060' display='flex' direction='row' content='space-between'>
                      React.JS
                      <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#b3b3b3'>80%</TextComponent>
                    </TextComponent>  
                    <LinearProgress variant='determinate' value={80} />
                  </SkillData>
                  <SkillData>
                    <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#606060' display='flex' direction='row' content='space-between'>
                      Next.JS
                      <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#b3b3b3'>90%</TextComponent>
                      
                    </TextComponent>  
                    <LinearProgress variant='determinate' value={90} />
                    
                  </SkillData>
                  <SkillData>
                    <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#606060' display='flex' direction='row' content='space-between'>
                     Python
                      <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#b3b3b3'>40%</TextComponent>
                      
                    </TextComponent>  
                    <LinearProgress variant='determinate' value={40} />
                    
                  </SkillData>
                  <SkillData>
                    <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#606060' display='flex' direction='row' content='space-between'>
                      Node.JS
                      <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#b3b3b3'>55%</TextComponent>
                      
                    </TextComponent>  
                    <LinearProgress variant='determinate' value={55}/>
                    
                  </SkillData>
              </AboutData>
          
            </SkillContent>
            </PortfolioWhiteContent>
          </PortfolioCardWhite>
          
                    
        </PortfolioContainer>
      </MainBody>
    </MainScreen>
  )
}

export default Home;