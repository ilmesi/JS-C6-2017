import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTodos())
  }
  render() {
    const { isFetching, items } = this.props;
    return (
      <div>
        {isFetching && <span>Loading</span>}
        {!isFetching && <span>Loaded!</span>}
        {!isFetching &&
          items.map(item =>
            <div>{item.id} - {item.name}</div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    items: state.items
  }
}

export default connect(mapStateToProps)(App);
