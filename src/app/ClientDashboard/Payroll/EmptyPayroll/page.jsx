import Image from "next/image"

export default function EmptyPayroll() {
  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Image
              src={"/assets/"}
              alt="Wallet icon"
              width={24}
              height={24}
              className="text-blue-500"
            />
          </div>
          <div>
            <div className="text-sm text-gray-600">Monthly Payroll</div>
            <div className="text-xl font-semibold">$0</div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-12">
          <Image
            src={"/assets"}
            alt="No payroll illustration"
            width={200}
            height={200}
            className="mb-4"
          />
          <p className="text-gray-600">No active payroll found</p>
        </div>
      </div>
    </div>
  )
}

