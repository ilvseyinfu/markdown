import React, { Component } from 'react';
import marked from 'marked';
import 'github-markdown-css';
import 'bulma/css/bulma.css';
import './style.css';

export default class Markdown extends Component {


  constructor(props) {
    super(props);
    this.state = {
      _data: ''
    }
    this.myRef = React.createRef();

  }
  change(field, e) {
    this.setState({
      [field]: e.target.value
    }, () => {
      localStorage.setItem('_data', this.state._data);  
    })

    
  }

  componentDidMount() {
    var _data = localStorage.getItem('_data');
    if(_data) {
      this.setState({_data})
    }
  }

  textarea() {
    return (
      <div className="field left">
        <div className="control">
          <textarea ref={this.myRef} className="textarea is-primary markdown-body" placeholder="Primary textarea"
            value={this.state._data}
            onChange={this.change.bind(this, '_data')}
          />
        </div>
      </div>
    )
  }

  markdown() {
    const html = marked(this.state._data);
    return (
      <div className="field right">
        <div className="control">
          <div className="textarea is-info markdown-body"
            dangerouslySetInnerHTML={{__html: html}}
          ></div>
        </div>
      </div>      
    )  
  }

  handle(field) {
    var txt = this.myRef.current;
    var start = txt.selectionStart;
    var end = txt.selectionEnd;
    if(start !== end) {
      if(field === 'blob') {
        let md = this.state._data;
        md = md.substring(0, start) + '**' + md.substring(start, end) + "**" + md.substring(end);
        this.setState({_data: md})
      } else if (field === 'del') {
        let md = this.state._data;
        md = md.substring(0, start) + '~~' + md.substring(start, end) + "~~" + md.substring(end);
        this.setState({_data: md})        
      } else if (field === 'yinyong') {
        let md = this.state._data;
        md = md.substring(0, start) + '\n > ' + md.substring(start, end) + "\n" + md.substring(end);
        this.setState({_data: md})         
      }
 
    }
  }




  render() {

    return (
      <div>
        <div className="notification is-primary">
          <button className="delete"></button>
          Markdown 文本编辑器
        </div>        
        <a title="加粗" onClick={this.handle.bind(this, 'blob')} className="button is-primary is-outlined is-small">
          <i className="iconfont icon-zitijiacu"></i>
        </a>
        <a title="中划线" onClick={this.handle.bind(this, 'del')} className="button is-primary is-outlined is-small">
          <i className="iconfont icon-zitishanchuxian"></i>
        </a>
        <a title="引用" onClick={this.handle.bind(this, 'yinyong')} className="button is-primary is-outlined is-small">
          <i className="iconfont icon-yinyong"></i>
        </a>                        
        {this.textarea()}
        {this.markdown()}
      </div>
    )
  }
}
