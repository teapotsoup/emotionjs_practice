import styled from '@emotion/styled'; // styled-components처럼 사용하기
import { css } from "@emotion/react";
import { ButtonProps } from './type/props';

interface BtnWrapperInterface {
    marginTop: string;
    marginRight: string;
}

const btnStyles: { [key: string]: BtnWrapperInterface } = {
    small: {
        marginTop: '0px',
        marginRight: '45px',
    },
    medium: {
        marginTop: '0px',
        marginRight: '0px',
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
        boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 10px rgba(0, 0, 0, 0.08)',
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
        fontFamily: "GillSansBold",
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
