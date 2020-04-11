import React from 'react';
import styled from 'styled-components';

const ItemsSection = styled.section`
  padding: 0;
`;

const ItemsList = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  align-items: center;
`;

const Item = styled.li`
  display: block;
  padding: 0.5rem 0;
  place-self: start;
  text-align: center;
  border: solid 1px gray;

  &:hover {
    border: solid 1px red;
    background-color: lightgreen;
    cursor: pointer;
  }
`;

const ItemImage = styled.img`
  border: dotted 1px gray;
  width: 200px;
  height: 200px;
  background-image: url('https://www.your.md/static/images/shared/illustrations/5.svg');
  background-size: cover;
`;

const ItemTitle = styled.h2``;
const ItemDescription = styled.article``;

export default function Items({ items, handleSelect }) {
  const listItems = items.map((item) => (
    <Item key={item.id} onClick={() => handleSelect(item.id)} data-testid="item">
      <ItemImage src={item.image} />
      <ItemTitle>{item.label}</ItemTitle>
      <ItemDescription>{item.snippet}</ItemDescription>
    </Item>
  ));

  return (
    <ItemsSection>
      <ItemsList>{listItems}</ItemsList>
    </ItemsSection>
  );
}
