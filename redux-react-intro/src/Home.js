import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class Home extends Component {
  render() {
    const { items, dispatch } = this.props;
    const addTodo = () => dispatch(actions.addTodo());
    return (
      <div>
        <button onClick={addTodo}>Create TODO</button>
        {
          items.map(item =>
            <div key={item.id}>{item.id} - {item.name}</div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state
  }
}
/**
const mapDispatchToProps = dispatch => {
  return {
    addTodo: () => dispatch(actions.ADD_TODO)
  }
}*/

export default connect(mapStateToProps)(Home);
