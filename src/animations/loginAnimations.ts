import { Animated } from 'react-native'

export interface LoginAnimations {
  fadeAnim: Animated.Value
  slideAnim: Animated.Value
  logoFadeAnim: Animated.Value
  logoScaleAnim: Animated.Value
}

export const createLoginAnimations = (): LoginAnimations => {
  return {
    fadeAnim: new Animated.Value(1),
    slideAnim: new Animated.Value(0),
    logoFadeAnim: new Animated.Value(1),
    logoScaleAnim: new Animated.Value(1)
  }
}

export const animateFormTransition = (
  animations: LoginAnimations,
  onComplete: () => void
) => {
  // Anima a saída
  Animated.parallel([
    Animated.timing(animations.fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }),
    Animated.timing(animations.slideAnim, {
      toValue: -50,
      duration: 300,
      useNativeDriver: true,
    }),
    Animated.timing(animations.logoFadeAnim, {
      toValue: 0.5,
      duration: 300,
      useNativeDriver: true,
    }),
    Animated.timing(animations.logoScaleAnim, {
      toValue: 0.95,
      duration: 300,
      useNativeDriver: true,
    }),
  ]).start(() => {
    onComplete()
    
    // Reseta os valores de animação
    animations.slideAnim.setValue(50)
    
    // Anima a entrada
    Animated.parallel([
      Animated.timing(animations.fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animations.slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animations.logoFadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(animations.logoScaleAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start()
  })
}