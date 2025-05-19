import styled from "styled-components";
import { Input, Select } from "antd";

// Color scheme
const colors = {
    primary: "#4169E1",       // Royal Blue
    secondary: "#2F4F4F",     // Dark Slate Gray (Dark-grey blue)
    tertiary: "#000080",      // Navy Blue
    textLight: "#FFFFFF",
    textDark: "#333333",
};

export const StyledInput = styled(Input)<{ $yourProp?: boolean }>`
    background-color: ${colors.textLight};
    border: 1px solid ${colors.secondary};
    color: ${colors.textDark};
    margin-bottom: 1rem;
    &:focus {
        border-color: ${colors.primary};
        box-shadow: 0 0 0 2px rgba(65, 105, 225, 0.2);
    }
`;

export const StyledSelect = styled(Select)`
  min-width: 250px;
  .ant-select-selector {
    border: 1px solid ${colors.secondary} !important;
    &:focus {
      border-color: ${colors.primary} !important;
      box-shadow: 0 0 0 2px rgba(65, 105, 225, 0.2) !important;
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: ${colors.tertiary};
  border-radius: 4px;
`;

export const Logo = styled.img`
  height: 40px;
  margin-right: 1rem;
`;

export const Title = styled.h1`
  color: ${colors.textLight};
  margin: 0;
  font-size: 1.5rem;
`;