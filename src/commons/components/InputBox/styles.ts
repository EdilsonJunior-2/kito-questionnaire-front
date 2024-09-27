import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  width: 100%;
  label {
    color: #ccc;
    margin-bottom: 0.5rem;
  }
  .error {
    color: #ef5350;
    font-size: 0.825rem;
    margin-top: 0.5rem;
  }

  input,
  select {
    color: white;
    padding: 0.5rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    height: 1rem;
  }
  select {
    height: 2.125rem;
    width: 10rem;
  }

  fieldset,
  fieldset:hover {
    border-color: white;
  }
`;

export default StyledInput;
