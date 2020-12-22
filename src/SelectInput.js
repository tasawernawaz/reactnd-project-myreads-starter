import React, {Component} from 'react'


class SelectInput extends Component {
    state =  {
        selectedValue: ""
    }

    handleChange = (event) => {
        this.setState({selectedValue: event.target.value},this.handleCatagoryChange(event))
    }

    handleCatagoryChange = (event) => {
        this.props.handleCatagoryChange(event.target.name, event.target.value)
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