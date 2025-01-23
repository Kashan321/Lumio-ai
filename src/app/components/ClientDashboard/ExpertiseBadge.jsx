export function ExpertiseBadge({ icon, label }) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1 text-sm">
        {icon} {label}
      </span>
    )
  }
  
  