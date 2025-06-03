import { Button } from '@/src/components/Button'
import { Text } from '@/src/components/Text'
import { colors } from '@/src/styles/colors'
import { globalStyles } from '@/src/styles/globalStyles'
import { Image, ImageBackground } from 'expo-image'
import { useRouter } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function Index() {
  const router = useRouter()

  return (
    <ImageBackground source={require('@/assets/images/background-home.png')} style={globalStyles.container}>
      <View
        style={[styles.container]}
      >
        <Image source={require('@/assets/images/logo-all-black.png')} style={styles.logo} />
        <Text style={styles.text}>
          seu app  de despesas em grupo
        </Text>
        <Text style={styles.text}>
          sem dor de cabeça
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => router.navigate('/login-sign-up')}
            style={styles.button}
            disabled={false}
            variant="primary"
          >
            <Text style={styles.buttonText}>
              Vamos lá!
            </Text>
          </Button>
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
    width: 252,
    marginTop: 10,
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
