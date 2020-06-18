import React from 'react';
import { Row, Col } from 'antd';
import CustomCard from './CustomCard';
import { Container, Draggable } from 'react-smooth-dnd';

import '../assets/App.css';

class CustomRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [false, false, false, false, false]
        }
    }
    generateItems = (count, creator) => {
        const result = [];
        for (let i = 0; i < count; i++) {
          result.push(creator(i));
        }
        return result;
      };
    handleDrop(e) {
        console.log(e);
    }

    applyDrag = (arr, dragResult) => {
        const { removedIndex, addedIndex, payload } = dragResult;
        if (removedIndex === null && addedIndex === null) return arr;
        
        const result = [...arr];
        let itemToAdd = payload;
        
        if (removedIndex !== null) {
            itemToAdd = result.splice(removedIndex, 1)[0];
        }
        
        if (addedIndex !== null) {
            result.splice(addedIndex, 0, itemToAdd);
        }
        
        return result;
    };
      
    render() {
        const cards = this.state.categories.map((categoryReward, index) => {
            return (
                <Col key={index} className="gutter-row" span={3}>
                    <Draggable>
                        <div className="draggable-item box">
                            <CustomCard name={this.props.reward.name} icon="true" />
                        </div>
                    </Draggable>
                </Col>
            );
        });

        return (
            <Container lockAxis="x" onDrop={e => this.setState({ items: this.applyDrag(this.state.items, e) })}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
                    <Col className="gutter-row" span={5}>
                        <Draggable>
                            <div className="draggable-item">
                                <CustomCard name={this.props.reward.name} />
                            </div>
                        </Draggable>
                    </Col>
                    {cards}
                </Row>
          </Container>
                    
        );
    }
}

export default CustomRow;