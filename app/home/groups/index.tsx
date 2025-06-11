import { Text } from '@/src/components/Text'
import { TransactionCard } from '@/src/components/TransactionCard'
import { colors } from '@/src/styles/colors'
import { globalStyles } from '@/src/styles/globalStyles'
import { PlusCircle } from 'phosphor-react-native'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

export default function groups() {
  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Grupos</Text>
            <PlusCircle size={32} color={colors.gray100} />
          </View>

          <View style={styles.cardsContainer}>
            <TransactionCard value={-32.28}>
              <Text style={styles.titleTransactionCard}>Churras de Sábado</Text>
              <Text style={styles.contentTransactionCard}>Criado em: 15/05/2025</Text>
            </TransactionCard>

            <TransactionCard value={0}>
              <Text style={styles.titleTransactionCard}>Aluguel Rep</Text>
              <Text style={styles.contentTransactionCard}>Criado em: 01/05/2025</Text>
            </TransactionCard>

            <TransactionCard value={148}>
              <Text style={styles.titleTransactionCard}>Viagem Praia</Text>
              <Text style={styles.contentTransactionCard}>Criado em: 22/03/2025</Text>
            </TransactionCard>

            <TransactionCard value={-32.28}>
              <Text style={styles.titleTransactionCard}>Churras de Sábado</Text>
              <Text style={styles.contentTransactionCard}>Criado em: 15/05/2025</Text>
            </TransactionCard>

            <TransactionCard value={0}>
              <Text style={styles.titleTransactionCard}>Aluguel Rep</Text>
              <Text style={styles.contentTransactionCard}>Criado em: 01/05/2025</Text>
            </TransactionCard>

            <TransactionCard value={148}>
              <Text style={styles.titleTransactionCard}>Viagem Praia</Text>
              <Text style={styles.contentTransactionCard}>Criado em: 22/03/2025</Text>
            </TransactionCard>

            <TransactionCard value={-32.28}>
              <Text style={styles.titleTransactionCard}>Churras de Sábado</Text>
              <Text style={styles.contentTransactionCard}>Criado em: 15/05/2025</Text>
            </TransactionCard>

            <TransactionCard value={0}>
              <Text style={styles.titleTransactionCard}>Aluguel Rep</Text>
              <Text style={styles.contentTransactionCard}>Criado em: 01/05/2025</Text>
            </TransactionCard>

            <TransactionCard value={148}>
              <Text style={styles.titleTransactionCard}>Viagem Praia</Text>
              <Text style={styles.contentTransactionCard}>Criado em: 22/03/2025</Text>
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
    justifyContent: 'space-between',
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
