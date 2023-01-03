import { FC, ReactNode } from 'react';
import { Container, Wrapper } from './styles';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <Wrapper><Container>{children}</Container></Wrapper>
  );
};

export default Layout;