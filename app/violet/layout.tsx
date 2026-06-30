export default function VioletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-theme="violet" className="min-h-screen" style={{ backgroundColor: "var(--cp-bg)" }}>
      {/* Violet-Vorschau-Banner */}
      <div
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full text-sm font-medium shadow-xl backdrop-blur-sm"
        style={{ backgroundColor: "#3d1a8a", color: "#f0e8ff", border: "1px solid #6b3db5" }}
      >
        🎨 Violettes Design – Vorschau
      </div>
      {children}
    </div>
  );
}
