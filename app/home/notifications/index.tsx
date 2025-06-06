import { Text } from '@/src/components/Text'
import { globalStyles } from '@/src/styles/globalStyles'
import { StyleSheet, View } from 'react-native'

export default function notifications() {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text>teste notifcations</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
