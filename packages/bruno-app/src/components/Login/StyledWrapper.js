import styled from 'styled-components';

const StyledWrapper = styled.div`
  .heading-banner {
    color: ${(props) => props.theme.welcome.dark};
    font-size: 1.5rem;
    font-weight: bold
    font: Frutiger, Arial, Helvetica, sans-serif
  }

  .heading {
    color: ${(props) => props.theme.welcome.heading};
    font-size: 1.25rem;
    font-weight: bold
    font: Frutiger, Arial, Helvetica, sans-serif
  }

  .muted {
    color: ${(props) => props.theme.welcome.muted};
  }

  .collection-options {
    cursor: pointer;

    svg {
      position: absolute;
      top: -1px;
    }

    .label {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default StyledWrapper;
