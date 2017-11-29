import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Inventory from './Inventory';
import Crafting from './Crafting';

const App = ({ addInventory, sortInventory }) => {
  return (
    <MainScreen>
      <GameScreen>
        <Inventory />
        <Crafting />
      </GameScreen>
      <AdminScreen>
        <p>Add Inventory</p>
        <ButtonRow>
          <button onClick={() => addInventory('m_stick')}>Add Stick</button>
          <button onClick={() => addInventory('m_stone')}>Add Stone</button>
          <button onClick={() => addInventory('m_rabbit_hide')}>
            Add Rabbit Hide
          </button>
        </ButtonRow>
        <p>Sort Inventory</p>
        <ButtonRow>
          <button onClick={() => sortInventory('name')}>Name</button>
          <button onClick={() => sortInventory('type')}>Type</button>
          <button onClick={() => sortInventory('rarity')}>Rarity</button>
          <button onClick={() => sortInventory('value')}>Value</button>
        </ButtonRow>
        <ul>
          {/* <li>Make crafting table</li> */}
          <li>clicking on a crafting table spot will highlight it</li>
          <li>will only highlight one spot at a time</li>
          <li>
            clicking on an inventory item will move that item to the highlighted
            crafting spot
          </li>
          <li>the inventory item will be decreased by one</li>
          <li>if it's the last inventory it should disappear</li>
          <li>
            clicking on the item in the crafting table will return the item back
            to the inventory
          </li>
        </ul>
      </AdminScreen>
    </MainScreen>
  );
};

const MainScreen = styled.div`
  display: flex;
`;
const GameScreen = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  padding: 20px;
`;
const AdminScreen = styled.div`
  display: flex;
  flex: 1;
  border-left: 1px solid lightgray;
  flex-direction: column;
  padding: 20px;
`;
const ButtonRow = styled.div`
  display: flex;
`;

App.propTypes = {
  addInventory: PropTypes.func.isRequired,
  sortInventory: PropTypes.func.isRequired,
};

export default connect(null, actions)(App);
