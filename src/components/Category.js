import React from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { CloseCircleOutlined } from '@ant-design/icons';

class Category extends React.Component {
    constructor(props) {
        super(props)
        this.handleCloseEvent = this.handleCloseEvent.bind(this);
    }

    handleCloseEvent(id, i, e) {
        this.props.handleClose(id, i, e);
    }

    render() {
        const {shouldAnimateDrop, categories, applyDrag, id, behavior} = this.props;
    
        return (
            <div>
                <Container lockAxis="x" groupName="1" behaviour={behavior} shouldAnimateDrop={shouldAnimateDrop} getChildPayload={i => categories[id].rewards[i]} onDrop={e => applyDrag(categories[id].rewards, id, e)}>
                    {categories[id].rewards.map((p,i) => {
                        return (
                            <Draggable key={i}>
                                <div className="draggable-item">
                                    {p.data}
                                    {p.data && id !== 'cat1' ? <CloseCircleOutlined onClick={this.props.handleClose.bind(this, id, i)}/> : null}
                                </div>
                            </Draggable>
                        );
                    })}
                </Container>
            </div>
        );
    }
}

export default Category;