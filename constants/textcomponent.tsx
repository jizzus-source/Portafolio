import styled, { css } from "styled-components";
import { FONTFAMILIES, SCREEN_SIZE_RANGES, SIZES } from "../constants/constants";

type Props = {
    children: any;
    textType: TextType;
    alignment?: string;
    color?: string;
};

export enum TextType {
    HEADING_ONE = "HEADING_ONE",
    HEADING_TWO = "HEADING_TWO",
    HEADING_THREE = "HEADING_THREE",
    HEADING_FOUR = "HEADING_FOUR",
    HEADING_FIVE = "HEADING_FIVE",
    HEADING_SIX = "HEADING_SIX",
    BODY_MEDIUM = "BODY_MEDIUM",
    BODY_SMALL = "BODY_SMALL",
    BODY_EXTRA_SMALL = "BODY_EXTRA_SMALL",
    BODY_MEDIUM_MEDIUM = "BODY_MEDIUM_MEDIUM",
    BODY_SMALL_MEDIUM = "BODY_SMALL_MEDIUM",
    BODY_EXTRA_SMALL_MEDIUM = "BODY_EXTRA_SMALL_MEDIUM",
    BODY_MEDIUM_BIG = "BODY_MEDIUM_BIG"
};

export const HEADING_ONE = css`
font-family: ${FONTFAMILIES.PLAYFAIR_DISPLAY};
font-size: ${SIZES.FIVE};
line-height: 80px;
font-weight: bold;
@media${SCREEN_SIZE_RANGES.MOBILE}{
    line-height: 43px;
    font-size: ${SIZES.FOUR};
}
`;

export const HEADING_TWO = css`
font-family: ${FONTFAMILIES.PLAYFAIR_DISPLAY};
font-size: ${SIZES.FOUR};
line-height: 71.67px;
font-weight: bold;
`;

export const HEADING_THREE = css`
font-family: ${FONTFAMILIES.QUICKSAND};
font-size: ${SIZES.THREE};
line-height: 56px;
font-weight: 800;
`;

export const HEADING_FOUR = css`
font-family: ${FONTFAMILIES.QUICKSAND};
font-size: 18px;
line-height: 32px;
font-weight: 700;
`;

export const HEADING_FIVE = css`
font-family: ${FONTFAMILIES.QUICKSAND};
font-size: ${SIZES.TWO};
line-height: 28px;
font-weight: 550;
`;

export const HEADING_SIX = css`
font-family: ${FONTFAMILIES.QUICKSAND};
font-size: 14px;
font-weight: 480;
`;

export const BODY_MEDIUM = css`
font-family: ${FONTFAMILIES.QUICKSAND};
font-size: 14px;
line-height: 24px;
`;
export const BODY_MEDIUM_BIG = css`
font-family: ${FONTFAMILIES.QUICKSAND};
font-size: 18px;
line-height: 28px;
`;


export const BODY_SMALL = css`
font-family: ${FONTFAMILIES.QUICKSAND};
font-size: 13px;
line-height: 16px;
`;

export const BODY_EXTRA_SMALL = css`
font-family: ${FONTFAMILIES.QUICKSAND};
font-size: 11.11px;
line-height: 16px;
`;

export const BODY_MEDIUM_MEDIUM = css`
font-family: ${FONTFAMILIES.QUICKSAND};
font-size: 16px;
line-height: 12px;
`;

export const BODY_SMALL_MEDIUM = css`
font-family: ${FONTFAMILIES.QUICKSAND};
font-size: 13px;
line-height: 16px;
`;

export const BODY_EXTRA_SMALL_MEDIUM = css`
font-family: ${FONTFAMILIES.QUICKSAND};
font-size: 11.11px;
line-height: 8px;
`;

const TextComponentContainer = styled.div.attrs((props: Props)=>props)`
${props=>textStyle(props.textType)}
${props=>props.alignment?`text-align: ${props.alignment}`:""};
${props=>props.color?`color: ${props.color}`:""};
`;

function textStyle(textType: TextType){
    switch(textType){
        case TextType.HEADING_ONE: {
            return HEADING_ONE;
        }
        case TextType.HEADING_TWO: {
            return HEADING_TWO;
        }
        case TextType.HEADING_THREE: {
            return HEADING_THREE;
        }
        case TextType.HEADING_FOUR: {
            return HEADING_FOUR;
        }
        case TextType.HEADING_FIVE: {
            return HEADING_FIVE;
        }
        case TextType.HEADING_SIX: {
            return HEADING_SIX;
        }
        case TextType.BODY_MEDIUM: {
            return BODY_MEDIUM;
        }
        case TextType.BODY_SMALL: {
            return BODY_SMALL;
        }
        case TextType.BODY_EXTRA_SMALL: {
            return BODY_EXTRA_SMALL;
        }
        case TextType.BODY_MEDIUM_MEDIUM: {
            return BODY_MEDIUM_MEDIUM;
        }
        case TextType.BODY_SMALL_MEDIUM: {
            return BODY_SMALL_MEDIUM;
        }
        case TextType.BODY_EXTRA_SMALL_MEDIUM: {
            return BODY_EXTRA_SMALL_MEDIUM;
        }
        case TextType.BODY_MEDIUM_BIG:{
            return BODY_MEDIUM_BIG;
        } 
    }
       
}

const TextComponent = (props: Props) => {
    return (
        <TextComponentContainer  {...props}>
            {props.children}
        </TextComponentContainer>
    );
}

export default TextComponent;