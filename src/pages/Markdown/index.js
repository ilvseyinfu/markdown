import React, { Component } from 'react';
import marked from 'marked';
import 'github-markdown-css';
import 'bulma/css/bulma.css';
import './style.css';


// 代码的格式需要注意下，包括空行和空格
// 我看下面的方法，有的是空一行有的是空两行，有的挨在一起，要保持一致，让阅读者看起来整洁。
export default class Markdown extends Component {


  constructor(props) {
    super(props);
    this.state = {
      // data命名一般为驼峰形式，正常变量不用下划线开头的
      // 你可尝试加个airbnb的eslint规则，可以使用 [eslint-config-airbnb-base](https://github.com/airbnb/javascript)
      // 也可以直接使用我修改过的 [eslint-config-bcd-react](https://github.com/bencode/bcd-react/tree/master/packages/eslint-config)
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

  // 函数名最好使用动词，或动滨短语，命名是一门学问，要持续关注和提升。
  // 尝试将下面这个独立成单独的组件？不需要将独立的组件放在单独文件中，最简单的直接放在当前文件里。
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

  // 一般好的习惯是有状态组件，只在render中编写jsx结构
  // 中间可复用的jsx结构 变成 无状态组件
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
    // 使用了es6之后，可以不用var, 只用const或let，尽量只用const。
    var txt = this.myRef.current;
    var start = txt.selectionStart;
    var end = txt.selectionEnd;
    if(start !== end) {
      // 下面这三段可以适当简化， 关于发现 “重复的模式“
      // 至少两句话是一模一样的
      // 不一样的那句话，其实也有很大一部分一样，看能否分离相同和不同的点
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
