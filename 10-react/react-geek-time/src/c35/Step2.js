import React, { Component } from "react";
import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import FormBuilder from "../c29/FormBuilder";

const Option = Select.Option;

const formMeta = {
  colon: true,
  columns: 1,
  elements: [
    { key: "userName", label: "用户名", widget: Input },
    { key: "password", label: "密码", widget: Input, type: "password" },
    { key: "birthday", label: "生日", widget: DatePicker }
  ]
};

class Step2 extends Component {
  componentDidMount() {
    this.props.form.setFieldsValue(this.props.allValues);
  }
  render() {
    return (
      <div>
        <FormBuilder meta={formMeta} form={this.props.form} />
      </div>
    );
  }
}

export default Step2;
