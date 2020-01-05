import React from 'react';
import {connect} from 'dva';
import {Card,Table,Button,Modal,Form,Input,Popconfirm,message,Tree,Transfer} from 'antd';
import {routerRedux} from 'dva/router';
import {PAGE_SIZE} from './constants';
const TreeNode = Tree.TreeNode;
const ENTITY = 'role';
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
    setRoleResource = ()=>{//给角色授与资源
        let selectedRowKeys = this.props.selectedRowKeys;
        if(selectedRowKeys.length === 1){
            let record = this.props.selectedRows[0];
            this.save({record,resourceVisible:true});
        }else{
            message.error('为角色授权时能且仅能给一个角色授权');
        }
    }
    onCheck = (checkedKeys)=>{
        this.save({checkedKeys});
    }
    setRoleResourceCancel = ()=>{
        this.save({resourceVisible:false});
    }
    setRoleResourceOk = ()=>{
        this.props.dispatch({
            type:'role/setRoleResource'
        });
    }
    setRoleUser = ()=>{//给角色授与资源
        let selectedRowKeys = this.props.selectedRowKeys;
        if(selectedRowKeys.length === 1){
            let record = this.props.selectedRows[0];
            this.save({record,userVisible:true,targetKeys:record.userIds});
        }else{
            message.error('为角色授权时能且仅能给一个角色授权');
        }
    }
    setRoleUserCancel = ()=>{
        this.save({userVisible:false});
    }
    setRoleUserOk = ()=>{
        this.props.dispatch({
            type:'role/setRoleUser'
        });
    }
    onUserChange = (targetKeys)=>{
        this.save({targetKeys});
    }
    render(){
        const columns = [
            {
                title:'角色名称',
                dataIndex:'name',
                key:'name'
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
                            title="请问你确认要删除此角色吗?"
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
        selectedRowKeys,where,resourceVisible,checkedKeys,resources,
        userVisible,users,targetKeys} = this.props;
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
            onChange:(selectedRowKeys,selectedRows)=>{
                this.save({selectedRowKeys,selectedRows});
            }
        }
        const onRow = (record)=>{
            return {
                onClick:()=>{
                    let selectedRowKeys = this.props.selectedRowKeys;
                     let selectedRows = this.props.selectedRows;
                    let index = selectedRowKeys.indexOf(record.id);
                    if(index === -1){
                        this.save({
                            selectedRowKeys:[...selectedRowKeys,record.id],
                            selectedRows:[...selectedRows,record]
                        });
                    }else{
                        //selectedRowKeys = selectedRowKeys.filter(item=>item!==record.id);
                        this.save({
                            selectedRowKeys:[...selectedRowKeys.slice(0,index),...selectedRowKeys.slice(index+1)],
                             selectedRows:[...selectedRows.slice(0,index),...selectedRows.slice(index+1)]
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
                    <Button style={{marginLeft:'10px'}} type="warning" onClick={this.setRoleResource}>角色授权</Button>
                     <Button style={{marginLeft:'10px'}} type="warning" onClick={this.setRoleUser}>分配用户</Button>
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
                    <ResourceModal
                        visible={resourceVisible}
                        onOk={this.setRoleResourceOk}
                        onCancel={this.setRoleResourceCancel}
                        record={record}
                        checkedKeys= {checkedKeys}
                        onCheck={this.onCheck}
                        resources={resources}    
                    />
                    <UserModal
                       visible={userVisible}
                       onOk={this.setRoleUserOk}
                       onCancel={this.setRoleUserCancel}
                       record={record}
                       targetKeys= {targetKeys}
                       onChange={this.onUserChange}
                       users={users}
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
               <Form.Item label="角色名称">
                    {getFieldDecorator('name',{
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

class UserModal extends React.Component{
    render(){
        let {visible,onOk,onCancel,onChange,targetKeys,users} = this.props;
        return (
            <Modal
              title="设置权限"
              visible={visible}
              onOk={onOk}
              onCancel={onCancel}
              destroyOnClose={true}
            >
                <Transfer
                  dataSource={users}
                  targetKeys={targetKeys}
                  titles={["待选用户","已选用户"]}
                  onChange={onChange}
                  render={row=>row.username}
                  rowKey={row=>row.id}  
                />
            </Modal>
        )
    }
}
class ResourceModal extends React.Component{
    renderTree = (resources)=>{
      return resources.map(resource=>{
          if(resource.children.length>0){
              return (
                  <TreeNode title={resource.name} key={resource.id}>
                        {this.renderTree(resource.children)}
                  </TreeNode>
              )
          }else{
              return <TreeNode title={resource.name} key={resource.id}/>
          }
      });
    }
    render(){
        let {visible,onOk,onCancel,onCheck,checkedKeys,resources} = this.props;
        return (
            <Modal
              title="设置权限"
              visible={visible}
              onOk={onOk}
              onCancel={onCancel}
              destroyOnClose={true}
            >
                <Tree
                  checkable
                  defaultExpandAll={true}
                  onCheck={onCheck}
                  checkedKeys={checkedKeys}  
                >
                    <TreeNode title="分配权限" key={0} disabled={true}>
                        {this.renderTree(resources)}
                    </TreeNode>
                </Tree>
            </Modal>
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
               
                 <Form.Item label="角色名称">
                    {getFieldDecorator('name',{
                        initialValue:record.username
                    })(
                        <Input/>
                    )}
                 </Form.Item>
               </Form>
            </Modal>
        )
    }
}