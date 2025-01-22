export default function SettingsPage() {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Options</h1>
        </div>
  
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Account</h2>
            <div className="space-y-4">
              <div className="grid gap-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="username"
                    value="mr.man"
                    readOnly
                    className="w-full px-3 py-2 border rounded-lg bg-gray-50"
                  />
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
  
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value="mr.man@atlas.com"
                  readOnly
                  className="w-full px-3 py-2 border rounded-lg bg-gray-50"
                />
              </div>
  
              <div className="grid gap-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value="+45487223982"
                  readOnly
                  className="w-full px-3 py-2 border rounded-lg bg-gray-50"
                />
              </div>
  
              <div className="grid gap-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company
                </label>
                <input id="company" value="Atlas" readOnly className="w-full px-3 py-2 border rounded-lg bg-gray-50" />
              </div>
            </div>
          </div>
  
          <div className="bg-white p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Payment method</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-blue-100 rounded"></div>
                <div>Credit card: **** **** **** 9823</div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  