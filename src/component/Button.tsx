import styled from '@emotion/styled'; // styled-components처럼 사용하기
import { css } from "@emotion/react";
import { ButtonProps } from './type/props';

interface BtnWrapperInterface {
    marginTop: string;
    marginRight: string;
    boxShadow:string;
}

const btnStyles: { [key: string]: BtnWrapperInterface } = {
    small: {
        marginTop: '0px',
        marginRight: '30px',
        boxShadow: '10px -5px 10px rgba(50, 50, 93, 0.11), 15px -10px 15px rgba(0, 0, 0, 0.08)',
    },
    medium: {
        marginTop: '0px',
        marginRight: '0px',
        boxShadow: '5px -4px 6px rgba(50, 50, 93, 0.11), 10px -8px 8px rgba(0, 0, 0, 0.08)',
    },
};

const textStyles: { [key: string]: { marginRight: string } } = {
    small: {
        marginRight: '45px',
    },
    medium: {
        marginRight: '0px',
    },
};

interface BtnInterface {
    variant: string;
}

const BtnWrapper = styled.div<BtnInterface>(({ variant }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    button: {
        width: '60px',
        height: '60px',
        backgroundColor: '#8f2263',
        borderRadius: '100%',
        border: '1px solid black',
        marginBottom:'10px',
        fontWeight: 'bold',
        '&:hover': {
            color: 'white',
        },
        ...btnStyles[variant],
    },
    div: {
        ...textStyles[variant],
        color: '#3f4190',
        fontFamily: "Righteous-Regular",
        fontSize: '20px',
    },
}));

const Button: React.FC<ButtonProps> = ({ text, variant }) => (
    <div css={css`display: flex; margin-top: 6px`}>
        <BtnWrapper variant={variant}>
            <button/>
            <div>{text}</div>
        </BtnWrapper>
    </div>
);

export default Button;
