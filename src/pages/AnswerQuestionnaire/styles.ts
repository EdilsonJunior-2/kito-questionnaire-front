import styled from "styled-components";

const StyledAnswerQuestionnaire = styled.main`
  h4 {
    margin: 0;
    margin-bottom: 1rem;
  }
  .question {
    border-top: 1px solid #a9a9a9;
    border-bottom: 1px solid #a9a9a9;
    padding: 1rem;
    &[aria-errormessage="true"] {
      border-color: #ef5350;
    }
  }
  .options {
    display: grid;
    grid-template-columns: repeat(auto-fill, 49%);
    gap: 1%;
  }
  .actions {
    margin-top: 1rem;
    button:first-child {
      margin-right: 1rem;
    }
  }

  .MuiFormControlLabel-root {
    &[aria-description="correct"] {
      border: 1px solid green;
      border-radius: 0.5rem;

      .Mui-disabled {
        color: green;
      }
    }
    &[aria-description="wrong"] {
      border: 1px solid #ef5350;
      border-radius: 0.5rem;
      &:has(> :nth-child(1):not(.Mui-checked)) {
        display: none;
      }

      .Mui-disabled {
        color: #ef5350;
      }
    }
  }

  .MuiFormControlLabel-label.Mui-disabled {
    color: white;
  }
  .Mui-checked.Mui-disabled {
    color: #1976d2;
  }

  .result {
    margin-top: 1rem;
    button {
      margin-left: 1rem;
    }
  }
`;

export default StyledAnswerQuestionnaire;
