import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';
import Selected from '../../components/Selected';
import Items from '../../components/Items';
import {
  loadData,
  selectId,
  selectInitialized,
  selectItems,
  selectSelectedId,
} from './conditionsListSlice';

const ConditionsLayout = styled.div`
  padding: 2rem;
`;

const ExploreMoreHeading = styled.h1``;
const ExploreMoreDescription = styled.p``;

export function ConditionsList() {
  const dispatch = useDispatch();
  const initialized = useSelector(selectInitialized);
  const items = useSelector(selectItems);
  const selectedId = useSelector(selectSelectedId);

  if (!initialized) {
    dispatch(loadData());
  }

  if (!items) {
    return <Spinner data-testid="spinner" />;
  }

  if (items.length === 0) {
    return <h1>No Data</h1>;
  }

  function handleSelect(id) {
    dispatch(selectId(id));
    window.scrollTo(0, 0);
  }

  return (
    <ConditionsLayout>
      <Selected item={items.find((item) => item.id === selectedId)} />
      <ExploreMoreHeading>Explore More Content</ExploreMoreHeading>
      <ExploreMoreDescription>
        Click on an item below to view details
      </ExploreMoreDescription>
      <Items
        items={items.filter((item) => item.id !== selectedId)}
        handleSelect={handleSelect}
      />
    </ConditionsLayout>
  );
}
