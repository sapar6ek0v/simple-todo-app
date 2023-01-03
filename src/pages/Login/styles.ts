import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginCard = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

type StackProps = {
  gap: number;
  position?: string;
};

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props: StackProps) => props.gap && `${props.gap}px`};
  justify-content: ${(props: StackProps) => props.position};
`;

export const Label = styled.label`
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  padding: 0px 4px;
`;

export const Input = styled.input`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  border: 1px solid #000;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  padding: 4px 10px;
  transition: all 0.4s linear;

  &:focus,
  &:focus-within,
  &:hover,
  &:active {
    outline: none;
    border-color: #8bc6ec;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #8bc6ec;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #483d3d6e;
  transition: all 0.4s linear;
  text-transform: uppercase;

  &:hover,
  &:focus,
  &:active {
    background-color: #fff;
    border: 1px solid #8bc6ec;
    color: #8bc6ec;
  }

  &:disabled {
    background-color: #ff0000;
    color: #fb5612;
    border: 1px solid #ff0000;
    cursor: not-allowed;
  }
`;
