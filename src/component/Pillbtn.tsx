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
        width: '70px',
        height: '15px',
        backgroundColor: '#898d90',
        borderRadius: '10px',
        border: '1px solid black',
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
        fontFamily:'Righteous-Regular'
    },
}));

const Pillbtn: React.FC<ButtonProps> = ({ text, variant }) => (
    <div css={css`display: flex;`}>
        <BtnWrapper variant={variant}>
            <div css={css(`border: 1px solid #4d5a6e; border-radius: 10px; width: 79px; height:25px; display:flex; justify-content: center; align-items:center; box-shadow:inset 2px 2px 2px  #BBB6B6;`)}>
                <button/>
            </div>
            <div>{text}</div>
        </BtnWrapper>
    </div>
);

export default Pillbtn;
