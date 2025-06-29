// components/DarkBox.tsx
// -------------------------------------------------
export default function DarkBox({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return (
      <div
        className={`bg-white text-black dark:bg-black dark:text-white p-4 rounded ${className}`}
      >
        {children}
      </div>
    );
  }
  