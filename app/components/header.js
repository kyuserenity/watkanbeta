export default function Header({ children }) {
  return (
    <header className="max-w-lg mx-auto p-4 h-20 flex items-center justify-center">
      {children}
    </header>
  );
}