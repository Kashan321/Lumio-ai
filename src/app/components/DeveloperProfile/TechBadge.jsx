export function TechBadge({ icon, name }) {
    return (
      <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-sm">
        <img src={icon || "/placeholder.svg"} alt="" className="mr-2 h-4 w-4" />
        {name}
      </span>
    )
  }
  
  