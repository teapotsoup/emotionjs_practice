import styled from '@emotion/styled';
import { css } from "@emotion/react";
import { ButtonProps } from './type/props';

interface BtnWrapperInterface {
    marginTop: string;
    marginRight: string;
}

const btnStyles: { [key: string]: BtnWrapperInterface } = {
    small: {
        marginTop: '50px',
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
    transform: 'rotate(-30deg)',
    button: {
        width: '60px',
        height: '60px',
        boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 10px rgba(0, 0, 0, 0.08)',
        backgroundColor: '#8f2263',
        borderRadius: '100%',
        border: '1px solid #8f2263',
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

const Button: React.FC<ButtonProps> = ({ text, variant }) => (
    <div css={css`display: flex;`}>
        <BtnWrapper variant={variant}>
            <button/>
            <div>{text}</div>
        </BtnWrapper>
    </div>
);

export default Button;
