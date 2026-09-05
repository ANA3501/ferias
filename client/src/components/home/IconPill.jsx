export function IconPill({ icon: Icon, children }) {
  return (
    <span className="icon-pill">
      <Icon size={14} strokeWidth={1.8} />
      {children}
    </span>
  );
}
