import React, { Component } from 'react';
import {connect} from "react-redux";

import { addCategory, deleteCategory} from "../actions/index";
import { Row, Col } from 'antd';
import Category from './Category';

class DragAndDrop extends Component {
	constructor(props) {
		super(props);
		this.applyDrag = this.applyDrag.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

    applyDrag = (arr, elem, dragResult) => {
        const { removedIndex, addedIndex, payload } = dragResult;
        if (removedIndex === null && addedIndex === null) return arr;

        let result = [];
        let itemToAdd = payload;

        if (removedIndex !== null) {
            this.props.handleRewardDelete(elem, removedIndex);
        }

        if (addedIndex !== null) {
            this.props.handleRewardSubmit(elem, addedIndex, itemToAdd);
        }

        return result;
    };

    shouldAnimateDrop = (sourceContainerOptions, payload) => false;
    handleClose = (categories, idx, e) => {
        this.props.handleRewardDelete(categories, idx);
    }

  render() {
    let hist = this.props.myHistory;
    let curr = hist.curr;

    const categories = hist.stack[curr]
    
    return (
      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
			<Col className="gutter-row" span={3} style={{marginLeft: '5px', }}>
				<Category shouldAnimateDrop={this.shouldAnimateDrop}
					categories={categories}
					applyDrag={this.applyDrag}
					id="cat1"
					behavior="copy"
				/>
			</Col>
			<Col className="gutter-row" span={4}>
				<Category shouldAnimateDrop={this.shouldAnimateDrop}
					categories={categories}
					applyDrag={this.applyDrag}
					id="cat2"
					handleClose={this.handleClose}
				/>
			</Col>
			<Col className="gutter-row" span={4}>
				<Category shouldAnimateDrop={this.shouldAnimateDrop}
					categories={categories}
					applyDrag={this.applyDrag}
					id="cat3"
					handleClose={this.handleClose}
				/>
			</Col>
			<Col className="gutter-row" span={4}>
				<Category shouldAnimateDrop={this.shouldAnimateDrop}
					categories={categories}
					applyDrag={this.applyDrag}
					id="cat4"
					handleClose={this.handleClose}
				/>
			</Col>
			<Col className="gutter-row" span={4}>
				<Category shouldAnimateDrop={this.shouldAnimateDrop}
					categories={categories}
					applyDrag={this.applyDrag}
					id="cat5"
					handleClose={this.handleClose}
				/>
			</Col>
			<Col className="gutter-row" span={4}>
				<Category shouldAnimateDrop={this.shouldAnimateDrop}
					categories={categories}
					applyDrag={this.applyDrag}
					id="cat6"
					behavior="copy"
				/>
			</Col>
        </Row>
      </div>
    );
  }
}

DragAndDrop.propTypes = {}

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

export default connect(mapStateToProps, mapDispatchToProps)(DragAndDrop);;