import React from 'react';
import { Button, Row, Col, Divider } from 'antd';
import CustomRow from './CustomRow';
import Copy from './Copy';
import '../assets/App.css';
import {connect} from "react-redux";
import { undoHistory, redoHistory, save} from "../actions/index";


import { UndoOutlined, RedoOutlined, SaveOutlined } from '@ant-design/icons';

class App extends React.Component {
    handleUndo = (e) => {
        this.props.dispatch(undoHistory());
    }

    handleRedo = (e) => {
        this.props.dispatch(redoHistory());
    }

    handleSave = (e) => {
        this.props.dispatch(save());
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
                        disabled={!this.props.myHistory.curr}
                        onClick={(e) => this.handleUndo(e)}
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
                        disabled={this.props.myHistory.curr >= this.props.myHistory.stack.length - 1}
                        onClick={(e) => this.handleRedo(e)}
                        >
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        myHistory: state.categoriesReducer
    }
};

export default connect(mapStateToProps)(App);