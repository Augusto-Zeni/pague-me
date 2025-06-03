import { Text } from '@/src/components/Text'
import { colors } from '@/src/styles/colors'
import React, { forwardRef } from 'react'
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'

interface InputProps extends TextInputProps {
  label?: string
  error?: string
  variant?: 'primary' | 'secondary'
  containerStyle?: object
  inputStyle?: object
  labelStyle?: object
  errorStyle?: object
}

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      label,
      error,
      variant = 'primary',
      containerStyle,
      inputStyle,
      labelStyle,
      errorStyle,
      ...props
    },
    ref
  ) => {
    return (
      <View style={[styles.container, containerStyle]}>
        {label && (
          <Text style={[styles.label, labelStyle]}>
            {label}
          </Text>
        )}
        <TextInput
          ref={ref}
          style={[
            styles.input,
            error && styles.inputError,
            inputStyle,
          ]}
          placeholderTextColor={colors.gray400}
          {...props}
        />
        {error && (
          <Text style={[styles.error, errorStyle]}>
            {error}
          </Text>
        )}
      </View>
    )
  }
)

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.black200,
    backgroundColor: 'transparent',
    borderColor: colors.blue,
  },
  inputError: {
    borderColor: colors.red,
  },
  error: {
    fontSize: 12,
    color: colors.red,
    marginTop: 4,
  },
})

Input.displayName = 'Input'