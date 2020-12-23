import React, {Component} from 'react'


class SelectInput extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            selectedValue: this.props.catagory || "none"
        }
    }

    handleChange = (event) => {
        const previousValue = this.state.selectedValue
        this.setState(
            {selectedValue: event.target.value},
            this.handleCatagoryChange(event, previousValue)
        )
    }

    handleCatagoryChange = (event, previousValue) => {
        this.props.handleCatagoryChange(event.target.name, event.target.value, previousValue)
    }

    render () {
        return (
            <select name={this.props.bookId} value={this.state.selectedValue} onChange={this.handleChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }
}


export default SelectInput