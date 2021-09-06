import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export default function Container({ children }: PropsWithChildren<any>) {
  return <Container_div>{children}</Container_div>;
}
const Container_div = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;
