import React from 'react';

import PropTypes from 'prop-types';

import { WingBlank, ListView, Modal } from 'antd-mobile';

import HardItem from '../../components/HarpItem.jsx';
import Spin from '../../components/Gif';
import {genFocusHarmList} from "../../services/home"
import {intoHarmDetailPage} from "../../routes/route";

class Index extends React.Component {

    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            dataSource,
            isLoading: true,
            hasMore: true
        };

        this.numRows = 15;
    }

    componentDidMount() {
        if (this.props.harmList.length === 0) {
            genFocusHarmList(this.props.pageIndex + 1, this.numRows);
        } else {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.props.harmList),
                isLoading: false
            });
        }
    }

    // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    componentWillReceiveProps(nextProps) {
        if (nextProps.harmList !== this.props.harmList) {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(nextProps.harmList),
                isLoading: false
            });
        }
    }

    render() {
        const row = (rowData) => {
            return (
                <HardItem forgnization={rowData.forgnization} fpic={rowData.fpic} foname={rowData.foname} fctime={rowData.fctime} handleClick={() => intoHarmDetailPage(this, rowData.forganization)}/>
            );
        };

        return (
            <WingBlank size='md'>
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderFooter={() => (<div style={{ padding: 10, textAlign: 'center' }}>
                        {this.state.isLoading ? <Spin/> : this.state.hasMore ? '---Loaded---' : "---别扯啦，到底了---"}
                    </div>)}
                    renderRow={row}
                    style={{height: window.screen.height - 50}}
                    pageSize={this.numRows}
                    onScroll={() => {}}
                    scrollRenderAheadDistance={10}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={50}
                />
            </WingBlank>
        );
    }

    onEndReached = () => {
        if (this.state.isLoading || !this.state.hasMore) {
            return;
        }
        this.setState({ isLoading: true});
        genFocusHarmList(this.props.pageIndex + 1, this.numRows);
        this.setState({ isLoading: false});
    };
}

Index.propTypes = {
    browserHistory: PropTypes.object
};

export default Index;