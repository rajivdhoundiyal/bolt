import styled from 'styled-components';

const WrapperLogin = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &.is-dragging {
    cursor: col-resize !important;
  }

  section.main {
    display: flex;

    section.request-pane,
    section.response-pane {
    }
  }

  .fw-600 {
    font-weight: 600;
  }
`;

export default WrapperLogin;
