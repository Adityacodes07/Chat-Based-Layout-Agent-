   import { useState } from 'react';
import initialLayout from './assets/design.json';
import defaultMessages from './constants/defaultMessages';
import ChatPanel from './components/ChatPanel';
import JsonViewer from './components/JsonViewer';
import { updateLayoutWithAI } from "./services/openRouterService";
import LoadingOverlay from "./components/LoadingOverlay";
import { Link } from "react-router-dom";

export default function App() {
  const [layout, setLayout] = useState(initialLayout);
  const [messages, setMessages] = useState(defaultMessages);
  const [loading, setLoading] = useState(false);

  const handleSend = async (instruction) => {
    const userMessage = { role: 'user', content: instruction };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
   
   try {
      const updatedLayout = await updateLayoutWithAI(layout, instruction);

      setLayout(updatedLayout);

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Layout updated successfully.'
        }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Error: ${error.message}`
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
     
    <div className="min-h-screen bg-slate-950 text-white p-6">
     <div className="flex justify-between items-center mb-6">
  {/* Title */}
  <h1 className="text-3xl md:text-4xl font-bold text-white">
    AI Layout Agent
  </h1>

  {/* Developer Button */}
  <Link
    to="/developer"
    className="
      inline-flex items-center gap-2
      px-5 py-3
      bg-gradient-to-r from-emerald-400 to-green-500
      text-black font-bold text-sm md:text-base
      rounded-xl
      shadow-lg shadow-emerald-500/20
      hover:from-emerald-300 hover:to-green-400
      hover:shadow-emerald-400/30
      hover:scale-105
      transition-all duration-300
    "
  >
    <span className="text-lg">👨‍💻</span>
    <span>Developer</span>
  </Link>
</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[85vh]">
        <ChatPanel
          messages={messages}
          onSend={handleSend}
          loading={loading}
        />

        <JsonViewer data={layout} />
      </div>
      {loading && <LoadingOverlay />}
    </div>
  );
}