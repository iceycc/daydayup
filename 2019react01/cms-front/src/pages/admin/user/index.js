import React from 'react';
import {connect} from 'dva';
import {Card,Table,Button,Modal,Form,Input,Popconfirm} from 'antd';
import {routerRedux} from 'dva/router';
import {PAGE_SIZE} from './constants';
const ENTITY = 'user';
export default  @connect(state=>({...state[ENTITY],loading:state.loading.models[ENTITY]})) class User extends React.Component{
    save = (payload)=>{
        this.props.dispatch({type:`${ENTITY}/save`,payload});
    }
    onAdd = ()=>{
        this.save({editVisible:true,isCreate:true});
    }
    onEditCancel = ()=>{
          this.save({editVisible:false});
    }
    onEditOk = ()=>{
        let values = this.editForm.props.form.getFieldsValue();
        this.props.dispatch({
            type:this.props.isCreate?`${ENTITY}/create`:`${ENTITY}/update`,
            payload:values
        })
    }
    onEdit = (record)=>{
         this.save({editVisible:true,record,isCreate:false});
    }
    onDel = (id)=>{
        this.props.dispatch({
            type:`${ENTITY}/del`,
            payload:id
        });
    }
    onDelAll = ()=>{
          this.props.dispatch({
            type:`${ENTITY}/delAll`,
            payload:this.props.selectedRowKeys
         });
    }
    onSearch = ()=>{
        let values = this.searchForm.props.form.getFieldsValue();
        let where = Object.keys(values).reduce((memo,key)=>{
            if(values[key]){
               memo[key] = values[key];
            }
            return memo;
        },{});
        this.props.dispatch({
            type:`${ENTITY}/search`,
            payload:{where}
        });
    }
    render(){
        const columns = [
            {
                title:'用户名',
                dataIndex:'username',
                key:'username'
            },
             {
                title:'邮箱',
                dataIndex:'email',
                key:'email'
            },
             {
                title:'性别',
                dataIndex:'gender',
                key:'gender',
                render:(val,record)=>{
                    return val===0?'女':'男';
                }
            },
             {
                title:'操作',
                key:'operation',
                render:(val,record)=>{
                    return (
                        <>
                          <Button type="warning" onClick={()=>this.onEdit(record)}>编辑</Button>
                          <Popconfirm
                            okText="确认"
                            cancelText="取消"
                            title="请问你确认要删除此用户吗?"
                            onConfirm={()=>this.onDel(record.id)}
                          >
                             <Button style={{marginLeft:10}} type="danger">删除</Button>
                          </Popconfirm>  
                        </>
                    )
                }
            }
        ]
        let {list,pageNum,total,dispatch,loading,editVisible,record,isCreate,
        selectedRowKeys,where} = this.props;
        const pagination = {
            current:pageNum,
            pageSize:PAGE_SIZE,
            total,
            showQuickJumper:true,
            showTotal:(total)=>{
                return `共计${total}条`;
            },
            onChange:(pageNum)=>{
                dispatch(routerRedux.push(`/admin/${ENTITY}?pageNum=${pageNum}`));
            }
        }
        const rowSelection = {
            type:'checkbox',
            selectedRowKeys,
            onChange:(selectedRowKeys)=>{
                this.save({selectedRowKeys});
            }
        }
        const onRow = (record)=>{
            return {
                onClick:()=>{
                    debugger;
                    let selectedRowKeys = this.props.selectedRowKeys;
                    let index = selectedRowKeys.indexOf(record.id);
                    if(index === -1){
                        this.save({
                            selectedRowKeys:[...selectedRowKeys,record.id]
                        });
                    }else{
                        //selectedRowKeys = selectedRowKeys.filter(item=>item!==record.id);
                        this.save({
                            selectedRowKeys:[...selectedRowKeys.slice(0,index),...selectedRowKeys.slice(index+1)]
                        });
                    }

                }
            }
        }
        return (
            <>
                <Card>
                    <SearchForm
                      where={where}
                      onSearch={this.onSearch}
                      wrappedComponentRef={inst=>this.searchForm=inst}
                    />
                </Card>
                <Card>
                    <Button.Group>
                    <Button type="warning" onClick={this.onAdd}>增加</Button>
                    <Button style={{marginLeft:'10px'}} type="danger" onClick={this.onDelAll}>全部删除</Button>
                    </Button.Group>
                    <Table
                        columns={columns}
                        dataSource={list}
                        pagination={pagination}
                        loading={loading}
                        rowKey={row=>row.id}
                        rowSelection={rowSelection}
                        onRow={onRow}
                    />
                    <EditModal
                    visible={editVisible}
                    onOk={this.onEditOk}
                    onCancel={this.onEditCancel}
                    record={record}
                    wrappedComponentRef ={inst=>this.editForm=inst}
                    isCreate={isCreate}
                    />
                </Card>
            </>
        )
    }
}

@Form.create()
class SearchForm extends React.Component{
    render(){
        let {form:{getFieldDecorator},onSearch} = this.props;
        return (
            <Form layout="inline">
               <Form.Item label="用户名">
                    {getFieldDecorator('username',{
                        initialValue:''
                    })(
                        <Input/>
                    )}
                 </Form.Item>
                  <Form.Item label="邮箱">
                    {getFieldDecorator('email',{
                         initialValue:''
                    })(
                        <Input/>
                    )}
                 </Form.Item>
                  <Form.Item>
                    <Button onClick={onSearch} shape="circle" icon="search"/>
                 </Form.Item>
            </Form>
        )
    }
}

@Form.create()
class EditModal extends React.Component{
    render(){
        let {visible,onOk,onCancel,form:{getFieldDecorator},record,isCreate} = this.props;
        return (
            <Modal
              title={isCreate?"增加用户":'修改用户'}
              visible={visible}
              onOk={onOk}
              onCancel={onCancel}
              destroyOnClose={true}
            >
               <Form>
               {
                   !isCreate&& 
                    getFieldDecorator('id',{
                        initialValue:record.id
                    })(
                        <Input type="hidden"/>
                    )
               }
               
                 <Form.Item label="用户名">
                    {getFieldDecorator('username',{
                        initialValue:record.username
                    })(
                        <Input/>
                    )}
                 </Form.Item>
                  <Form.Item label="邮箱">
                    {getFieldDecorator('email',{
                         initialValue:record.email
                    })(
                        <Input/>
                    )}
                 </Form.Item>
               </Form>
            </Modal>
        )
    }
}