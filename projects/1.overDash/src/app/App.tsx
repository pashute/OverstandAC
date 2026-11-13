import { useEffect, useState } from 'react';
import { Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const APP_VERSION = '0.1.1';
const NOT_IMPLEMENTED = 'Not Implemented yet';

type Screen = 'chat' | 'dashboard';
type ViewMode = 'Network' | 'Word cloud' | 'List';
const VIEW_MODES: ViewMode[] = ['Network', 'Word cloud', 'List'];

export default function App() {
  const [screen, setScreen] = useState<Screen>('chat');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = `Overdash v${APP_VERSION}`;
    }
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.title}>Overdash - the Overstand chat and dashboard. v{APP_VERSION}</Text>
      </View>

      <View style={styles.body}>{screen === 'chat' ? <ChatTab /> : <DashboardTab />}</View>

      <View style={styles.tabBar}>
        <TabButton label="Chat" active={screen === 'chat'} onPress={() => setScreen('chat')} />
        <TabButton label="Dashboard" active={screen === 'dashboard'} onPress={() => setScreen('dashboard')} />
      </View>
    </SafeAreaView>
  );
}

function TabButton({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.tab, active && styles.tabActive]}>
      <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{label}</Text>
    </Pressable>
  );
}

// Stands in for the real reply pipeline, which is not built yet.
function requestReply(_text: string): never {
  throw new Error(NOT_IMPLEMENTED);
}

function ChatTab() {
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  function submit() {
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => [text, ...prev]);
    setDraft('');
    try {
      requestReply(text);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : NOT_IMPLEMENTED);
    }
  }

  return (
    <View style={styles.pane}>
      <View style={styles.tableHeader}>
        <Text style={[styles.colHeader, styles.colChat]}>Chat</Text>
        <Text style={[styles.colHeader, styles.colTopics]}>Topics</Text>
        <Text style={[styles.colHeader, styles.colComprehens]}>Comprehens</Text>
      </View>

      <View style={styles.tableBody}>
        <View style={[styles.colChat, styles.chatColumn]}>
          <ScrollView style={styles.messages} contentContainerStyle={styles.messagesContent}>
            {messages.map((m, i) => (
              <MessageBubble key={`${messages.length - i}-${m}`} text={m} />
            ))}
          </ScrollView>

          <View style={styles.inputRow}>
            <TextInput
              value={draft}
              onChangeText={setDraft}
              placeholder="Type a message"
              style={styles.input}
              multiline
            />
            <Pressable onPress={submit} style={styles.button}>
              <Text style={styles.buttonLabel}>Send</Text>
            </Pressable>
          </View>

          {error ? (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}
        </View>

        <View style={[styles.colTopics, styles.emptyColumn]} />
        <View style={[styles.colComprehens, styles.emptyColumn]} />
      </View>
    </View>
  );
}

function MessageBubble({ text }: { text: string }) {
  return (
    <View style={styles.bubbleRow}>
      <View style={styles.bubble}>
        <Text style={styles.bubbleText}>{text}</Text>
        <View style={styles.bubbleTail} />
      </View>
    </View>
  );
}

function DashboardTab() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [mode, setMode] = useState<ViewMode>('Network');
  const [views, setViews] = useState<ViewMode[]>([]);

  return (
    <View style={[styles.pane, styles.dashPane]}>
      <View style={styles.dashMain}>
        <View style={styles.dashTopBar}>
          <Pressable onPress={() => setPopupOpen(true)} style={styles.button}>
            <Text style={styles.buttonLabel}>Choose comprehens</Text>
          </Pressable>
          <View style={styles.modeSwitch}>
            {VIEW_MODES.map((m) => (
              <Pressable
                key={m}
                onPress={() => setMode(m)}
                style={[styles.modeOption, m === mode && styles.modeOptionActive]}
              >
                <Text style={[styles.modeLabel, m === mode && styles.modeLabelActive]}>{m}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <ScrollView style={styles.viewList} contentContainerStyle={styles.viewListContent}>
          {views.length === 0 ? <Text style={styles.hint}>Press + to add a view.</Text> : null}
          {views.map((v, i) => (
            <View key={i} style={styles.viewCard}>
              <Text style={styles.viewCardTitle}>{v} view</Text>
              <Text style={styles.hint}>Placeholder.</Text>
            </View>
          ))}
          <Pressable onPress={() => setViews((prev) => [...prev, mode])} style={styles.bigAdd}>
            <Text style={styles.bigAddLabel}>+</Text>
          </Pressable>
        </ScrollView>
      </View>

      <View style={[styles.dashSide, styles.dashSideBorder]}>
        <Text style={styles.sideHeader}>Details</Text>
        <Text style={styles.hint}>Placeholder: one overview per comprehen.</Text>
      </View>

      <View style={styles.dashSide}>
        <Text style={styles.sideHeader}>Conclusions</Text>
        <Text style={styles.hint}>Placeholder: insights from the comprehen.</Text>
      </View>

      <Modal visible={popupOpen} transparent animationType="fade" onRequestClose={() => setPopupOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setPopupOpen(false)}>
          <Pressable style={styles.popup} onPress={() => undefined}>
            <Text style={styles.popupTitle}>Choose comprehen</Text>
            <Text style={styles.hint}>No active comprehens listed.</Text>
            <Pressable onPress={() => setPopupOpen(false)} style={styles.button}>
              <Text style={styles.buttonLabel}>Close</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

const BUBBLE_GREEN = '#bfe8c4';
const BORDER = '#ccc';

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: BORDER,
  },
  title: { fontSize: 16, fontWeight: '600' },
  body: { flex: 1 },
  tabBar: { flexDirection: 'row', borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: BORDER },
  tab: { flex: 1, paddingVertical: 14, alignItems: 'center' },
  tabActive: { backgroundColor: '#E6F4FE' },
  tabLabel: { fontSize: 15, color: '#444' },
  tabLabelActive: { color: '#0a5fa8', fontWeight: '600' },

  pane: { flex: 1 },

  // Chat
  tableHeader: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: BORDER },
  tableBody: { flex: 1, flexDirection: 'row' },
  colHeader: { padding: 10, fontWeight: '600', borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: BORDER },
  colChat: { flex: 2 },
  colTopics: { flex: 1 },
  colComprehens: { flex: 1 },
  chatColumn: { borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: BORDER, padding: 8 },
  emptyColumn: { borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: BORDER },
  messages: { flex: 1 },
  messagesContent: { paddingVertical: 4 },
  bubbleRow: { alignItems: 'flex-start', paddingLeft: 8, marginVertical: 4 },
  bubble: {
    backgroundColor: BUBBLE_GREEN,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxWidth: '85%',
  },
  bubbleText: { fontSize: 15, color: '#1b3d22' },
  bubbleTail: {
    position: 'absolute',
    left: -5,
    top: 12,
    width: 12,
    height: 12,
    backgroundColor: BUBBLE_GREEN,
    transform: [{ rotate: '45deg' }],
  },
  inputRow: { flexDirection: 'row', alignItems: 'flex-end', gap: 8, marginTop: 8 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 15,
    maxHeight: 120,
  },
  errorBox: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#e0a0a0',
    backgroundColor: '#fdecec',
    borderRadius: 8,
    padding: 10,
  },
  errorText: { color: '#8a1f1f', fontSize: 14 },

  // Shared controls
  button: {
    backgroundColor: '#0a5fa8',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: { color: '#fff', fontWeight: '600', fontSize: 14 },
  hint: { color: '#666', fontSize: 14, textAlign: 'center' },

  // Dashboard
  dashPane: { flexDirection: 'row' },
  dashMain: { flex: 2, padding: 8 },
  dashTopBar: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 8 },
  modeSwitch: { flexDirection: 'row', borderWidth: 1, borderColor: BORDER, borderRadius: 8, overflow: 'hidden' },
  modeOption: { paddingHorizontal: 10, paddingVertical: 9 },
  modeOptionActive: { backgroundColor: '#E6F4FE' },
  modeLabel: { fontSize: 13, color: '#444' },
  modeLabelActive: { color: '#0a5fa8', fontWeight: '600' },
  viewList: { flex: 1 },
  viewListContent: { gap: 8, paddingBottom: 16 },
  viewCard: { borderWidth: 1, borderColor: BORDER, borderRadius: 10, padding: 16, minHeight: 120, justifyContent: 'center', alignItems: 'center' },
  viewCardTitle: { fontWeight: '600', marginBottom: 4 },
  bigAdd: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#0a5fa8',
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: 'center',
  },
  bigAddLabel: { fontSize: 36, color: '#0a5fa8', lineHeight: 40 },
  dashSide: { flex: 1, padding: 12 },
  dashSideBorder: { borderLeftWidth: StyleSheet.hairlineWidth, borderLeftColor: BORDER, borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: BORDER },
  sideHeader: { fontWeight: '600', marginBottom: 8 },

  // Popup
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.35)', justifyContent: 'center', padding: 24 },
  popup: { backgroundColor: '#fff', borderRadius: 12, padding: 20, gap: 12 },
  popupTitle: { fontSize: 18, fontWeight: '600' },
});
