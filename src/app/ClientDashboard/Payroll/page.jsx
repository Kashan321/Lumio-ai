export default function PayrollPage() {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Payroll management</h1>
          <p className="text-gray-600">Payroll management is on autopilot</p>
        </div>
  
        <div className="bg-white p-6 rounded-lg border mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-600">Monthly Payroll</div>
              <div className="text-2xl font-bold">$5,700</div>
            </div>
          </div>
        </div>
  
        <div className="bg-white rounded-lg border">
          <div className="p-4 border-b">
            <h2 className="font-semibold">Payment history</h2>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4">Invoice</th>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Status</th>
                <th className="text-right p-4">Download</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: "05 June, 2024", status: "Completed" },
                { date: "05 May, 2024", status: "Completed" },
              ].map((invoice, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4">Invoice name</td>
                  <td className="p-4">{invoice.date}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-sm bg-green-100 text-green-700">
                      {invoice.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-50">Download PDF</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  