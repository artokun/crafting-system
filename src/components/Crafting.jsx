import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as actions from '../actions';

const Crafting = ({ crafting, highlightCraftingSpot }) => {
  function renderCraftingSlots() {
    return crafting.slots.map((slot, index) => {
      const key = _.isNull(slot) ? index : slot.name;

      return _.isObject(slot) ? (
        <CraftingSlot
          key={key}
          selected={crafting.selected === index}
          onClick={() => highlightCraftingSpot(index)}
          background={require(`../${slot.sprite}`)}
        >
          <span>{slot.quantity}</span>
        </CraftingSlot>
      ) : (
        <CraftingSlot
          key={key}
          selected={crafting.selected === index}
          onClick={() => highlightCraftingSpot(index)}
        />
      );
    });
  }

  return (
    <CraftingWrapper onClick={e => e.stopPropagation()}>
      {renderCraftingSlots()}
    </CraftingWrapper>
  );
};

const CraftingWrapper = styled.div`
  display: flex;
  justify-content: center:
  align-items: center;
  width: 320px;
  height: 320px;
  border: 1px solid lightgray;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const CraftingSlot = styled.div`
  position: relative;
  flex: 1 0 33%;
  background: url(${({ background }) => background});
  border: 2px solid ${({ selected }) => (selected ? 'green' : 'lightgray')};
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center center;

  span {
    position: absolute;
    bottom: 0;
    right: 3px;
  }
`;

Crafting.propTypes = {
  crafting: PropTypes.shape({
    slots: PropTypes.arrayOf(PropTypes.object),
    selected: PropTypes.number,
  }).isRequired,
  highlightCraftingSpot: PropTypes.func.isRequired,
};

const mapStateToProps = ({ crafting }) => ({
  crafting,
});

export default connect(mapStateToProps, actions)(Crafting);
