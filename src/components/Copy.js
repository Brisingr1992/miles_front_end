import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
// import Data from '../seedData.json';
import {connect} from "react-redux";
import { addCategory, deleteCategory, undoHistory, redoHistory} from "../actions/index";
import { CloseCircleOutlined } from '@ant-design/icons';

const groupStyle = {
  marginLeft: '50px',
  flex: 1,
}

class Copy extends Component {
    applyDrag = (arr, elem, dragResult) => {
        const { removedIndex, addedIndex, payload } = dragResult;
        if (removedIndex === null && addedIndex === null) return arr;

        let result = [];
        let itemToAdd = payload;

        if (removedIndex !== null) {
            this.props.handleRewardDelete(elem, removedIndex);
            // result = arr.map((elem, index) => index == addedIndex - 1 ? itemToAdd : elem);
        }

        if (addedIndex !== null) {
            this.props.handleRewardSubmit(elem, addedIndex, itemToAdd);
            // result = arr.map((elem, index) => index == addedIndex - 1 ? itemToAdd : elem);
        }

        return result;
    };

    shouldAnimateDrop = (sourceContainerOptions, payload) => false;
    handleClose = (categories, idx, e) => {
        e.preventDefault();
        this.props.handleRewardDelete(categories, idx);
    }

  render() {
    const _that = this;
    let hist = this.props.myHistory;
    let curr = hist.curr;

    const categories = hist.stack[curr]
    
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
                      {p.data ? <CloseCircleOutlined onClick={_that.handleClose.bind(_that, 'cat2', i)}/> : null}
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
              categories.cat3 && categories.cat3.rewards.map((p, i) => {
                return (
                  <Draggable key={p.id}>
                    <div className="draggable-item">
                      {p.data}
                      {p.data ? <CloseCircleOutlined onClick={_that.handleClose.bind(_that, 'cat3', i)}/> : null}
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
              categories.cat4 && categories.cat4.rewards.map((p, i) => {
                return (
                  <Draggable key={p.id}>
                    <div className="draggable-item">
                      {p.data}
                      {p.data ? <CloseCircleOutlined onClick={_that.handleClose.bind(_that, 'cat4', i)}/> : null}
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
              categories.cat5 && categories.cat5.rewards.map((p, i) => {
                return (
                  <Draggable key={p.id}>
                    <div className="draggable-item">
                      {p.data}
                      {p.data ? <CloseCircleOutlined onClick={_that.handleClose.bind(_that, 'cat5', i)}/> : null}
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
        myHistory: state.categoriesReducer
    }
};
const mapDispatchToProps = dispatch => {
    return {
      handleRewardSubmit: (cat, idx, item) => {
        dispatch(addCategory(cat, idx, item));
      },
      handleRewardDelete: (cat, idx) => {
        dispatch(deleteCategory(cat, idx));
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Copy);;