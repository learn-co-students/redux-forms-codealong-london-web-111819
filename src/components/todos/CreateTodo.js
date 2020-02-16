import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  state = {
    text: null
  }

  handleChange = e => {
    return this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <p>
            <label>add todo</label>
            <input onChange={this.handleChange} value={this.state.text} type="text" />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => {
        dispatch({ type: "ADD_TODO", payload: todo })
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);