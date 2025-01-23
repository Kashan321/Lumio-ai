export function Badge({ children, className = "" }) {
    return <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm ${className}`}>{children}</span>
  }
  
  