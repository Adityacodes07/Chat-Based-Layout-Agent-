import { useState } from 'react';

export default function ChatInput({ onSend, loading }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    const trimmed = message.trim();
    if (!trimmed || loading) return;

    onSend(trimmed);
    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t border-slate-700">
      <textarea
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your instruction..."
        className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 outline-none"
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="mt-3 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Send'}
      </button>
    </div>
  );
}