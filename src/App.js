import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import './react-input-range.css';
import NumericInput from 'react-numeric-input';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleValuesChange = this.handleValuesChange.bind(this);

    this.state = {
      range1: 5,
      range2: 95
    };
  }

  handleValuesChange(componentName) {
    return (component, value) => {
      const state = {}
      if (typeof(component) === 'number') {
        state[componentName] = component;
      } else {
        state[componentName] = value;
      }
      this.setState(state);
    }
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
            value={this.state.range1}
            onChange={this.handleValuesChange('range1')}
          />
        </div>
        <div className="col-lg-2">
        </div>
        <div className="block-container">
          Item 1: {this.state.range1}
        </div>
        <div className="col-lg-10">
          <InputRange
            maxValue={100}
            minValue={0}
            step={0.1}
            value={this.state.range2}
            onChange={this.handleValuesChange('range2')}
          />
        </div>
        <div className="col-lg-2">
          <NumericInput
            className="form-control"
            value={this.state.range2}
            step={0.1}
            precision={1}
            onChange={this.handleValuesChange('range2')}
            format={this.toNumber}
          />
        </div>
      </div>
    );
  }
}
