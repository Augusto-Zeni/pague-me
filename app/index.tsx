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
  
  // Criando valores de animação para cada elemento
  const logoOpacity = useRef(new Animated.Value(0)).current
  const firstTextOpacity = useRef(new Animated.Value(0)).current
  const secondTextOpacity = useRef(new Animated.Value(0)).current
  const buttonOpacity = useRef(new Animated.Value(0)).current

  // Criando valores de animação para a translação
  const logoTranslateX = useRef(new Animated.Value(-100)).current
  const firstTextTranslateX = useRef(new Animated.Value(-100)).current
  const secondTextTranslateX = useRef(new Animated.Value(-100)).current
  const buttonTranslateX = useRef(new Animated.Value(-100)).current

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(logoTranslateX, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(firstTextOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(firstTextTranslateX, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(secondTextOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(secondTextTranslateX, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(buttonOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(buttonTranslateX, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
    ]).start()
  }, [])

  return (
    <ImageBackground source={require('@/assets/images/background-home.png')} style={globalStyles.container}>
      <View style={[styles.container]}>
        <Animated.View style={{ 
          opacity: logoOpacity,
          transform: [{ translateX: logoTranslateX }]
        }}>
          <Image source={require('@/assets/images/logo-all-black.png')} style={styles.logo} />
        </Animated.View>

        <Animated.View style={{ 
          opacity: firstTextOpacity,
          transform: [{ translateX: firstTextTranslateX }]
        }}>
          <Text style={styles.text}>
            seu app de despesas em grupo
          </Text>
        </Animated.View>

        <Animated.View style={{ 
          opacity: secondTextOpacity,
          transform: [{ translateX: secondTextTranslateX }]
        }}>
          <Text style={styles.text}>
            sem dor de cabeça
          </Text>
        </Animated.View>

        <Animated.View style={[
          styles.buttonContainer, 
          { 
            opacity: buttonOpacity,
            transform: [{ translateX: buttonTranslateX }]
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
