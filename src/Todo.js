import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeCount} from './actions/counts';

class Todo extends Component {
  state = {count: 0};
  decrementCount() {
    // let {count} = this.state;
    let {count, actions} = this.props;
    count--;
    // this.setState({
    //   count,
    // });
    actions.changeCount(count);
  }
  incrementCount() {
    // let {count} = this.state;
    let {count, actions} = this.props;
    count++;
    // this.setState({
    //   count,
    // });
    actions.changeCount(count);
  }
  render() {
    // const { count } = this.state;
    const {count} = this.props;
    return (
      <View styles={styles.container}>
        <Button title="increment" onPress={() => this.incrementCount()} />
        <Text>{count}</Text>
        <Button title="decrement" onPress={() => this.decrementCount()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  count: state.count.count,
});

const ActionCreators = Object.assign({}, {changeCount});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

// export default Todo;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo);
