import React from 'react';
import { Card } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

class CustomCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const closeIcon = this.props.icon ? <CloseCircleOutlined /> : null;
        const text = this.props.name ? <p>{this.props.name}</p> : null;

        return (
            <Card size="small" extra={closeIcon} style={{ marginBottom: 5 }}>
                {text}
            </Card>
        );
    }
}

export default CustomCard;