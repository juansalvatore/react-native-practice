import React from 'react'
import { Text, View } from 'react-native'

const Header = props => {
  const { textStyle, viewStyle } = styles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    top: 22,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    zIndex: 10,
  },
  textStyle: {
    fontSize: 20,
  },
}
export default Header
