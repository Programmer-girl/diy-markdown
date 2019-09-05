import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import remarkable from './remarkable'
// import markdownIt from './markdown-it'
var MarkdownIt = require('markdown-it'),
 md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');

var timeout = null;
class MackdownEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };
		this.handleChange = this.handleChange.bind(this);
	}
	debounce(fn, wait) {
		var timeout = null;
		return function() {
			if (timeout !== null) clearTimeout(timeout);
			timeout = setTimeout(fn, wait);
		};
	}
	handleChange(e) {
		var self = this;
		var value = e.target.value;
		if (timeout !== null) clearTimeout(timeout);
		timeout = setTimeout(() => self.setState({ value: value }), 600);
	}
	render() {
		return (
			<div className="mackdown-wrap">
				<LeftEditComponent handleChange={this.handleChange} defaultValue={this.state.value} />
				<RightShowComponent value={this.state.value} />
			</div>
		);
	}
}
class LeftEditComponent extends React.Component {
	render() {
		return (
			<div className="left-edit-wrap">
				<textarea
					className="text-content"
					onChange={this.props.handleChange}
					defaultValue={this.props.defaultValue}
				></textarea>
			</div>
		);
	}
}
class RightShowComponent extends React.Component {
	show(a) {
		return md.render(a);
	}
	render() {
        // >{this.show(this.props.value)}
		return <div className="right-show-wrap" dangerouslySetInnerHTML={{__html: this.show(this.props.value)}}></div>;
	}
}

ReactDOM.render(<MackdownEditor />, document.getElementById('root'));