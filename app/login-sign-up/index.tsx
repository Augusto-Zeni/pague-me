import { Button } from '@/src/components/Button'
import { Input } from '@/src/components/InputText'
import { Text } from '@/src/components/Text'
import { colors } from '@/src/styles/colors'
import { globalStyles } from '@/src/styles/globalStyles'
import { Image, ImageBackground } from 'expo-image'
import { SignIn } from 'phosphor-react-native'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Alert, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

interface LoginFormData {
  email: string
  password: string
}

interface SignUpFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function Index() {
  const [isLogin, setIsLogin] = useState(true)

  // Form para Login
  const loginForm = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  // Form para SignUp
  const signUpForm = useForm<SignUpFormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const onLoginSubmit = (data: LoginFormData) => {
    console.log('Login data:', data)
    Alert.alert('Login', `Email: ${data.email}`)
  }

  const onSignUpSubmit = (data: SignUpFormData) => {
    if (data.password !== data.confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem')
      return
    }
    console.log('SignUp data:', data)
    Alert.alert('Cadastro', `Bem-vindo, ${data.name}!`)
  }

  const toggleForm = () => {
    setIsLogin(!isLogin)

    loginForm.reset()
    signUpForm.reset()
  }

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <ImageBackground source={require('@/assets/images/background-login-sign-up.png')} style={globalStyles.container}>
        <View style={styles.container}>
          <Image source={require('@/assets/images/logo-login-sign-up.png')} style={styles.logo} />
          
          {isLogin ? (
            <Text style={styles.subtitle}>
              bem vindo de volta!
            </Text>
          ) : (
            <Text style={styles.subtitle}>
              cadastre-se agora
            </Text>
          )}
          
          <View style={styles.formContainer}>
            {isLogin ? (
              // Formulário de Login
              <View style={styles.form}>
                <Controller
                  control={loginForm.control}
                  name="email"
                  rules={{
                    required: 'Email é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  }}
                  render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <View style={error?.message ? styles.inputContainerWithError : styles.inputContainer}>
                      <Input
                        placeholder="Email"
                        placeholderTextColor={colors.gray100}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        error={error && error.message}
                        inputStyle={{ color: colors.gray100 }}
                      />
                    </View>
                  )}
                />

                <Controller
                  control={loginForm.control}
                  name="password"
                  rules={{
                    required: 'Senha é obrigatória',
                    minLength: {
                      value: 6,
                      message: 'Senha deve ter pelo menos 6 caracteres'
                    }
                  }}
                  render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <View style={error?.message ? styles.inputContainerWithError : styles.inputContainer}>
                      <Input
                        placeholder="Senha"
                        placeholderTextColor={colors.gray100}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        secureTextEntry
                        error={error && error.message}
                        inputStyle={{ color: colors.gray100 }}
                      />
                    </View>
                  )}
                />

                <Button
                  variant='secondary'
                  onPress={loginForm.handleSubmit(onLoginSubmit)}
                  style={{ marginTop: 5 }}
                >
                  <View style={styles.buttonContainer}>
                    <Text>
                      Login
                    </Text>

                    <SignIn size={24} color={colors.gray100} />
                  </View>
                </Button>

                <View style={styles.containerToggleForm}>
                  <View style={{ flex: 1, height: 1, backgroundColor: colors.gray100 }} />
                  <Text style={styles.textToggleForm}>Não tem uma conta?</Text>
                  <TouchableOpacity onPress={toggleForm}>
                    <Text style={[styles.textToggleForm, { color: colors.blue }]}>Cadastre-se</Text>
                  </TouchableOpacity>
                  <View style={{ flex: 1, height: 1, backgroundColor: colors.gray100 }} />
                </View>
              </View>
            ) : (
              // Formulário de Cadastro
              <View style={styles.form}>
                <Controller
                  control={signUpForm.control}
                  name="name"
                  rules={{
                    required: 'Nome é obrigatório',
                    minLength: {
                      value: 2,
                      message: 'Nome deve ter pelo menos 2 caracteres'
                    }
                  }}
                  render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <View style={error?.message ? styles.inputContainerWithError : styles.inputContainer}>
                      <Input
                        placeholder="Nome completo"
                        placeholderTextColor={colors.gray100}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        error={error && error.message}
                        inputStyle={{ color: colors.gray100 }}
                      />
                    </View>
                  )}
                />

                <Controller
                  control={signUpForm.control}
                  name="email"
                  rules={{
                    required: 'Email é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  }}
                  render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <View style={error?.message ? styles.inputContainerWithError : styles.inputContainer}>
                      <Input
                        placeholder="Email"
                        placeholderTextColor={colors.gray100}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        error={error && error.message}
                        inputStyle={{ color: colors.gray100 }}
                      />
                    </View>
                  )}
                />

                <Controller
                  control={signUpForm.control}
                  name="password"
                  rules={{
                    required: 'Senha é obrigatória',
                    minLength: {
                      value: 6,
                      message: 'Senha deve ter pelo menos 6 caracteres'
                    }
                  }}
                  render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <View style={error?.message ? styles.inputContainerWithError : styles.inputContainer}>
                      <Input
                        placeholder="Senha"
                        placeholderTextColor={colors.gray100}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        secureTextEntry
                        error={error && error.message}
                        inputStyle={{ color: colors.gray100 }}
                      />
                    </View>
                  )}
                />

                <Controller
                  control={signUpForm.control}
                  name="confirmPassword"
                  rules={{
                    required: 'Confirmação de senha é obrigatória',
                    validate: (value) => 
                      value === signUpForm.getValues('password') || 'As senhas não coincidem'
                  }}
                  render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                    <View style={error?.message ? styles.inputContainerWithError : styles.inputContainer}>
                      <Input
                        placeholder="Confirmar senha"
                        placeholderTextColor={colors.gray100}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        secureTextEntry
                        error={error && error.message}
                        inputStyle={{ color: colors.gray100 }}
                      />
                    </View>
                  )}
                />

                <Button
                  variant='secondary'
                  onPress={signUpForm.handleSubmit(onSignUpSubmit)}
                  style={{ marginTop: 5 }}
                >
                  <View style={styles.buttonContainer}>
                    <Text>
                      Cadastrar
                    </Text>

                    <SignIn size={24} color={colors.gray100} />
                  </View>
                </Button>

                <View style={styles.containerToggleForm}>
                  <View style={{ flex: 1, height: 1, backgroundColor: colors.gray100 }} />
                  <Text style={styles.textToggleForm}>Já tem uma conta?</Text>
                  <TouchableOpacity onPress={toggleForm}>
                    <Text style={[styles.textToggleForm, { color: colors.blue }]}>Faça login</Text>
                  </TouchableOpacity>
                  <View style={{ flex: 1, height: 1, backgroundColor: colors.gray100 }} />
                </View>

              </View>
            )}
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 66,
    width: 252,
  },
  subtitle: {
    color: colors.blue,
  },
  formContainer: {
    width: '100%',
    marginTop: 16,
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputContainerWithError: {
    marginBottom: 5,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerToggleForm: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  textToggleForm: {
    fontSize: 12,
    fontWeight: '400',
  }
})
