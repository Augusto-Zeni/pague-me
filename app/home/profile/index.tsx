import { Input } from '@/src/components/InputText'
import { Text } from '@/src/components/Text'
import { colors } from '@/src/styles/colors'
import { globalStyles } from '@/src/styles/globalStyles'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

export default function profile() {
  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Perfil</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nome</Text>
              <Input
                placeholder="Nome"
                placeholderTextColor={colors.gray100}
                value="John Doe"
                inputStyle={{ color: colors.gray100 }}
                borderColor={colors.gray100}
                editable={false}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <Input
                placeholder="Email"
                placeholderTextColor={colors.gray100}
                value="johndoe@gmail.com"
                inputStyle={{ color: colors.gray100 }}
                borderColor={colors.gray100}
                editable={false}
              />
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
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    color: colors.blue,
  },
  formContainer: {
    marginTop: 12,
    gap: 8,
  },
  inputContainer: {},
  label: {
    color: colors.blue,
  },
})
