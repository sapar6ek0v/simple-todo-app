import styled from 'styled-components';

export const Wrapper = styled.section`
  min-height: calc(100vh - 260px);
  padding: 200px 0px 60px;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 400px;
  border: none;
  background-color: transparent;
  padding: 4px 10px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  border-bottom: 2px solid #fc00ff;
  transition: all 0.4s linear;

  &:focus,
  &:focus-within,
  &:hover,
  &:active {
    outline: none;
    border-bottom: 2px solid #f84efb;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #8bc6ec;
  border: 1px solid transparent;
  border-radius: 0px;
  padding: 6px 10px;
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

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  list-style: none;
  padding: 0px;
  margin: 0px;
  width: 100%;
`;

export const NoTodosTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;
