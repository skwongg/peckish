import React, { Component } from 'react'
import {Text, View, AppRegistry, StyleSheet, TouchableHighlight} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

class AppContainer extends Component {
  addRecipe(){
    this.props.addRecipe()
  }

  render() {
    return <View>
      <Text style={{marginTop:20}}>
        REKTM8 Recipe Count: {this.props.recipeCount}
      </Text>
      <TouchableHighlight onPress={()=> {this.addRecipe() }}>
        <Text>IncrementREKTNESS</Text>
      </TouchableHighlight>
    </View>
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {
    recipeCount: state.recipeCount
  }
}, mapDispatchToProps)(AppContainer)
