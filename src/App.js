import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import './react-input-range.css';
import NumericInput from 'react-numeric-input';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 5,
      backValue: 95
    };
  }

  handleValuesChange(component, value) {
    console.log(this.state.value)
    this.setState({
      value: ((value * 10) / 10),
      backValue: (((100 - value) * 10) / 10)
    });
  }

  toNumber(number) {
    return +number;
  }

  render() {
    return (
      <div className="block-container">
        <div className="col-lg-10">
          <InputRange
            maxValue={100}
            minValue={0}
            step={0.1}
            defaultValue={this.state.value}
            onChange={this.handleValuesChange.bind(this)}
          />
        </div>
        <div className="col-lg-2">
          <NumericInput
            className="form-control"
            value={this.state.value}
            step={0.1}
            precision={1}
            onChange={this.handleValuesChange.bind(this)}
            format={this.toNumber()}
          />
        </div>
        <div className="block-container">
          Item 1: {this.state.value}
        </div>
        <div className="col-lg-10">
          <InputRange
            maxValue={100}
            minValue={0}
            step={0.1}
            defaultValue={this.state.backValue}
            onChange={this.handleValuesChange.bind(this)}
          />
        </div>
        <div className="col-lg-2">
          <NumericInput
            className="form-control"
            value={this.state.backValue}
            step={0.1}
            precision={1}
            onChange={this.handleValuesChange.bind(this)}
            format={this.toNumber()}
          />
        </div>
      </div>
    );
  }
}
