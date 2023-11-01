import styled from '@emotion/styled';
import { css } from "@emotion/react";
import { ButtonProps } from './type/props';

interface BtnWrapperInterface {
    marginRight: string;
}

const btnStyles: { [key: string]: BtnWrapperInterface } = {
    small: {
        marginRight: '0px',
    },
    medium: {
        marginRight: '0px',
    },
};

const textStyles: { [key: string]: { marginRight: string } } = {
    small: {
        marginRight: '0px',
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
    transform: 'rotate(-30deg)',
    button: {
        width: '80px',
        height: '15px',
        boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 10px rgba(0, 0, 0, 0.08)',
        backgroundColor: '#4d5a6e',
        borderRadius: '10px',
        border: '1px solid #4d5a6e',
        fontWeight: 'bold',
        '&:hover': {
            color: 'white',
        },
        ...btnStyles[variant],
    },
    div: {
        ...textStyles[variant],
        marginTop: '3px',
        color: '#3f4190',
        fontWeight: 'bold',
    },
}));

const Pillbtn: React.FC<ButtonProps> = ({ text, variant }) => (
    <div css={css`display: flex;`}>
        <BtnWrapper variant={variant}>
            <button/>
            <div>{text}</div>
        </BtnWrapper>
    </div>
);

export default Pillbtn;
