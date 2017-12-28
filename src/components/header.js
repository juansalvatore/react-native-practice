import React from 'react'
import { Text, View } from 'react-native'

const Header = () => {
  const { textStyle, viewStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Header</Text>
    </View>
  )
}
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    display: 'flex',
    top: 20,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
  },
}
export default Header
