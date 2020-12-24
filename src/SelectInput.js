import React, {Component} from 'react'
import PropTypes from 'prop-types'


class SelectInput extends Component {
    constructor(props) {
        super(props)
        this.state =  {
            selectedValue: this.props.catagory || "none"
        }
    }

    static propTypes = {
        catagory: PropTypes.string,
        bookId: PropTypes.string.isRequired,
        handleCatagoryChange: PropTypes.func.isRequired
    }

    handleChange = (event) => {
        const {value, name} = event.target
        this.setState({
                selectedValue: value
            },
            this.props.handleCatagoryChange(name, value)
        )
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