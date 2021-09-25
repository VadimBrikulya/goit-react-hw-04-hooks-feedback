import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: inherit;
  border: 2px solid teal;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    color: yellowgreen;
    border-color:yellowgreen;
  }
`;

export const Container = styled.ul`
  /* display: flex; */
`;

export const Item = styled.li`
  margin-right: 25px;
  padding-bottom:10px;
`;