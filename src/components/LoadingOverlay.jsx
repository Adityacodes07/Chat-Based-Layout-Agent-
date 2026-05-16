export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
        {/* Spinner */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-white mb-3">
          Processing Your Instruction
        </h2>

        {/* Message */}
        <p className="text-slate-300 leading-relaxed">
          Using a free AI model, so the response may take
          <span className="font-semibold text-blue-400"> 20–60 seconds</span>.
          <br />
          Please wait while the layout is being updated.
        </p>
      </div>
    </div>
  );
}