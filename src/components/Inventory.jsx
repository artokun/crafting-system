import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as actions from '../actions';

const Inventory = ({ inventory, highlightInventorySpot }) => {
  function renderInventorySlots() {
    return inventory.slots.map((slot, index) => {
      const key = _.isNull(slot) ? index : slot.name;

      return _.isObject(slot) ? (
        <InventorySlot
          key={key}
          onClick={() => highlightInventorySpot(index)}
          selected={inventory.selected === index}
          background={require(`../${slot.sprite}`)}
        >
          <span>{slot.quantity}</span>
        </InventorySlot>
      ) : (
        <InventorySlot
          selected={inventory.selected === index}
          onClick={() => highlightInventorySpot(index)}
          key={key}
        />
      );
    });
  }

  return (
    <InventoryWrapper onClick={e => e.stopPropagation()}>
      {renderInventorySlots()}
    </InventoryWrapper>
  );
};

const InventoryWrapper = styled.div`
  display: flex;
  justify-content: center:
  align-items: center;
  width: 640px;
  height: 320px;
  border: 1px solid lightgray;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const InventorySlot = styled.div`
  position: relative;
  flex: 1 0 12%;
  background: url(${({ background }) => background});
  border: 1px solid ${({ selected }) => (selected ? 'green' : 'lightgray')};
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

Inventory.propTypes = {
  inventory: PropTypes.shape({
    slots: PropTypes.arrayOf(PropTypes.object),
    selected: PropTypes.number,
  }).isRequired,
  highlightInventorySpot: PropTypes.func.isRequired,
};

const mapStateToProps = ({ inventory }) => ({
  inventory,
});

export default connect(mapStateToProps, actions)(Inventory);
