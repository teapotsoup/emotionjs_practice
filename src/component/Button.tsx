import styled from '@emotion/styled';
import { ButtonProps } from './type/props';

interface StyledButtonInterface {
    variant: string;
}

interface StyledButtonReturnInterface {
    fontSize:string, color:string;
}

const sizeStyles: { [key: string]: StyledButtonReturnInterface } = {
    small: {
        fontSize: '12px',
        color: 'red',
    },
    medium: {
        fontSize: '14px',
        color: 'blue',
    },
    large: {
        fontSize: '16px',
        color: 'yellow',
    },
};

const StyledButton = styled.button<StyledButtonInterface>(({variant}) => ({
    width:'80px',
    height:'80px',
    backgroundColor: '#8f2263',
    borderRadius: '100%',
    marginRight:'10px',
    fontWeight: 'bold',
    '&:hover': {
        color: 'white',
    },
    ...sizeStyles[variant],
}));

const Button: React.FC<ButtonProps> = ({ text, variant }) => (
    <StyledButton variant={variant}>{text}</StyledButton>
);

export default Button;