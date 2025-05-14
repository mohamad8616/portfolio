"use client";

export default function Button({
  children,
  color,
  onDelete,
  id,
  onOpen,
  type = "edit",
}) {
  if (type === "edit") {
    return (
      <button
        onClick={() => onOpen(true)}
        className={`rounded bg-${color}-500 px-3 py-1 text-sm text-white hover:bg-${color}-600`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={() => onDelete(id)}
      className={`rounded bg-${color}-500 px-3 py-1 text-sm text-white hover:bg-${color}-600`}
    >
      {children}
    </button>
  );
}
