import styled from "styled-components";

const StyledHome = styled.div`
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  article {
    margin-top: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 25rem);
    justify-content: center;
    gap: 0.5rem;
  }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-right: 0.5rem;
    }
  }
`;

export default StyledHome;
