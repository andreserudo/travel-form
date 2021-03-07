import styled from 'styled-components';
import { Stepper } from '@material-ui/core';

const StyledStepper = styled(Stepper)`
`;

const WrapperPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    section {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  }
`;

export { WrapperPage, StyledStepper };
