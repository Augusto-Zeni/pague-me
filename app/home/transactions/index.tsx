import { Text } from '@/src/components/Text'
import { TransactionCard } from '@/src/components/TransactionCard'
import { colors } from '@/src/styles/colors'
import { globalStyles } from '@/src/styles/globalStyles'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

export default function transactions() {
  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Transações</Text>
          </View>

          <View style={styles.cardsContainer}>
            <TransactionCard value={-350.00}>
              <Text style={styles.titleTransactionCard}>Excursão Gramado</Text>
              <Text style={styles.contentTransactionCard}>Descrição: Ônibus ida e volta</Text>
              <Text style={styles.contentTransactionCard}>Pago para: Amanda</Text>
              <Text style={styles.contentTransactionCard}>Data Transação: 29/04/2025</Text>
            </TransactionCard>

            <TransactionCard value={100}>
              <Text style={styles.titleTransactionCard}>Excursão Gramado</Text>
              <Text style={styles.contentTransactionCard}>Descrição: Ingresso Snowland</Text>
              <Text style={styles.contentTransactionCard}>Pago por: João</Text>
              <Text style={styles.contentTransactionCard}>Data Transação: 29/04/2025</Text>
            </TransactionCard>

            <TransactionCard value={100}>
              <Text style={styles.titleTransactionCard}>Excursão Gramado</Text>
              <Text style={styles.contentTransactionCard}>Descrição: Ingresso Snowland</Text>
              <Text style={styles.contentTransactionCard}>Pago por: João</Text>
              <Text style={styles.contentTransactionCard}>Data Transação: 29/04/2025</Text>
            </TransactionCard>

            <TransactionCard value={-50}>
              <Text style={styles.titleTransactionCard}>Excursão Gramado</Text>
              <Text style={styles.contentTransactionCard}>Descrição: Almoço rodízio</Text>
              <Text style={styles.contentTransactionCard}>Pago para: Amanda</Text>
              <Text style={styles.contentTransactionCard}>Data Transação: 29/04/2025</Text>
            </TransactionCard>

            <TransactionCard value={-25}>
              <Text style={styles.titleTransactionCard}>Churras da Firma</Text>
              <Text style={styles.contentTransactionCard}>Descrição: Carne e carvão</Text>
              <Text style={styles.contentTransactionCard}>Pago para: Cláudia</Text>
              <Text style={styles.contentTransactionCard}>Data Transação: 27/04/2025</Text>
            </TransactionCard>

            <TransactionCard value={25}>
              <Text style={styles.titleTransactionCard}>TCC Engenharia</Text>
              <Text style={styles.contentTransactionCard}>Descrição: Impressão do banner</Text>
              <Text style={styles.contentTransactionCard}>Pago por: Carlos</Text>
              <Text style={styles.contentTransactionCard}>Data Transação: 27/04/2025</Text>
            </TransactionCard>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    color: colors.blue,
  },
  cardsContainer: {
    marginTop: 12,
  },
  titleTransactionCard: {
    fontSize: 22,
    color: colors.blue,
  },
  contentTransactionCard: {
    fontSize: 14,
    marginTop: 3,
  },
})
