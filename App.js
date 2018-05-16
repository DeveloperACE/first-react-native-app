import React from 'react';
import { fetchPeopleFromAPI } from './actions';

import {
  TouchableHighlight,
  Text,
  View,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux';

let styles;

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText,
  } = styles;

  const { people, isFetching } = props.people;

  return (
    <View style={container}>
      <Text style={text}> Redux App </Text>
      <TouchableHighlight onPress={() => props.getPeople()} style={button}>
        <Text style={buttonText}> Fetch Data </Text>
      </TouchableHighlight>
      {
        isFetching && <Text> Loading </Text>
      }
      {
        people.length ? (
          people.map((person, idx) => {
            return 
            <View key={idx}> 
                <Text> Name: {person['name']} </Text>
                <Text> Birth Year: {person['birth_year']} </Text>
            </View>
          })
        ) : null
      }
    </View>
  )
}

styles = StyleSheet.create({
    container: {
      marginTop: 100,
      paddingLeft: 20,
      paddingTop: 20, 
    },
    text: {
      textAlign: 'center',
    },
    button: {
        backgroundColor: 'black',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
      color: 'white'
    }

});

function mapStateToProps(state) {
  return {
    people: state.people,

  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);