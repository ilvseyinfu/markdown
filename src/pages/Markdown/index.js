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
      <div className="field">
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
      <div className="field">
        <div className="control">
          <div className="textarea is-info markdown-body"
            dangerouslySetInnerHTML={{__html: html}}
          ></div>
        </div>
      </div>      
    )  
  }

  blod() {
    var txt = this.myRef.current;
    var start = txt.selectionStart;
    var end = txt.selectionEnd;
    if(start !== end) {
      var md = this.state._data;
      md = md.substring(0, start) + '**' + md.substring(start, end) + "**" + md.substring(end);
      this.setState({_data: md})
    }


  }


  render() {

    return (
      <div>
        <span className="fas fa-border">
          <i className="iconfont icon-zitijiacu" onClick={this.blod.bind(this)}></i>
        </span>
        {this.textarea()}
        {this.markdown()}
      </div>
    )
  }
}