import { colors } from '@/src/styles/colors'
import { Tabs, usePathname } from 'expo-router'
import { Bell, CashRegister, House, Stack, User } from 'phosphor-react-native'
import React, { useEffect, useRef } from 'react'
import { Animated, Dimensions, Platform, StyleSheet, View } from 'react-native'

const { width, height } = Dimensions.get('window')
const TAB_WIDTH = width / 5
const TAB_HEIGHT = Platform.select({
  ios: height * 0.11,
  android: height * 0.1,
})

const routeToIndex: { [key: string]: number } = {
  '/home/dashboard': 0,
  '/home/groups': 1,
  '/home/transactions': 2,
  '/home/notifications': 3,
  '/home/profile': 4,
}

export default function HomeLayout() {
  const animatedValue = useRef(new Animated.Value(0)).current
  const pathname = usePathname()

  const handleTabPress = (index: number) => {
    Animated.spring(animatedValue, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true,
      tension: 50,
      friction: 7,
    }).start()
  }

  useEffect(() => {
    const currentIndex = routeToIndex[pathname] ?? 0
    handleTabPress(currentIndex)
  }, [pathname])

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            ...styles.tabBar,
            height: TAB_HEIGHT,
          },
          tabBarBackground: () => (
            <Animated.View
              style={[styles.tabBackgroundContainer, { transform: [{ translateX: animatedValue }] }]}
            >
              <View style={styles.tabBackgroundShape} />
            </Animated.View>
          ),
          tabBarActiveTintColor: colors.slateBlue,
          tabBarInactiveTintColor: colors.gray100,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="dashboard/index"
          listeners={{ tabPress: () => handleTabPress(0) }}
          options={{
            tabBarIcon: () => (
              <View>
                <House size={24} color={colors.gray100} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="groups/index"
          listeners={{ tabPress: () => handleTabPress(1) }}
          options={{
            tabBarIcon: () => (
              <View>
                <Stack size={24} color={colors.gray100} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="transactions/index"
          listeners={{ tabPress: () => handleTabPress(2) }}
          options={{
            tabBarIcon: () => (
              <View>
                <CashRegister size={24} color={colors.gray100} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="notifications/index"
          listeners={{ tabPress: () => handleTabPress(3) }}
          options={{
            tabBarIcon: () => (
              <View>
                <Bell size={24} color={colors.gray100} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile/index"
          listeners={{ tabPress: () => handleTabPress(4) }}
          options={{
            tabBarIcon: () => (
              <View>
                <User size={24} color={colors.gray100} />
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.black100,
    borderTopWidth: 0,
    paddingTop: Platform.select({
      ios: height * 0.015,
      android: height * 0.01,
    }),
  },
  tabBackgroundContainer: {
    position: 'absolute',
    bottom: Platform.select({
      ios: height * 0.045,
      android: height * 0.04,
    }),
    width: TAB_WIDTH,
    alignItems: 'center',
  },
  tabBackgroundShape: {
    backgroundColor: colors.slateBlue,
    borderRadius: width * 0.05,
    width: width * 0.14,
    height: height * 0.055,
  },
})