export default function ChatMessage({ role, content }) {
  const isUser = role === 'user';

  return (
    <div
      className={`max-w-[80%] p-3 rounded-xl mb-3 whitespace-pre-wrap ${
        isUser
          ? 'bg-blue-600 ml-auto'
          : 'bg-slate-700 mr-auto'
      }`}
    >
      {content}
    </div>
  );
}