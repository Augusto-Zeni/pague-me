import { colors } from '@/src/styles/colors.'
import { globalStyles } from '@/src/styles/globalStyles'
import { Image, ImageBackground } from 'expo-image'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Index() {
  return (
    <ImageBackground source={require('@/assets/images/background-home.png')} style={globalStyles.container}>
      <View
        style={[styles.container]}
      >
        <Image source={require('@/assets/images/logo-all-black.png')} style={styles.logo} />
        <Text style={[globalStyles.text, styles.text]}>
          seu app  de despesas em grupo
        </Text>
        <Text style={[globalStyles.text, styles.text]}>
          sem dor de cabeça
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Vamos lá!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: colors.black200,
  },
  logo: {
    height: 66,
    width: 252,
  },
  buttonContainer: {
    backgroundColor: 'transparent',
    width: 252,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: colors.black200,
  },
  buttonText: {
    color: colors.black200,
  },
  button: {
    backgroundColor: 'transparent',
    padding: 16,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
