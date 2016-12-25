import React from 'react';
import DayPicker, { DateUtils } from "react-day-picker";
import 'react-day-picker/lib/style.css';

export default class Datepicker extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
    }

    state = {
        selectedDay: new Date(),
        range: {
            from: new Date(),
            to: new Date()
        }
    }
    // Check if the day in state is selected
    isDaySelected(day) {
        return DateUtils.isSameDay(day, this.state.selectedDay);
    }

    handleDayClick(e, day) {
        let range = DateUtils.addDayToRange(day, this.state.range);
        this.setState({range});

    }

    renderLabel(){
       let from = (this.state.range.from && this.state.range.from.toLocaleDateString()) || '-';
       let to = (this.state.range.to && this.state.range.to.toLocaleDateString()) || '-';
        return (
            <p style={{textAlign: 'center'}}>
              From {from} to {to}
            </p>
        )
    }


    render() {
        return (
            <div>
                <DayPicker
                    onDayClick={ this.handleDayClick }
                    selectedDays={ this.isDaySelected.bind(this) }
                />
                {this.renderLabel()}
            </div>
        )
    }
}