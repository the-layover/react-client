import ReactDOM from 'react-dom';
import React from 'react';

class HelloWorldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Student'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <div>
        <div className="image-container">
          {/* <img src="./images/myImage.jpg" /> */}
          <img src="./images/dog.jpg" />
        </div>
        <div className="form">
          <input type="text" onChange={this.handleChange} />
          <div>
            Hello, My name is {this.state.name} and I'm a clever cloggs because I built a React build pipeline.
          </div>
        </div>
      </div>
    );
  }
}

export default HelloWorldComponent;
