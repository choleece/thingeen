import React from 'react';

import PropTypes from 'prop-types';

import { SearchBar, ListView } from 'antd-mobile';

import HardItem from '../../components/HarpItem.jsx';
import Spin from '../../components/Gif';
import {genHarmList} from "../../actions/home"
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
            genHarmList(this, this.props.pageIndex + 1, this.numRows);
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
                <HardItem oOrganization={rowData.nameIndex} handleClick={() => (intoHarmDetailPage(this, rowData.oOrganization))}/>
            );
        };

        return (
            <div style={{height: window.screen.height}}>
                <SearchBar placeholder='搜索您感兴趣的琴行'/>
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderHeader={() => {}}
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
            </div>
        );
    }

    onEndReached = () => {
        // load new data
        // hasMore: from backend data, indicates whether it is the last page, here is false
        if (this.state.isLoading || !this.state.hasMore) {
            return;
        }
        console.log('reach the end...')
        this.setState({ isLoading: true});
        genHarmList(this, this.props.pageIndex + 1, this.numRows);
        this.setState({ isLoading: false});
    };
}

Index.propTypes = {
    browserHistory: PropTypes.object
};

export default Index;