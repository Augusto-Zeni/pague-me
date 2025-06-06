import { Text } from '@/src/components/Text'
import { globalStyles } from '@/src/styles/globalStyles'
import { StyleSheet, View } from 'react-native'

export default function profile() {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text>teste profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
