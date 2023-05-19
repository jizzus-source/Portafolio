
import Image from 'next/image'
import styled from "styled-components";
import { COLORS, SCREEN_SIZE_RANGES, SHADOWS, SIZES } from '@/constants/constants';
import TextComponent, { TextType } from '@/constants/textcomponent';
import { NextPage } from 'next';
import { LinearProgress } from '@mui/material';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';


type Props = {};


const MainScreen = styled.div`
width:100vw;
display:flex;
flex-direction: row;
align-items: flex-start;
background-color:	#F0F0F0;
@media${SCREEN_SIZE_RANGES.MOBILE},${SCREEN_SIZE_RANGES.TABLET}
{
  width:100vw;
  display:flex;
  flex-direction: column;
  align-items: center;
}
`;
const MainBody = styled.div`
@media${SCREEN_SIZE_RANGES.TABLET},${SCREEN_SIZE_RANGES.MOBILE}{
  display:flex;
  flex-direction:column;
  margin-top:3rem;
  gap:2rem;
  justify-content: space-around;
  align-items: center;
}
@media${SCREEN_SIZE_RANGES.LAPTOP_LARGE}, ${SCREEN_SIZE_RANGES.LAPTOP_MEDIUM}{ 
  width:80%;
  display:flex;
  flex-direction:column;
  margin-top:3rem;
  gap:2rem;
  justify-content: space-around;
  align-items: center;
}
`;
const MenuContainer = styled.div.attrs((props: { open: boolean }) => props)`
background-color:#1732b5;
max-height:65vh;
border-radius: ${SIZES.ONE};
top: ${SIZES.FIVE};
position:relative;
@media${SCREEN_SIZE_RANGES.MOBILE}{
  display:flex;
  width: 80%;
  justify-content: center;
  flex-direction:column;
}

@media${SCREEN_SIZE_RANGES.TABLET}{
  display:flex;
  width: 30%;
  position:relative;
  justify-content: center;
}
@media${SCREEN_SIZE_RANGES.LAPTOP_MEDIUM},
    ${SCREEN_SIZE_RANGES.LAPTOP_LARGE}{
  width:20%;
  justify-content: flex-start;
  position:sticky;
  top:50px;
  left:80px;
}
`;
const PortfolioContainer = styled.div`
@media${SCREEN_SIZE_RANGES.TABLET}, ${SCREEN_SIZE_RANGES.MOBILE}{
  display:flex;
  flex-direction:column;
  gap:4rem;
  position:relative;
  width:90vw;
};
@media${SCREEN_SIZE_RANGES.LAPTOP_LARGE},${SCREEN_SIZE_RANGES.LAPTOP_MEDIUM}{ 
  display:flex;
  flex-direction:column;
  gap:4rem;
  width:70%;
  position:relative;
};
`;
const MenuContent = styled.div`
display:flex;
flex-direction:column;
align-items: center;
@media${SCREEN_SIZE_RANGES.LAPTOP_MEDIUM},
    ${SCREEN_SIZE_RANGES.LAPTOP_LARGE}{
  padding:20px 10px 10px 20px;
  display:flex;
  flex-direction:column;
  width:100%;
  align-items: flex-start;
}
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
padding: 2rem 0 0 10px;
gap:2rem;

`;
const PortfolioWhiteContentWorks = styled.div`
display:flex;
flex-direction:row;
justify-content: center;
align-items: center;
@media ${SCREEN_SIZE_RANGES.MOBILE}{
  overflow:scroll;
  align-items: center
}

`;
const PortfolioCardWhite = styled.div`
display:flex;
border-radius: ${SIZES.ONE};
height:78vh;
flex-direction:column;
background-color:white;
box-shadow: 0px 0px 30px 0px #8c8c8c;
@media${SCREEN_SIZE_RANGES.MOBILE}{
  height:85vh;
  
}
`;
const PortfolioTitle = styled.div`
padding: 2rem 0 0 3rem ;
@media${SCREEN_SIZE_RANGES.MOBILE}{
  position:center;
}
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
@media${SCREEN_SIZE_RANGES.MOBILE}{
  display:flex;
  flex-direction:column;
}
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
width:13vw;
height:30px;
background-color:#3366ff;
cursor:pointer;
display:flex;
justify-content: center;
align-items: center;
border-radius: ${SIZES.EIGHT};
@media ${SCREEN_SIZE_RANGES.MOBILE}{
  width:30vw;
}
`;
const BottonRed = styled.div`
background-color:#ff4d4d;
width:10vw;
height:30px;
cursor:pointer;
display:flex;
justify-content: center;
align-items: center;
border-radius: ${SIZES.EIGHT};
@media ${SCREEN_SIZE_RANGES.MOBILE}{
  width:30vw;
}
`;
const SkillData = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
`;
const SkillContent = styled.div`
margin-top:0rem;
display:flex;
flex-direction:column;
width:80%;
`;
const WorksContainer = styled.div`
display:flex;
flex-direction:row;
justify-content: center;
flex-wrap: wrap;
gap:10px;
@media ${SCREEN_SIZE_RANGES.MOBILE}{
  display:flex;
  flex-direction:column;
  align-items: center;
  height:100%;
  width:100vw;
} 
`;
const WorksCard = styled.div`
display:flex;
flex-direction:column;
width:40%;
align-items: center;
cursor:pointer;
box-shadow: 2px 2px 4px rgba(0,0,0,.25);
`;
const SocialIcons = styled.div`
display:flex;
flex-direction:row;
justify-content: space-evenly;
cursor:pointer;
height:30px;
`;


const Home: NextPage<Props> = () => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm("service_yj2ghpd", "template_w2htxfs", e.currentTarget, "NAViQI5_yGCKMyR2Z")
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title:" Ooops, something went wrong",
          text: error.text,
        })
      });
      e.currentTarget.reset()
  };
  return (
    <MainScreen>
      <MenuContainer>
          <MenuContent>
            <Image
            src="/icons/profile.svg"
            height={40}
            width={40} 
            alt="Your Name"
            />

            <TextComponent textType={TextType.HEADING_THREE}  color='white'>
            Jesus Pareja
            </TextComponent>
            <TextComponent textType={TextType.BODY_MEDIUM}  color='white'>
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
                <TextComponent textType={TextType.HEADING_FIVE}  color='white'>
                Home
              </TextComponent>
                </a>
              </ListContent>
              <ListContent>
              <Image
                src="/icons/about.svg"
                height={20}
                width={20} 
                alt="Your Name"
                />
              <a href='#about'>
              <TextComponent textType={TextType.HEADING_FIVE}  color='white'>
                About
              </TextComponent>
              </a>
              </ListContent>
              <ListContent>
              <Image
                src="/icons/skills.svg"
                height={20}
                width={20} 
                alt="Your Name"
                />
              <a href='#skills'>
              <TextComponent textType={TextType.HEADING_FIVE}  color='white'>
                Skills
              </TextComponent>
              </a>
              </ListContent>
              <ListContent>
              <Image
                src="/icons/work.svg"
                height={20}
                width={20} 
                alt="Your Name"
                />
              <a href='#works'>
              <TextComponent textType={TextType.HEADING_FIVE}  color='white'>
                Works
              </TextComponent>
              </a>
              </ListContent>
              <ListContent>
              <Image
                src="/icons/phone.svg"
                height={20}
                width={20} 
                alt="Your Name"
                />
                <a href='#contact'>
              <TextComponent textType={TextType.HEADING_FIVE}  color='white'>
                Contact
              </TextComponent>
              </a>
              </ListContent>
            </ListContainer>
          </MenuContent>
          <SocialIcons>
          <Image
           src="/icons/github.svg"
           height={20}
           width={20}
           alt="Your Name"
           onClick={()=>
            window.open(
              "https://github.com/jizzus-source",
              "_blank"
            )
            }
          />
          <Image
           src="/icons/linkedin.svg"
           height={20}
           width={20}
           alt="Your Name"
           onClick={()=>
            window.open(
              "https://www.linkedin.com/in/jesus-pareja-50baa823b/",
              "_blank"
            )
            }
          /> 
          <Image
          src="/icons/whatsapp.svg"
          height={20}
          width={20}
          alt="Your Name"
          onClick={()=>
            window.open(
              "https://api.whatsapp.com/send?phone=%2B573006750561&text=",
              "_blank"
            )
            }
         />
          </SocialIcons>
        </MenuContainer>
      <MainBody>
        


        <PortfolioContainer id='home'>
          <PortfolioCardBlue >
            <PortfolioContent>
            <TextComponent textType={TextType.HEADING_ONE} alignment="left" color='white'>
            Hello 
          </TextComponent>
          <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='white'>
          I´m Jesus Pareja, a independent web developer from Barranquilla, Colombia
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
                
              </TextComponent>
              <TextComponent  textType={TextType.BODY_MEDIUM} alignment="left" color='#606060'>
                Solution-driven Front-end developer adept at contributing to highly
collaborative work environment, finding solutions and determining
customer satisfaction. Proven experience developing consumer-focused
websites using HTML, CSS, JavaScript,React, Next . Built products for
desktop and mobile app users over 2+ years, meeting highest standards
for web design, user experience, best practices and speed. Designed and
developed web applications across multiple APIs, third-party integrations
and databases.
 
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
              <a href='../icons/Jesus-Pareja-cv.pdf' target="_blank" rel="noopener noreferrer" download={"cv.pdf"}>
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



          <PortfolioCardWhite id='skills'>
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
                    <TextComponent textType={TextType.BODY_SMALL}color='#606060' >
                      
Thorough knowledge of HTML implementation in different work areas and full understanding of CSS usage in required areas
                    </TextComponent>
                  </SkillData>
                  <SkillData>
                    <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#606060' display='flex' direction='row' content='space-between'>
                      JavaScript
                      <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#b3b3b3'>80%</TextComponent>
                    </TextComponent>  
                    <LinearProgress variant='determinate' value={80} />
                    Practical use of the tools in JavaScript complemented with the ability to combine it with different frameworks
                  </SkillData>
                  <SkillData>
                    <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#606060' display='flex' direction='row' content='space-between'>
                      React.JS
                      <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#b3b3b3'>80%</TextComponent>
                    </TextComponent>  
                    <LinearProgress variant='determinate' value={80} />
                    <TextComponent textType={TextType.BODY_SMALL}color='#606060' >
                      
                      Complete knowledge of the use of React and its implementation in projects in a versatile way making use of its tools
                      </TextComponent>
                  </SkillData>
                  <SkillData>
                    <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#606060' display='flex' direction='row' content='space-between'>
                      Next.JS
                      <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#b3b3b3'>90%</TextComponent>
                      
                    </TextComponent>  
                    <LinearProgress variant='determinate' value={90} />
                    <TextComponent textType={TextType.BODY_SMALL}color='#606060' >
                      
                    Specialization in releases and tests using the tools provided by NextJs                       </TextComponent>
                  </SkillData>
                  <SkillData>
                    <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#606060' display='flex' direction='row' content='space-between'>
                     Python
                      <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#b3b3b3'>40%</TextComponent>
                      
                    </TextComponent>  
                    <LinearProgress variant='determinate' value={40} />
                    <TextComponent textType={TextType.BODY_SMALL}color='#606060' >
                      
                    Intermediate knowledge of python tools and their implementation to simplify tasks                      </TextComponent>
                  </SkillData>
                  <SkillData>
                    <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#606060' display='flex' direction='row' content='space-between'>
                      Node.JS
                      <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='#b3b3b3'>55%</TextComponent>
                      
                    </TextComponent>  
                    <LinearProgress variant='determinate' value={55}/>
                    <TextComponent textType={TextType.BODY_SMALL}color='#606060' >
                      
                    Intermediate knowledge of python tools and their implementation to simplify tasks
                    </TextComponent>
                  </SkillData>
              </AboutData>
          
            </SkillContent>
            </PortfolioWhiteContent>
          </PortfolioCardWhite>

          <PortfolioCardWhite id='works'>
            <PortfolioTitle>
              <TextComponent  textType={TextType.HEADING_TWO} alignment="left" color='black'>
                Works
              </TextComponent>
              <TitleUnderlined/>
            </PortfolioTitle>
            <PortfolioWhiteContentWorks>
              <WorksContainer>
                <WorksCard onClick={()=>
                window.open(
                  "https://www.marketplace.atuarental.com/",
                  "_blank"
                )
                }>
                <TextComponent  textType={TextType.HEADING_FOUR} alignment="left" color='black'>
                  Atua Marketplace
                </TextComponent>
                <Image
                  src="/atua.png"
                  height={150}
                  width={150} 
                  alt="Your Name"
                  />
                </WorksCard>
                <WorksCard onClick={()=>
                window.open(
                  "https://the-nod.vercel.app/",
                  "_blank"
                )
                }>
                <TextComponent  textType={TextType.HEADING_FOUR} alignment="left" color='black'>
                  The Nod
                </TextComponent>
                <Image
                  src="/the-nod.png"
                  height={150}
                  width={150} 
                  alt="Your Name"
                  />
                </WorksCard>
                <WorksCard onClick={()=>
                window.open(
                  "https://laki-lac.vercel.app/",
                  "_blank"
                )
                }>
                <TextComponent  textType={TextType.HEADING_FOUR} alignment="left" color='black'>
                  Laki
                </TextComponent>
                <Image
                  src="/laki.png"
                  height={150}
                  width={150} 
                  alt="Your Name"
                  />
                </WorksCard>
                <WorksCard>
                <TextComponent  textType={TextType.HEADING_FOUR} alignment="left" color='black'>
                  Bloki
                </TextComponent>
                <Image
                  src="/bloki.png"
                  height={150}
                  width={150} 
                  alt="Your Name"
                  />
                </WorksCard>
              </WorksContainer>
            </PortfolioWhiteContentWorks>
          </PortfolioCardWhite>
          
          <PortfolioCardWhite id='contact'>
            <PortfolioTitle>
              <TextComponent  textType={TextType.HEADING_TWO} alignment="left" color='black'>
                Get in touch
              </TextComponent>
              <TitleUnderlined/>
            </PortfolioTitle>
            <PortfolioWhiteContent>
            
                <Form onSubmit={handleOnSubmit} className="form-container" >
                  <Form.Group className='form-group'>
                  <Form.Field
                  id="data-inputs"
                  control={Input}
                  name="from_email"
                  placeholder="Email…"
                  required
                  className='form-input'
                />
                <Form.Field
                  id="data-inputs"
                  control={Input}
                  name="from_name"
                  placeholder="Name…"
                  required
                  className='form-input'
                />

                <Form.Field
                  id="form-subject"
                  control={TextArea}
                  name="Subject"
                  placeholder="Subject…"
                  required
                  className='form-messages'
                />
                <Form.Field
                  id="form-textarea"
                  control={TextArea}
                  name="message"
                  placeholder="Message…"
                  required
                  className='form-messages'
                />
                  </Form.Group>
                <Button className='submit-button' type="submit">Submit</Button>
                
                </Form>
              
            </PortfolioWhiteContent >

          </PortfolioCardWhite>
                    
        </PortfolioContainer>
      </MainBody>
    </MainScreen>
  )
}

export default Home;