import React, {Component} from 'react'


class SelectInput extends Component {
    state =  {
        selectedValue: ""
    }

    handleChange = (e) => {
        this.setState({
            selectedValue: e.target.value
        })
    }

    render () {
        return (
            <select value={this.state.selectedValue} onChange={this.handleChange}>
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