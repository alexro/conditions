import React from 'react';
import styled from 'styled-components';

const SelectedSection = styled.section`
  padding: 0 0 2rem 0;
`;

const SelectedItemTitle = styled.h2``;
const SelectedItemDescription = styled.article``;

const SelectedItemList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  grid-gap: 1rem;
`;

const SelectedItem = styled.div``;

const SelectedItemImage = styled.img`
  border: dotted 1px gray;
  width: 200px;
  height: 200px;
  background-image: url('https://www.your.md/static/images/shared/illustrations/5.svg');
  background-size: cover;
`;

const SelectedItemSynonyms = styled.div`
  flex-grow: 2;
  flex-basis: 200px;
  padding: 0 0.5rem;
  border: solid 1px navy;
  height: 200px;
  overflow-y: auto;
`;

const SelectedItemKeywords = styled.div`
  flex-grow: 1;
  flex-basis: 200px;
  padding: 0 0.5rem;
  border: solid 1px navy;
  height: 200px;
  overflow-y: auto;
`;

export default function Selected({ item }) {
  return (
    <SelectedSection>
      <SelectedItemTitle>{item.label}</SelectedItemTitle>
      <SelectedItemList>
        <SelectedItem data-testid="selected">
          <SelectedItemImage src={item.image} />
        </SelectedItem>
        <SelectedItemSynonyms>
          <h3>Synonyms</h3>
          <div>{item.synonyms ? item.synonyms.join(', ') : ''}</div>
        </SelectedItemSynonyms>
        <SelectedItemKeywords>
          <h3>Keywords</h3>
          <div>{item.keywords ? item.keywords.join(', ') : ''}</div>
        </SelectedItemKeywords>
      </SelectedItemList>
      <SelectedItemDescription>{item.snippet}</SelectedItemDescription>
    </SelectedSection>
  );
}
