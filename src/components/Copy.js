import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
// import Data from '../seedData.json';
import {connect} from "react-redux";
import {addCategory, deleteCategory} from "../actions/index";

const groupStyle = {
  marginLeft: '50px',
  flex: 1,
}

class Copy extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   cat1: this.generateItems(5, (i) => ({ id: '1' + i, data: `R${i}` })),
    //   cat2: this.generateItems(5, (i) => ({ id: '2' + i, data: '' })),
    //   cat3: this.generateItems(5, (i) => ({ id: '3' + i, data: `` })),
    //   cat4: this.generateItems(5, (i) => ({ id: '4' + i, data: `` })),
    //   cat5: this.generateItems(5, (i) => ({ id: '5' + i, data: `` })),
    // }
  }

    // generateItems = (count, creator) => {
    //     const result = [];
    //     for (let i = 0; i < count; i++) {
    //         result.push(creator(i));
    //     }
    //     return result;
    // };

    applyDrag = (arr, elem, dragResult) => {
        const { removedIndex, addedIndex, payload } = dragResult;
        if (removedIndex === null && addedIndex === null) return arr;

        let result = [];
        let itemToAdd = payload;

        if (removedIndex !== null) {
            this.props.handleRewardDelete(elem, removedIndex, itemToAdd);
            // result = arr.map((elem, index) => index == addedIndex - 1 ? itemToAdd : elem);
        }

        if (addedIndex !== null) {
            this.props.handleRewardSubmit(elem, addedIndex, itemToAdd);
            // result = arr.map((elem, index) => index == addedIndex - 1 ? itemToAdd : elem);
        }

        return result;
    };

    shouldAnimateDrop = (sourceContainerOptions, payload) => false;

  render() {
    const {categories} = this.props;
    console.log(categories);

    // if (!categories.ca1) return null;
    return (
      <div style={{ display: 'flex', justifyContent: 'stretch', marginTop: '50px', marginRight: '50px' }}>
        <div style={groupStyle}>
        
          <Container lockAxis="x" groupName="1" behaviour="copy" getChildPayload={i => categories.cat1.rewards[i]} onDrop={e => this.applyDrag(categories.cat1.rewards, 'cat1', e)}>
            {
               categories.cat1.rewards.map((p,i) => {
                return (
                  <Draggable key={i}>
                    <div className="draggable-item">
                      {p.data}
                    </div>
                  </Draggable>
                );
              })
            }
          </Container>
        </div>
        <div style={groupStyle}>
          <Container lockAxis="x" groupName="1" autoScrollEnabled={false} shouldAnimateDrop={this.shouldAnimateDrop} getChildPayload={i => categories.cat2.rewards[i]} onDrop={e => this.applyDrag(categories.cat2.rewards,'cat2', e)}>
            {
              categories.cat2 && categories.cat2.rewards.map((p, i) => {
                return (
                  <Draggable key={i}>
                    <div className="draggable-item">
                      {p.data}
                    </div>
                  </Draggable>
                );
              })
            }
          </Container>
        </div>        
        <div style={groupStyle}>
          <Container lockAxis="x" groupName="1" autoScrollEnabled={false} shouldAnimateDrop={this.shouldAnimateDrop} getChildPayload={i => categories.cat3.rewards[i]} onDrop={e => this.applyDrag(categories.cat3.rewards,'cat3', e)}>
            {
              categories.cat3 && categories.cat3.rewards.map(p => {
                return (
                  <Draggable key={p.id}>
                    <div className="draggable-item">
                      {p.data}
                    </div>
                  </Draggable>
                );
              })
            }
          </Container>
        </div>
        <div style={groupStyle}>
          <Container lockAxis="x" groupName="1" autoScrollEnabled={false} shouldAnimateDrop={this.shouldAnimateDrop} getChildPayload={i => categories.cat4.rewards[i]} onDrop={e => this.applyDrag(categories.cat4.rewards, 'cat4', e)}>
            {
              categories.cat4 && categories.cat4.rewards.map(p => {
                return (
                  <Draggable key={p.id}>
                    <div className="draggable-item">
                      {p.data}
                    </div>
                  </Draggable>
                );
              })
            }
          </Container>
        </div>
        <div style={groupStyle}>
          <Container lockAxis="x" groupName="1" autoScrollEnabled={false} shouldAnimateDrop={this.shouldAnimateDrop} getChildPayload={i => categories.cat5.rewards[i]} onDrop={e => this.applyDrag(categories.cat5.rewards, 'cat5', e)}>
            {
              categories.cat5 && categories.cat5.rewards.map(p => {
                return (
                  <Draggable key={p.id}>
                    <div className="draggable-item">
                      {p.data}
                    </div>
                  </Draggable>
                );
              })
            }
          </Container>
        </div>
      </div>
    );
  }
}

Copy.propTypes = {

};

const mapStateToProps = state => {
    return {
      categories: state.categoriesReducer
    }
};
const mapDispatchToProps = dispatch => {
    return {
      handleRewardSubmit: (cat, idx, item) => {
        dispatch(addCategory(cat, idx, item));
      },
      handleRewardDelete: (cat, idx, item) => {
        dispatch(deleteCategory(cat, idx, item));
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Copy);;