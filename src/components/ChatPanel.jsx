import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

export default function ChatPanel({ messages, onSend, loading }) {
  return (
    <div className="flex flex-col h-full bg-slate-900 rounded-2xl border border-slate-700">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            role={msg.role}
            content={msg.content}
          />
        ))}
      </div>

      <ChatInput onSend={onSend} loading={loading} />
    </div>
  );
}