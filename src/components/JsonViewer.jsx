export default function JsonViewer({ data }) {
  return (
    <div className="h-full bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
      <div className="p-4 border-b border-slate-700 font-semibold">
        Updated Layout JSON
      </div>

      <pre className="p-4 text-sm overflow-auto h-[calc(100%-57px)] text-green-300">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}