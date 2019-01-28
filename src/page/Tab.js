import React from 'React';
import { Tabs } from 'antd';

class MyTab extends React.Component {
    state = {
        activeKey: '1',
    }
    onTabChange = (activeKey) => {
        this.setState({ activeKey });
    }
    render(){
        return(
            <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
                <Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane>
                <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
            </Tabs>
        )
    }
}
export default MyTab;