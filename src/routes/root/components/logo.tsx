export function Logo({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <div
      className="h-16 px-[22px] border-b flex items-center"
      style={{ justifyContent: isCollapsed ? "center" : "flex-start" }}
    >
      <p className="text-xl font-bold">{isCollapsed ? "S" : "SISMA Admin"}</p>
    </div>
  );
}
