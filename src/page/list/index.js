import React from 'react';
import { Table, Modal, Button, Form, Input } from 'antd';
import { connect } from 'dva';


function mapStateToProps(state) {
    return {
      cardsList: state.cards.cardsList,
      cardsLoading: state.loading.effects['cards/queryList'],
    };
  }

class List extends React.Component {
    showModal = () => {
        this.setState({ visible: true });
    };
    state = {
        visible: false,
    };
    columns = [
        {
          title: '名称',
          dataIndex: 'name',
          render: value => <a href={value}>{value}</a>,
        },
        {
          title: '描述',
          dataIndex: 'desc',
          render: value => <a href={value}>{value}</a>,
        },
        {
          title: '链接',
          dataIndex: 'url',
          render: value => <a href={value}>{value}</a>,
        },
    ];
    componentDidMount() {
        this.props.dispatch({
          type: 'cards/queryList',
        });
    }
    render() {
        const { cardsList, cardsLoading } = this.props;
        const { visible } = this.state;
        const { form: { getFieldDecorator } } = this.props;
        return (
            <div>
                <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
                <Button onClick={this.showModal}>新建</Button>
                <Modal
                    title="新建记录"
                    visible={visible}
                    >
                    <Form>
                        <Form.FormItem label="名称">
                        {getFieldDecorator('name', {
                            rules: [{ required: true }],
                        })(
                            <Input />
                        )}
                        </Form.FormItem>
                        <Form.FormItem label="描述">
                        {getFieldDecorator('desc')(
                            <Input />
                        )}
                        </Form.FormItem>
                        <Form.FormItem label="链接">
                        {getFieldDecorator('url', {
                            rules: [{ type: 'url' }],
                        })(
                            <Input />
                        )}
                        </Form.FormItem>
                    </Form>
                    </Modal>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Form.create()(List));