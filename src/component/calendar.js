import 'rc-calendar/assets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'rc-calendar';
import DatePicker from 'rc-calendar/lib/Picker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import enUS from 'rc-calendar/lib/locale/en_US';

const Test = React.createClass({
  propTypes: {
    defaultValue: React.PropTypes.object,
    defaultCalendarValue: React.PropTypes.object,
  },

  getInitialState() {
    return {
      showTime: true,
      showDateInput: true,
      disabled: false,
      value: this.props.defaultValue,
    };
  },

  onChange(value) {
    console.log('DatePicker change: ', (value && value.format(format)));
    this.setState({
      value,
    });
  },

  onShowTimeChange(e) {
    this.setState({
      showTime: e.target.checked,
    });
  },

  onShowDateInputChange(e) {
    this.setState({
      showDateInput: e.target.checked,
    });
  },

  toggleDisabled() {
    this.setState({
      disabled: !this.state.disabled,
    });
  },

  render() {
    const state = this.state;
    const calendar = (<Calendar
      locale={cn ? zhCN : enUS}
      style={{ zIndex: 1000 }}
      dateInputPlaceholder="please input"
      formatter={getFormat(state.showTime)}
      disabledTime={state.showTime ? disabledTime : null}
      defaultValue={this.props.defaultCalendarValue}
      showDateInput={state.showDateInput}
      disabledDate={disabledDate}
    />);
    return (<div style={{ width: 400, margin: 20 }}>
      <div style={{ marginBottom: 10 }}>
        <label>
          <input
            type="checkbox"
            checked={state.showTime}
            onChange={this.onShowTimeChange}
          />
          showTime
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          <input
            type="checkbox"
            checked={state.showDateInput}
            onChange={this.onShowDateInputChange}
          />
          showDateInput
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label>
          <input
            checked={state.disabled}
            onChange={this.toggleDisabled}
            type="checkbox"
          />
          disabled
        </label>
      </div>
      <div style={{
        boxSizing: 'border-box',
        position: 'relative',
        display: 'block',
        lineHeight: 1.5,
        marginBottom: 22,
      }}
      >
        <DatePicker
          animation="slide-up"
          disabled={state.disabled}
          calendar={calendar}
          value={state.value}
          onChange={this.onChange}
        >
          {
            ({ value }) => {
              return (
                <span tabIndex="0">
                <input
                  placeholder="please select"
                  style={{ width: 250 }}
                  disabled={state.disabled}
                  readOnly
                  tabIndex="-1"
                  className="ant-calendar-picker-input ant-input"
                  value={value && value.format(getFormat(state.showTime)) || ''}
                />
                </span>
              );
            }
          }
        </DatePicker>
      </div>
    </div>);
  },
});