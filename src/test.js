import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Father extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
	}
	/**
	 * 进入
	 */
	goIn() {
		this.setState({
			visible: true,
		});
	}
	/**
	 * 取消
	 * @param mode true/false
	 */
	cancel(mode) {
		console.log(mode);
		this.setState({
			visible: mode,
		});
	}
	render() {
		return (
			<div style={{ background: 'red', padding: '30px' }}>
				{this.state.visible ? (
					<div style={{ background: 'yellow' }}>
						<Son cancel={mode => this.cancel(mode)} />
					</div>
				) : (
					<div style={{ background: 'blue' }}>
						<button onClick={this.goIn.bind(this)} style={{ width: '100px', height: '50px' }}>
							进入
						</button>
					</div>
				)}
			</div>
		);
	}
}
class Son extends React.Component {
	render() {
		console.log(this.props.msg);
		return (
			<div>
				<button
					style={{ width: '100px', height: '50px' }}
					onClick={() => {
						this.props.cancel(false);
					}}
				>
					返回
				</button>
				父组件传到子组件的信息：<span style={{ background: 'white' }}>{this.props.msg}</span>
			</div>
		);
	}
}
ReactDOM.render(<Father />, document.getElementById('root'));
