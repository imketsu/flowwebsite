export function FlowIcon() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top wave */}
          <path
            d="M6 10 Q 12 6, 18 10 T 30 10 Q 33 11, 36 13"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-primary"
            fill="none"
          />
          {/* Middle wave */}
          <path
            d="M6 20 Q 12 16, 18 20 T 30 20 Q 33 21, 34 22"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-primary"
            fill="none"
          />
          {/* Bottom wave */}
          <path
            d="M8 30 Q 12 27, 16 30 T 24 30"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-primary"
            fill="none"
          />
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight">Flow Executer</span>
    </div>
  )
}
