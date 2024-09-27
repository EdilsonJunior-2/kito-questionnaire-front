import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid #a9a9a9;
  border-radius: 0.5rem 0.5rem 0 0;
  .title {
    padding: 1rem;
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .subtitle {
    font-size: 0.875rem;
    font-weight: initial;
  }

  .actions {
    button {
      width: 100%;
      border-radius: 0;
      border: 1px solid #a9a9a9;
    }
  }
`;

export default StyledCard;
