export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between">
      {children}
    </div>
  );
}
