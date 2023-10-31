import { css } from '@emotion/react';
import { NormalButtonProps } from './type/props';

const baseButtonStyles = css`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const Button2: React.FC<NormalButtonProps> = ({ text }) => {
    return <button css={baseButtonStyles}>{text}</button>;
};

export default Button2;