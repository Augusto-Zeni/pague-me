import { Text } from '@/src/components/Text'
import { TransactionCard } from '@/src/components/TransactionCard'
import { colors } from '@/src/styles/colors'
import { globalStyles } from '@/src/styles/globalStyles'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

export default function notifications() {
  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Notificações</Text>
          </View>

          <View style={styles.cardsContainer}>
            <TransactionCard>
              <Text style={styles.titleTransactionCard}>Você recebeu um pagamento</Text>
              <Text style={styles.contentTransactionCard}>Maria transferiu R$ 50,00 para você no grupo &quot;Churrasco de Sábado&quot;.</Text>
            </TransactionCard>

            <TransactionCard>
              <Text style={styles.titleTransactionCard}>Você recebeu um pagamento</Text>
              <Text style={styles.contentTransactionCard}>Carlos transferiu R$ 8,75 para você no grupo &quot;Churrasco de Sábado&quot;.</Text>
            </TransactionCard>

            <TransactionCard>
              <Text style={styles.titleTransactionCard}>Hora de acertar as contas!</Text>
              <Text style={styles.contentTransactionCard}>O mês está acabando. Que tal revisar e quitar suas despesas no grupo &quot;Despesas do Mês&quot;?</Text>
            </TransactionCard>

            <TransactionCard>
              <Text style={styles.titleTransactionCard}>Você recebeu um pagamento</Text>
              <Text style={styles.contentTransactionCard}>Maria transferiu R$ 50,00 para você no grupo &quot;Churrasco de Sábado&quot;.</Text>
            </TransactionCard>

            <TransactionCard>
              <Text style={styles.titleTransactionCard}>Você recebeu um pagamento</Text>
              <Text style={styles.contentTransactionCard}>Carlos transferiu R$ 8,75 para você no grupo &quot;Churrasco de Sábado&quot;.</Text>
            </TransactionCard>

            <TransactionCard>
              <Text style={styles.titleTransactionCard}>Hora de acertar as contas!</Text>
              <Text style={styles.contentTransactionCard}>O mês está acabando. Que tal revisar e quitar suas despesas no grupo &quot;Despesas do Mês&quot;?</Text>
            </TransactionCard>

            <TransactionCard>
              <Text style={styles.titleTransactionCard}>Você recebeu um pagamento</Text>
              <Text style={styles.contentTransactionCard}>Maria transferiu R$ 50,00 para você no grupo &quot;Churrasco de Sábado&quot;.</Text>
            </TransactionCard>

            <TransactionCard>
              <Text style={styles.titleTransactionCard}>Você recebeu um pagamento</Text>
              <Text style={styles.contentTransactionCard}>Carlos transferiu R$ 8,75 para você no grupo &quot;Churrasco de Sábado&quot;.</Text>
            </TransactionCard>

            <TransactionCard>
              <Text style={styles.titleTransactionCard}>Hora de acertar as contas!</Text>
              <Text style={styles.contentTransactionCard}>O mês está acabando. Que tal revisar e quitar suas despesas no grupo &quot;Despesas do Mês&quot;?</Text>
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
