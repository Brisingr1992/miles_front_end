import React from 'react';
import { Button, Row, Col, Divider } from 'antd';
import CustomRow from './CustomRow';
import Copy from './Copy';
import '../assets/App.css';

import { UndoOutlined, RedoOutlined, SaveOutlined } from '@ant-design/icons';

class App extends React.Component {
    constructor(props) {
        super(props);
        // this.renderCustomRow = this.renderCustomRow.bind(this);
    }

    // renderCustomRow() {
    //     return Data.rewards.map((reward, index) => {
    //         return (
    //             <CustomRow  key={reward.id}
    //                         reward={reward}
    //                         categories={Data.categories}
    //             />
    //         );
    //     });
    // }

    handleSave = (e) => {
        e.preventDefault();
        console.log(e);
    }

    render() {
        return (
            <div className="App">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{marginLeft: '50px', flex: 1, borderBottom: '1px solid black', textAlign: 'center' }}>Rewards</div>
                    <div style={{marginLeft: '50px', flex: 1, borderBottom: '1px solid black', textAlign: 'center' }}>Categories</div>
                </div>
                <Copy />
                <div>
                    <Button
                        type="primary"
                        icon={<UndoOutlined />}
                        onClick={(e) => this.handleSave(e)}
                        >
                    </Button>
                    <Button
                        type="primary"
                        icon={<SaveOutlined />}
                        onClick={(e) => this.handleSave(e)}
                        >
                        Save
                    </Button>
                    <Button
                        type="primary"
                        icon={<RedoOutlined />}
                        onClick={(e) => this.handleSave(e)}
                        >
                    </Button>
                </div>
            </div>
        );
    }
}

export default App;