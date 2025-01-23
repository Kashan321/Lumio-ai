import Image from "next/image"

export default function MonthlyPayroll() {
  const monthlyAmount = 5700
  const paymentHistory = [
    { invoiceName: "Invoice name", date: "05 June, 2024", status: "Completed" },
    { invoiceName: "Invoice name", date: "05 May, 2024", status: "Completed" },
  ]

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <p className="text-sm text-gray-500 text-center mb-4">Payroll management is on autopilot</p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="Wallet icon"
              width={24}
              height={24}
              className="text-blue-500"
            />
          </div>
          <div>
            <div className="text-sm text-gray-600">Monthly Payroll</div>
            <div className="text-xl font-semibold">${monthlyAmount.toLocaleString()}</div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Payment history</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Invoice</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">Download</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-3 px-4 text-sm">{payment.invoiceName}</td>
                    <td className="py-3 px-4 text-sm">{payment.date}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center gap-1 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        {payment.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button className="text-sm text-gray-600 hover:text-gray-900">↓ Download PDF</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}