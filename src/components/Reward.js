import React from 'react';
import { Divider } from 'antd';
import CustomCard from './CustomCard';
import { Container, Draggable } from 'react-smooth-dnd';

import '../assets/App.css';

class Reward extends React.Component {
    constructor(props) {
        super(props)
        this.renderCards = this.renderCards.bind(this);
    }

    renderCards() {
        return ;
    }

    render() {
        return (
            <div className="">
                <Container lockAxis="y">
                    {this.props.rewards.map(reward => {
                        return (
                            <Draggable key={reward.id}>
                                <div className="draggable-item">
                                    <CustomCard name={reward.name} />
                                </div>
                            </Draggable>
                        );
                    })}
                </Container>
            </div>
        );
    }
}

export default Reward;