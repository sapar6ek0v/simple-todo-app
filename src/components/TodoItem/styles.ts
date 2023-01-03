import styled from 'styled-components';

export const Wrapper = styled.li`
  background-color: #fff;
  padding: 8px 12px;
  width: 48%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const Title = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #000;
`;

type ButtonProps = {
  fill: string;
  borderCl: string;
};

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 7px;
  background-color: transparent;
  border: 1px solid ${(props: ButtonProps) => props.borderCl};
  transition: all 0.4s linear;

  svg {
    fill: ${(props: ButtonProps) => props.borderCl};
  }

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props: ButtonProps) => props.borderCl};
    border: 1px solid ${(props: ButtonProps) => props.fill};

    svg {
      fill: ${(props: ButtonProps) => props.fill};
    }
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const Input = styled.input`
  height: 24px;
  padding: 2px 6px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  border: 1px solid #fc00ff;
  transition: all 0.4s linear;

  &:focus,
  &:focus-within,
  &:hover,
  &:active {
    outline: none;
    border: 1px solid #f84efb;
  }
`;
