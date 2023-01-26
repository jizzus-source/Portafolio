import { ALL_COLORS, COLORS, FONTSIZES, SIZES } from "../constants/constants"

import styled, { css } from 'styled-components';
import { useEffect, useRef, useState } from "react";


export interface InputSelectOption {
    id: any;
    data: string;
}

export type InputOnChangeResponse = {
    value: string;
    id?: any;
    date?: Date | undefined;
}

export enum InputTypes {
    SELECT = "select",
    NUMBER = "number",
    TEXT = "text",
    PASSWORD = "password",
    DATE = "date",
    SUGGESTION = "suggestion"
}

interface Props {
    placeholder: string;
    type: InputTypes;
    value: string;
    onChange?: (response: InputOnChangeResponse) => void;
    options?: InputSelectOption[];
    readOnly?: boolean;
    additionalProps?: {
        width?: string;
        minWidth?: string;
        position?: string;
        top?: string;
        left?: string;
    }
    idWidthData?: boolean;
    onPressEnter?: (value: string) => void;
    inputLimit?: number;
    hideLabel?: boolean;
    label?: string;
    postIcon?: string;
    iconColor?: string;
    suggestionStatus?: boolean;
    suggestionsRender?: ()=>void;
    clearSuggestions?: ()=>void;
    date?: Date | undefined;
}

const Input = styled.input`
    outline: none;
    border: none;
    width: 90%;
    background: transparent;
`;

const Label = styled.label`
    position: absolute;
    font-size: ${SIZES.ONE_AND_A_HALF};
    top: -${SIZES.ONE_AND_A_HALF};
    font-weight: bold;
`;

const Select = styled.select`
    width: 100%;
    border: none;
    outline: none;
    margin-right: 10px;
    background: transparent;
`;

const Focus = css`
border-bottom: 1px solid ${ALL_COLORS.PRIMARY_COLOR.PRIMARY_COLOR};
${Label}{
    color: ${COLORS.PURPLE};
}
`;

const Valid = css`
border-bottom: 1px solid ${ALL_COLORS.GRAY_SCALE.WHITE};
${Label}{
    color: ${ALL_COLORS.GRAY_SCALE.WHITE};
}
`;

const Base = css`
    background: transparent;
    border: 1px solid ${ALL_COLORS.GRAY_SCALE.GRAY_400};
    border-radius: ${SIZES.ONE};
    height: 35px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0px;
    box-sizing: border-box;
    position: relative;
    min-width: 200px;
    padding: 0 ${SIZES.ONE};
    color: ${ALL_COLORS.GRAY_SCALE.GRAY_400};
    &:focus-within {
        ${Focus}
    }
    &:focus {
        ${Focus}
    }
`;

const InputContainer = styled.div.attrs((props: { width: string, minWidth: string }) => props)`
${Base}
${props => props.width ? `width: ${props.width};` : ""}
${props => props.minWidth ? `min-width: ${props.minWidth};` : ""}
`;

const Option = styled.option``;

const FormInput = (props: Props) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

    const val = useRef<string>(props.value);

    useEffect(() => {
        if (props.onPressEnter) {
            const keyDownHandler = (event: any) => {
                if (event.key === 'Enter' && val.current!="") {
                    event.preventDefault();
                    props.onPressEnter?.(val.current);
                    val.current = "";
                }
            };
            document.addEventListener('keydown', keyDownHandler);
            return () => {
                document.removeEventListener('keydown', keyDownHandler);
            };
        }
    }, []);

    useEffect(() => {
        props.onChange?.({value: selectedDate?.toString()??"", date: selectedDate});
        setShowDatePicker(false);
    }, [selectedDate]);

    function handleChangeSelect(value: string, id: any) {
        props.onChange?.({value, id});
    }

    function handleChangeInput(value: string) {
        val.current = value;
        props.onChange?.({value});
    }

    function renderInput(type: InputTypes) {
        switch (type) {
            case InputTypes.SELECT: {
                return (
                    <Select defaultValue={props.value} disabled={props.readOnly} onChange={(e: any) => handleChangeSelect(e.target.options[e.target.selectedIndex].text, e.target.value)}>
                        {props.options?.map(item => {
                            return <Option key={props.idWidthData ? `${item.id} ${item.data}` : item.id} value={item.id}>{props.idWidthData ? `${item.id} ${item.data}` : item.data}</Option>
                        })}
                    </Select>
                );
            }
            case InputTypes.TEXT: {
                return (
                    <Input maxLength={props.inputLimit ?? 99999999} readOnly={props.readOnly} value={props.value} onChange={(e: any) => handleChangeInput(e.target.value)} placeholder={props.placeholder} type={props.type} />
                );
            }
            case InputTypes.DATE: {
                return (
                    <Input disabled={true} maxLength={props.inputLimit ?? 99999999} readOnly={props.readOnly} value={props.value} onChange={(e: any) => handleChangeInput(e.target.value)} placeholder={props.placeholder} type={"text"} />
                );
            }
            default: {
                return (
                    <Input maxLength={props.inputLimit ?? 99999999} readOnly={props.readOnly} value={props.value} onChange={(e: any) => handleChangeInput(e.target.value)} placeholder={props.placeholder} type={props.type} />
                );
            }
        }
    }


    function handleInputContainerClick(){
        if(props.date){
            setShowDatePicker(true);
        }
    }

    return (
        <InputContainer
            width={props.additionalProps?.width}
            minWidth={props.additionalProps?.minWidth}
            onClick={handleInputContainerClick}
        >
            {props.hideLabel ? <></> : <Label>{props.label??props.placeholder}</Label>}
            {renderInput(props.type)}
            
            <>{props.suggestionStatus && props.suggestionsRender?.()}</>
            
        </InputContainer>
    );
}

export default FormInput;