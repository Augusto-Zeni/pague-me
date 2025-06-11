import { Text } from '@/src/components/Text'
import { TransactionCard } from '@/src/components/TransactionCard'
import { colors } from '@/src/styles/colors'
import { globalStyles } from '@/src/styles/globalStyles'
import { useRouter } from 'expo-router'
import { ArrowRight } from 'phosphor-react-native'
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

export default function Dashboard() {
  const router = useRouter()

  const mainCardBackgroundImage = require('../../../assets/images/background-dashboard-card.png')

  const handleClickShowMoreGroups = () => {
    router.push('/home/groups')
  }

  const handleClickShowMoreTransactions = () => {
    router.push('/home/transactions')
  }

  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <ScrollView>
        <View style={styles.content}>
            {/* Title */}
            <View style={styles.header}>
              <Text style={[globalStyles.text, styles.welcomeText]}>Olá, </Text>
              <Text style={[globalStyles.text, styles.headerText]}>John Doe</Text>
            </View>

            {/* Main Card */}
            <ImageBackground source={mainCardBackgroundImage} style={styles.cardContainer}>
              <View style={styles.contenCard}>
                <Text style={styles.titleContentCard}>saldo total</Text>
                <Text style={styles.valueContentCard}>+ R$170,00</Text>
              </View>

              <View style={styles.subContentCardContainer}>
                <View style={styles.contenCard}>
                  <Text style={styles.titleSubContentCard}>a pagar</Text>
                  <Text style={styles.valueSubContentCard}>+ R$170,00</Text>
                </View>
                <View style={styles.contenCard}>
                  <Text style={styles.titleSubContentCard}>a receber</Text>
                  <Text style={styles.valueSubContentCard}>R$320,00</Text>
                </View>
              </View>
            </ImageBackground>

            {/* Groups */}
            <View style={styles.containerGroups}>
              <View style={styles.hr} />
              <Text style={[styles.subtitle, { marginTop: 12 }]}>Grupos</Text>

              <View style={styles.containerCard}>
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

                <View style={styles.containerButtonShowMore}>
                  <TouchableOpacity style={styles.buttonShowMore} onPress={handleClickShowMoreGroups}>
                    <Text style={{ fontSize: 14 }}>Ver mais</Text>
                    <ArrowRight size={16} color={colors.gray100} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Last Transactions */}
            <View style={styles.containerLastTransactions}>
              <View style={styles.hr} />
              <Text style={[styles.subtitle, { marginTop: 12 }]}>Últimas Transações</Text>

              <View style={styles.containerCard}>
                <TransactionCard value={-350}>
                  <Text style={styles.titleTransactionCard}>Aluguel Rep</Text>
                  <Text style={styles.contentTransactionCard}>Data Transação: 29/04/2025</Text>
                </TransactionCard>

                <TransactionCard value={48.77}>
                  <Text style={styles.titleTransactionCard}>Evento Empresa</Text>
                  <Text style={styles.contentTransactionCard}>Data Transação: 29/04/2025</Text>
                </TransactionCard>

                <View style={styles.containerButtonShowMore}>
                  <TouchableOpacity style={styles.buttonShowMore} onPress={handleClickShowMoreTransactions}>
                    <Text style={{ fontSize: 14 }}>Ver mais</Text>
                    <ArrowRight size={16} color={colors.gray100} />
                  </TouchableOpacity>
                </View>
              </View>
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
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  welcomeText: {
    fontSize: 26,
    lineHeight: 32,
  },
  headerText: {
    fontSize: 32,
    color: colors.blue,
    lineHeight: 32,
  },
  cardContainer: {
    padding: 12,
    marginTop: 12,
    borderRadius: 12,
    overflow: 'hidden',
    gap: 12,
  },
  contenCard: {
    flex: 1,
    backgroundColor: colors.gray200,
    borderRadius: 12,
    padding: 12,
    gap: 8,
  },
  titleContentCard: {
    fontSize: 22,
    lineHeight: 22,
    color: colors.black300,
  },
  valueContentCard: {
    color: colors.black200,
    fontSize: 30,
    lineHeight: 30,
  },
  subContentCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
  },
  titleSubContentCard: {
    color: colors.black300,
  },
  valueSubContentCard: {
    color: colors.black200,
    fontSize: 24,
    lineHeight: 24,
  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: colors.gray200,
  },
  subtitle: {
    fontSize: 32,
    lineHeight: 36,
    color: colors.blue,
  },
  containerGroups: {
    marginTop: 16,
  },
  containerCard: {
    marginTop: 5,
  },
  titleTransactionCard: {
    fontSize: 22,
    color: colors.blue,
  },
  contentTransactionCard: {
    fontSize: 14,
    marginTop: 3,
  },
  containerButtonShowMore: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 5,
  },
  buttonShowMore: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black100,
    gap: 5,
    paddingVertical: 3,
    paddingHorizontal: 12,
    borderRadius: 9999,
    width: '30%',
  },
  containerLastTransactions: {
    marginTop: 16,
    marginBottom: 12,
  }
})
