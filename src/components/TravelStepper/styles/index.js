import styled from 'styled-components';
import { Stepper } from '@material-ui/core';

const StyledStepper = styled(Stepper)`
`;

const WrapperPage = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  main {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 2rem;
    section {
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  }
`;

export { WrapperPage, StyledStepper };
