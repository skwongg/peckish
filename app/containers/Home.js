import React, {Component } from 'react'
import { View,
ScrollView,
TextInput,
Image,
Text,
StyleSheet,
TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

class Home extends Component {
  render(){
    return <View>
      <View>
        <TouchableHighlight onPress={()=> this.searchPressed()}>
          <Text>Search Recipes</Text>
        </TouchableHighlight>
      </View>
      <ScrollView>

      </ScrollView>
    </View>
  }
}

function mapStateToProps(state){
  return {
    searchedRecipes: state.searchedRecipes
  }
}

export default connect(mapStateToProps)(Home);
