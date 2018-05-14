import React from 'react';

import { TabBar } from 'antd-mobile';

import HomePage from './containers/HomePage';
import PersonalPage from './containers/PersonalPage';

import { PageName } from './constants/pageName';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: PageName.personalPage.key,
            hidden: false
        };
    }

    renderContent(pageKey) {
        switch(pageKey) {
            case PageName.homePage.key:
                return <HomePage browserHistory={this.props.history}/>;
            case PageName.personalPage.key:
                return <PersonalPage browserHistory={this.props.history}/>;
            default:
                return <HomePage browserHistory={this.props.history}/>;
        }
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title={PageName.homePage.title}
                        key={PageName.homePage.key}
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selected={this.state.selectedTab === PageName.homePage.key}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: PageName.homePage.key,
                            });
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent(PageName.homePage.key)}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title={PageName.personalPage.title}
                        key={PageName.personalPage.key}
                        selected={this.state.selectedTab === PageName.personalPage.key}
                        onPress={() => {
                            this.setState({
                                selectedTab: PageName.personalPage.key,
                            });
                        }}
                    >
                        {this.renderContent(PageName.personalPage.key)}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default App;