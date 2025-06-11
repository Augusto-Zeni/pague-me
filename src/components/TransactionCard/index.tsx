import { colors } from '@/src/styles/colors'
import type { ReactNode } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from '../Text'

interface TransactionCardProps {
  children: ReactNode
  value?: number
  whiteValue?: boolean
  onPress?: () => void
}

export function TransactionCard({children, value, whiteValue = false, onPress}: TransactionCardProps) {
  const hasValue = value !== undefined && value !== null

  const getValueColor = (value: number) => {
    if (value < 0 && !whiteValue) return styles.negative
    if (value > 0 && !whiteValue) return styles.positive
    return styles.neutral
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={[styles.leftContainer, !hasValue && styles.fullWidth]}>
        {children}
      </View>

      {hasValue && (
        <View style={styles.valueContainer}>
          <Text style={[styles.valueText, getValueColor(value)]}>
            {value < 0 
              ? `-${formatCurrency(Math.abs(value))}`
              : formatCurrency(value)}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.black100,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  leftContainer: {
    flex: 1,
  },
  fullWidth: {
    flex: 1,
  },
  valueContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: 16,
  },
  valueText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  positive: {
    color: colors.green,
  },
  negative: {
    color: colors.red,
  },
  neutral: {
    color: colors.gray100,
  },
})