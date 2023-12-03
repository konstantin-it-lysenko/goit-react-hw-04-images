import styled from '@emotion/styled';

export const SearchBar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #444;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  min-width: 100%;
  padding: 24px;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 16px;
  background-color: #444;
  color: #202020;
`;

export const Button = styled.button`
  padding: 6px 24px;
  border: none;
  border-radius: 18px;
  background-color: #fafafa;
  color: #202020;
  line-height: 1.5;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:is(:hover, :focus) {
    background-color: #333;
    color: #fafafa;
  }
`;

export const Input = styled.input`
  padding: 8px 16px;
  width: 210px;
  border: none;
  border-radius: 20px;
  background-color: #333;
  color: #fafafa;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 500;
  outline: none;
`;
