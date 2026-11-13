import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

type Screen = 'dashboard' | 'chat';

export default function App() {
  const [screen, setScreen] = useState<Screen>('dashboard');

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.title}>Overdash</Text>
      </View>

      <View style={styles.body}>
        {screen === 'dashboard' ? <DashboardPlaceholder /> : <ChatPlaceholder />}
      </View>

      <View style={styles.tabBar}>
        <TabButton label="Dashboard" active={screen === 'dashboard'} onPress={() => setScreen('dashboard')} />
        <TabButton label="Chat" active={screen === 'chat'} onPress={() => setScreen('chat')} />
      </View>
    </SafeAreaView>
  );
}

function DashboardPlaceholder() {
  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderTitle}>Dashboard</Text>
      <Text style={styles.placeholderText}>Placeholder: overview of topics and active procedures.</Text>
    </View>
  );
}

function ChatPlaceholder() {
  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderTitle}>Chat</Text>
      <Text style={styles.placeholderText}>Placeholder: conversation thread goes here.</Text>
    </View>
  );
}

function TabButton({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.tab, active && styles.tabActive]}>
      <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  body: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  placeholderTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  placeholderText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: '#E6F4FE',
  },
  tabLabel: {
    fontSize: 15,
    color: '#444',
  },
  tabLabelActive: {
    color: '#0a5fa8',
    fontWeight: '600',
  },
});
