import React from 'react';
import {Layout,Form,Icon,Input,Checkbox,Cascader,Select,AutoComplete,Button,Radio,Row,Col} from 'antd';
import styled from 'styled-components';
import {connect} from 'dva';
import {addressOptions} from './constants';
const {Content} = Layout;
const FormItem = Form.Item;
const captchaUrl = 'http://127.0.0.1:7001/api/captcha';
class Login extends React.Component{
    handleSubmit = (event)=>{
        event.preventDefault();
        //thisis.loginForm.props.form.getFeildsValue is not a function
        
        let values = this.loginForm.props.form.getFieldsValue();
        this.props.dispatch({
                    type:this.props.isLogin?"login/signin":'login/signup',
                    payload:values
         });
       /*  this.loginForm.props.form.validateFields((error,values)=>{
            debugger;
            if(error){
                message.error('表单字段输入不合法');
            }else{
                this.props.dispatch({
                    type:'login/signup',
                    payload:values
                });
            }
        }); */
    }
    save = (payload)=>{
        this.props.dispatch({
            type:'login/save',
            payload
        });
    }
    changeLoginStatus = ()=>{
        this.save({isLogin:!this.props.isLogin});
    }

    render(){
        return (
            <Layout>
              <Content>
                <LoginForm
                   wrappedComponentRef={instance=>this.loginForm=instance}
                   handleSubmit={this.handleSubmit}
                   isLogin={this.props.isLogin}
                   changeLoginStatus={this.changeLoginStatus}
                />
              </Content>
            </Layout>
        )
    }
}
/* class WrappedComponent extends React.Component{
   render(){
       let wrappedComponentRef = this.props.wrappedComponentRef;
       let form={getFieldDecorator}
       return <LoginForm form={form} ref={inst=>wrappedComponentRef(inst))}/>
   }
} */
@Form.create()
class LoginForm extends React.Component{
    state={autoCompleteOptions:[],rePasswordDirty:false}
    handleRepasswordBlur = (event)=>{
        this.setState({rePasswordDirty:this.state.rePasswordDirty||!!event.target.value});
    }
    handleWebsiteChange = (value)=>{// a => [a.com,a.cn,a.org]
        let autoCompleteOptions = this.state.autoCompleteOptions;
        if(value){
            autoCompleteOptions = ['.com','.cn','.org'].map(domain=>value+domain);
        }else{
            autoCompleteOptions = [];
        }
        this.setState({autoCompleteOptions});
    }
    //自定义的较验方法 rule={validator:this.comparePassword}]
    comparePassword = (rule,value,callback)=>{
        let password = this.props.form.getFieldValue('password');
        if(value === password){
            callback();
        }else{
            callback('密码和确认密码不一致');
        }
    }//验证密码
    validateRepassword = (rule,value,callback)=>{
         this.state.rePasswordDirty&&this.props.form.validateFields(['repassword'],{force:true});
    }
    refreshCaptcha =(event)=>{
        event.target.src = captchaUrl+'?ts='+Date.now();
    }
    render(){
        let {handleSubmit,form:{getFieldDecorator},isLogin,changeLoginStatus} = this.props;
        const formItemLayout = {
            labelCol:{
                span:4
            },
            wrapperCol:{
                span:20
            }
        }
        const formTailItemLayout = {
            wrapperCol:{
                span:20,
                offset:4
            }
        }
        const formLastItemLayout = {
            wrapperCol:{
                span:24
            }
        }
        const countrySelector = getFieldDecorator('prefix',{
            initialValue:'086'
        })(<Select>
           <Select.Option value="086">086</Select.Option>
           <Select.Option value="087">087</Select.Option>
        </Select>);
        const websiteOptions = this.state.autoCompleteOptions.map(option=>(
            <AutoComplete.Option key={option}>{option}</AutoComplete.Option>
        ));
        return (
            <FormWrapper>
               <Form  onSubmit={handleSubmit} style={{width:isLogin?'380px':'500px'}} {...formItemLayout}>
                  <h3>欢迎注册</h3>
                  <FormItem label="用户名" >
                    {
                        getFieldDecorator('username',{
                            rules:[{required:true,message:'用户名必须输入!'}]
                        })(<Input prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}}/>}/>)
                    }
                  </FormItem>
                  <FormItem label="密码" >
                    {
                        getFieldDecorator('password',{
                            rules:[{required:true,message:'密码必须输入!'},
                            {validator:this.validateRepassword}]
                        })(<Input.Password prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}}/>}/>)
                    }
                  </FormItem>
                  {
                      !isLogin&&<FormItem label="确认密码" >
                    {
                        getFieldDecorator('repassword',{
                            rules:[{required:true,message:'确认密码必须输入!'},
                            {validator:this.comparePassword}]
                        })(<Input.Password onBlur={this.handleRepasswordBlur} prefix={<Icon type="lock" style={{color:'rgba(0,0,0,.25)'}}/>}/>)
                    }
                  </FormItem>
                  }
                   {
                       !isLogin&&<FormItem label="邮箱" >
                    {
                        getFieldDecorator('email',{
                            rules:[{required:true,message:'邮箱必须输入!'},{email:true,message:'邮箱格式不合法!'}]
                        })(<Input prefix={<Icon type="mail" style={{color:'rgba(0,0,0,.25)'}}/>}/>)
                    }
                  </FormItem>
                   }
                   {
                       !isLogin&&<FormItem label="性别" >
                    {
                        getFieldDecorator('gender')( 
                        <Radio.Group >
                            <Radio value={1} checked={true}>男</Radio>
                            <Radio value={0}>女</Radio>
                        </Radio.Group>)
                    }
                  </FormItem>
                   }
   

                 {
                       !isLogin&&<FormItem label="住址" >
                    {
                        getFieldDecorator('address',{
                            initialValue:["zhejiang","hangzhou","xihu"],
                            rules:[{type:'array',required:true,message:'住址必须输入!'}]
                        })(<Cascader options={addressOptions}/>)
                    }
                  </FormItem>
                   }

                  {
                       !isLogin&&<FormItem label="手机号" >
                    {
                        getFieldDecorator('phone',{
                            rules:[{required:true,message:'手机号必须输入!'}]
                        })(<Input addonBefore={countrySelector} style={{width:'100%'}}/>)
                    }
                  </FormItem>
                   }

                  {
                       !isLogin&&<FormItem label="个人主页" >
                    {
                        getFieldDecorator('website',{
                            rules:[{required:true,message:'个人主页必须输入!'}]
                        })(<AutoComplete
                          dataSource={websiteOptions}
                          onChange={this.handleWebsiteChange}
                          placehold="请输入网址"
                        >
                           <Input/>
                        </AutoComplete>)
                    }
                  </FormItem>
                   }
                   {
                       !isLogin&&<FormItem label="验证码">
                            <Row>
                                <Col span={16}>
                                    {
                                        getFieldDecorator('captcha',{
                                            rules:[{required:true,message:'验证码必须输入!'}]
                                        })(
                                            <Input/>
                                        )
                                    }
                                </Col>
                                <Col span={8}>
                                    <img src={captchaUrl} alt="captcha" onClick={this.refreshCaptcha}/>
                                </Col>
                            </Row>
                        </FormItem> 
                   }
                   
                  {
                       !isLogin&&<FormItem {...formTailItemLayout}>
                    {
                        getFieldDecorator('aggrement',{
                            valuePropName:'checked'
                        })(
                            <Checkbox>我已经阅读并同意<a href="#">协议</a></Checkbox>
                        )
                    }
                  </FormItem>
                   }

                  <FormItem {...formLastItemLayout}>
                     <Button type="primary" htmlType="submit" style={{width:'100%'}}>{isLogin?'登录':'注册'}</Button>
                     {isLogin?'没有账号':'已有账号'}<a href="#" onClick={changeLoginStatus}>{isLogin?'立刻注册':'立刻登录'}</a>
                  </FormItem>
               </Form>
            </FormWrapper>
        )
    }
}
const FormWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:calc(100vh);
  h3{
      text-align:center;
  }
  form{
      border:1px solid #999;
      border-radius:5px;
      padding:20px;
  }
`

export default connect(
    state=>state.login
)(Login);
//css in js

