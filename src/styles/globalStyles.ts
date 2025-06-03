import { StyleSheet } from 'react-native'
import { colors } from './colors'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black200,
    padding: 24,
  },
  text: {
    color: colors.gray100,
    fontFamily: 'HostGrotesk_400Regular',
    lineHeight: 24,
    fontSize: 16,
  },
})
