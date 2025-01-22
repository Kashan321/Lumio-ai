export default function StepItem({ number, title, description }) {
    return (
      <div className="flex items-start gap-4 mb-8">
        <div className="flex-shrink-0 w-8 h-8 rounded-full font-extrabold text-gray-600 flex items-center justify-center">
          {number}
        </div>
        <div>
          <h3 className="font-normal text-sm mb-1 text-white bg-blue-600 rounded-full px-3 max-w-fit p-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    )
  }
  
  