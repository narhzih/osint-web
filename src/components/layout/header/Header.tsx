import styled from "styled-components";

// const navLinks = [
//   { label: "Training", type: "single", linkTo: "" },
//   { label: "Enterprise", type: "single", linkTo: "" },
//   { label: "Contact", type: "dropdown", children: [] },
//   { label: "Buy Credits", type: "single" },
//   { label: "Full Access", type: "dropdown", children: [] },
// ];

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <div>Logo</div>
      <div>Links</div>
      <div>Get started</div>
    </HeaderWrapper>
  );
};
