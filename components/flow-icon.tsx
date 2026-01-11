export function FlowIcon() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <path
            d="M15 20 L20 25 L30 15"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          />
          <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5" className="text-primary/40" />
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight">Flow Executer</span>
    </div>
  )
}
