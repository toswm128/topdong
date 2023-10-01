import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  width: 100%;
  height: 56px;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>header</div>
    </HeaderContainer>
  );
};

export default Header;
