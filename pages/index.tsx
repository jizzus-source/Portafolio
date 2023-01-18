
import Image from 'next/image'

import styled from "styled-components";
import { SIZES } from '@/constants/constants';
import TextComponent, { TextType } from '@/constants/textcomponent';
import { NextPage } from 'next';

type Props = {};


const MainScreen = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items: center;
background-color:white;
`;
const MainBody = styled.div`
width:80%;
display:flex;
flex-direction:row;
margin-top:3rem;
gap:2rem;
`;
const MenuContainer = styled.div`
background-color:#4A63E7;
width:20%;
border-radius: ${SIZES.ONE};
max-height:55vh;
`;
const PortfolioContainer = styled.div`
width:70%;

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
`;
const PortolioCardBlue = styled.div`
background-color:#4A63E7;
display:flex;
border-radius: ${SIZES.ONE};
height:70vh;
align-items: center;
justify-content: center;
flex-direction:column;
`;
const PortfolioContent = styled.div`
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
              <TextComponent textType={TextType.HEADING_FIVE} alignment="left" color='white'>
                Home
              </TextComponent>
              </ListContent>
              <ListContent>
              <Image
                src="/icons/profile.svg"
                height={20}
                width={20} 
                alt="Your Name"
                />
              <TextComponent textType={TextType.HEADING_FIVE} alignment="left" color='white'>
                About
              </TextComponent>
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


        <PortfolioContainer>
          <PortolioCardBlue>
            <PortfolioContent>
            <TextComponent textType={TextType.HEADING_ONE} alignment="left" color='white'>
                I´m Jesus Pareja
          </TextComponent>
          <TextComponent textType={TextType.BODY_MEDIUM_BIG} alignment="left" color='white'>
          He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.
          </TextComponent>
            </PortfolioContent>
          </PortolioCardBlue>
        </PortfolioContainer>
      </MainBody>
    </MainScreen>
  )
}

export default Home;