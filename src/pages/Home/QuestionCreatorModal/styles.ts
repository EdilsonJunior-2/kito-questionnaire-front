import { Box } from "@mui/material";
import styled from "styled-components";

const StyledModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  min-width: 20rem;
  height: 80%;
  max-height: 80%;
  border: 2px solid #000;
  boxshadow: 1.5rem;
  background-color: #242424;
  border-radius: 1rem;

  .title {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    &.main {
      justify-content: space-between;
      margin: 1rem 1rem 0;
    }
  }

  svg {
    cursor: pointer;
  }

  h2 {
    margin: 0;
  }

  .MuiFormControlLabel-root {
    display: flex;
    align-items: flex-start;
    width: 100%;
  }
  .MuiFormControlLabel-label {
    width: 100%;
  }
  span.error {
    color: #ef5350;
    font-size: 0.825rem;
    margin-top: 0.5rem;
  }

  form {
    height: 90%;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .form-fields {
    overflow: scroll;
    padding: 1rem;
    height: 85%;
  }

  .submit-options {
    margin-top: 1rem;
    width: 12rem;
    display: flex;
    justify-content: space-between;
    padding-left: 1rem;
  }

  .answer-option {
    display: flex;
    align-items: center;
  }
`;

const StyledQuestionSection = styled.section`
  border-top: 1px solid white;
  margin-top: 1rem;
`;
export { StyledModal, StyledQuestionSection };
