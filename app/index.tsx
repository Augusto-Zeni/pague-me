import { globalStyles } from '@/src/styles/globalStyles'
import { StyleSheet, Text, View } from 'react-native'

export default function Index() {
  return (
    <View
      style={[globalStyles.container, styles.container]}
    >
      <Text style={[globalStyles.text]}>Hello World!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
