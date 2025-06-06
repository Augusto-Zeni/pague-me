import { animateHomeScreen, createHomeAnimations } from '@/src/animations/homeAnimations'
import { Button } from '@/src/components/Button'
import { Text } from '@/src/components/Text'
import { colors } from '@/src/styles/colors'
import { globalStyles } from '@/src/styles/globalStyles'
import { Image, ImageBackground } from 'expo-image'
import { useRouter } from 'expo-router'
import { useEffect, useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'

export default function Index() {
  const router = useRouter()
  const animations = useRef(createHomeAnimations()).current

  useEffect(() => {
    animateHomeScreen(animations)
  }, [])

  return (
    <ImageBackground source={require('@/assets/images/background-home.png')} style={globalStyles.container}>
      <View style={[styles.container]}>
        <Animated.View style={{ 
          opacity: animations.logoOpacity,
          transform: [{ translateX: animations.logoTranslateX }]
        }}>
          <Image source={require('@/assets/images/logo-all-black.png')} style={styles.logo} />
        </Animated.View>

        <Animated.View style={{ 
          opacity: animations.firstTextOpacity,
          transform: [{ translateX: animations.firstTextTranslateX }]
        }}>
          <Text style={styles.text}>
            seu app de despesas em grupo
          </Text>
        </Animated.View>

        <Animated.View style={{ 
          opacity: animations.secondTextOpacity,
          transform: [{ translateX: animations.secondTextTranslateX }]
        }}>
          <Text style={styles.text}>
            sem dor de cabeça
          </Text>
        </Animated.View>

        <Animated.View style={[
          styles.buttonContainer, 
          { 
            opacity: animations.buttonOpacity,
            transform: [{ translateX: animations.buttonTranslateX }]
          }
        ]}>
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
        </Animated.View>
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
