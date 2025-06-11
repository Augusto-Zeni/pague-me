import { PopupMenu } from '@/src/components/PopupMenu/PopupMenu'
import { Text } from '@/src/components/Text'
import { TransactionCard } from '@/src/components/TransactionCard'
import { colors } from '@/src/styles/colors'
import { globalStyles } from '@/src/styles/globalStyles'
import { useLocalSearchParams } from 'expo-router'
import { DotsThreeVertical, PlusCircle } from 'phosphor-react-native'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

export default function GroupDetails() {
  const { id } = useLocalSearchParams()

  const menuItemsGroup = [
    {
      label: 'Deletar',
      value: 'delete',
      onPress: () => alert('Deletado'),
    }
  ]

  const menuItemsExpenses = [
    {
      label: 'Criar',
      value: 'create',
      onPress: () => alert('Criado'),
    }
  ]

  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Vagem Rio 2025</Text>

            <PopupMenu
              icon={<DotsThreeVertical size={32} color={colors.gray100} />}
              options={menuItemsGroup}
              menuStyles={{
                optionsContainer: { padding: 8, backgroundColor: colors.black100, borderRadius: 12 },
                optionText: { color: colors.gray100, fontSize: 16 },
              }}
            />
          </View>

          <View style={styles.conetentContainer}>
            <Text style={styles.subtitle}>
              Participantes
            </Text>

            <View>
              <TransactionCard value={0}>
                <Text>John Doe</Text>
              </TransactionCard>

              <TransactionCard value={35.88}>
                <Text>John Doe</Text>
              </TransactionCard>

              <TransactionCard value={-44.52}>
                <Text>John Doe</Text>
              </TransactionCard>
            </View>
          </View>

          <View style={styles.conetentContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.subtitle}>Despesas</Text>

              <PopupMenu
                icon={<PlusCircle size={24} color={colors.gray100} />}
                options={menuItemsExpenses}
                menuStyles={{
                  optionsContainer: { paddingVertical: 8, backgroundColor: colors.black100, borderRadius: 12 },
                  optionText: { color: colors.gray100, fontSize: 16 },
                }}
              />
            </View>

            <View>
              <TransactionCard value={115} whiteValue>
                <Text style={styles.titleTransactionCard}>Almoço praia</Text>
                <Text style={styles.contentTransactionCard}>Criado por: João</Text>
                <Text style={styles.contentTransactionCard}>Data Transação: 27/04/2025</Text>
              </TransactionCard>

              <TransactionCard value={25} whiteValue>
                <Text style={styles.titleTransactionCard}>Água de coco</Text>
                <Text style={styles.contentTransactionCard}>Criada por: Maria</Text>
                <Text style={styles.contentTransactionCard}>Data Transação: 27/04/2025</Text>
              </TransactionCard>
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
  conetentContainer: {
    marginTop: 22,
  },
  subtitle: {
    fontSize: 28,
    lineHeight: 28,
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
