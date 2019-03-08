import React, { Component } from 'react';
import marked from 'marked';
import 'github-markdown-css';
import 'bulma/css/bulma.css';
import './style.css';

export default class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceData: ''
    };
    this.myRef = React.createRef();
  }

  change(field, e) {
    this.setState({
      [field]: e.target.value
    }, () => {
      localStorage.setItem('sourceData', this.state.sourceData);
    });
  }

  componentDidMount() {
    const sourceData = localStorage.getItem('sourceData');
    if (sourceData) {
      this.setState({ sourceData });
    }
  }

  handle(field) {
    const txt = this.myRef.current;
    const start = txt.selectionStart;
    const end = txt.selectionEnd;
    let md = this.state.sourceData;
    if (start !== end) {
      if (field === 'blob') {
        md = md.substring(0, start) + '**' + md.substring(start, end) + '**' + md.substring(end);
      } else if (field === 'del') {
        md = md.substring(0, start) + '~~' + md.substring(start, end) + '~~' + md.substring(end);
      } else if (field === 'yinyong') {
        md = md.substring(0, start) + '\n > ' + md.substring(start, end) + '\n' + md.substring(end);
      }
    }
    this.setState({ sourceData: md });
  }

  render() {
    const html = marked(this.state.sourceData);
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
        <div className="field left">
          <div className="control">
            <textarea ref={this.myRef} className="textarea is-primary markdown-body" placeholder="Primary textarea"
              value={this.state.sourceData}
              onChange={this.change.bind(this, 'sourceData')}
            />
          </div>
        </div>
        <div className="field right">
          <div className="control">
            <div className="textarea is-info markdown-body"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
