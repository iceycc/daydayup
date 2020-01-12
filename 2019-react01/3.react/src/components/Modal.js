import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './modal.css'
// ReactDOM.createPortal
class Modal extends Component {
  constructor(){
    super();
  }
  render(){
     return ReactDOM.createPortal(this.props.children,document.getElementById('modal-root'));
  }
}

export default class Page extends Component{
    constructor(){
        super();
        this.state = {showModal:false};
    }
    toggleModal = ()=>{
        this.setState({showModal:!this.state.showModal});
    }
    render(){
        return (
            <div>
                <button onClick={this.toggleModal}>显示/关闭模态窗口</button>
                {
                    this.state.showModal&&(
                        <Modal>
                            <div id="modal" className="modal">
                                <div id="content" className="content"> 
                                    主体内容
                                    <button onClick={this.toggleModal}>关闭</button>    
                                </div>
                            </div>
                        </Modal>
                    )
                }
            </div>
        )
    }
}