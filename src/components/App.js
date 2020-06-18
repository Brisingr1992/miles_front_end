import React from 'react';
import { Button, Row, Col } from 'antd';
import DragAndDrop from './DragAndDrop';
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
                <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
                        <Col className="gutter-row" span={5}>
                            <div style={{marginLeft: '50px', flex: 1, borderBottom: '1px solid black', textAlign: 'center' }}>Rewards</div>
                        </Col>
                        <Col className="gutter-row" span={18}>
                        <div style={{marginLeft: '50px', flex: 1, borderBottom: '1px solid black', textAlign: 'center' }}>Categories</div>   
                        </Col>
                    </Row>
                </div>
                <div style={{ }}>
                    <DragAndDrop />
                </div>
                <div style={{ marginTop: '50px'}}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
                        <Col className="gutter-row" span={6}>
                            <Button
                                type="primary"
                                icon={<UndoOutlined />}
                                disabled={!this.props.myHistory.curr}
                                onClick={(e) => this.handleUndo(e)}
                                >
                            </Button>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Button
                                type="primary"
                                icon={<SaveOutlined />}
                                onClick={(e) => this.handleSave(e)}
                            >
                            Save
                            </Button>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Button
                                type="primary"
                                icon={<RedoOutlined />}
                                disabled={this.props.myHistory.curr >= this.props.myHistory.stack.length - 1}
                                onClick={(e) => this.handleRedo(e)}
                            >
                            </Button>
                        </Col>
                    </Row>
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