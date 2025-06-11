import { HostGrotesk_500Medium } from '@expo-google-fonts/host-grotesk'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { View } from 'react-native'
import { MenuProvider } from 'react-native-popup-menu'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    HostGrotesk_500Medium,
  })

  if (!fontsLoaded) {
    return <View />
  }

  return (
    <MenuProvider>
      <Stack screenOptions={{ headerShown: false }}/>
    </MenuProvider>
  )
}
