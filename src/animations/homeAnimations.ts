import { Animated } from 'react-native'

export interface HomeAnimations {
  logoOpacity: Animated.Value
  firstTextOpacity: Animated.Value
  secondTextOpacity: Animated.Value
  buttonOpacity: Animated.Value
  logoTranslateX: Animated.Value
  firstTextTranslateX: Animated.Value
  secondTextTranslateX: Animated.Value
  buttonTranslateX: Animated.Value
}

export const createHomeAnimations = (): HomeAnimations => {
  return {
    logoOpacity: new Animated.Value(0),
    firstTextOpacity: new Animated.Value(0),
    secondTextOpacity: new Animated.Value(0),
    buttonOpacity: new Animated.Value(0),
    logoTranslateX: new Animated.Value(-100),
    firstTextTranslateX: new Animated.Value(-100),
    secondTextTranslateX: new Animated.Value(-100),
    buttonTranslateX: new Animated.Value(-100)
  }
}

export const animateHomeScreen = (animations: HomeAnimations) => {
  Animated.sequence([
    Animated.parallel([
      Animated.timing(animations.logoOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animations.logoTranslateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]),
    Animated.parallel([
      Animated.timing(animations.firstTextOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animations.firstTextTranslateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]),
    Animated.parallel([
      Animated.timing(animations.secondTextOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animations.secondTextTranslateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]),
    Animated.parallel([
      Animated.timing(animations.buttonOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animations.buttonTranslateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]),
  ]).start()
} 