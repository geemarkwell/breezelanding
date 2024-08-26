'use client'
import React, { useState } from 'react'

const Form = () => {
  const [email, setEmail] = useState('') // State to store email input
  const [joined, setJoined] = useState(false) // State to track if user has joined the waitlist
  const [loading, setLoading] = useState(false) // State to track loading status

  const handleJoinWaitlist = async () => {
    setLoading(true) // Set loading state to true when the request starts

    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      if (!response.ok) {
        console.log('Failed to send email')
        return
      }

      // Set the joined state to true if the request is successful
      setJoined(true)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false) // Set loading state to false when the request ends
    }
  }

  const handleClick = () => {
    void handleJoinWaitlist() // Use `void` to explicitly ignore the promise
  }

  return (
    <div className="flex flex-col" id="waitlist">
      <div className="text-4xl font-semibold max-w-xl text-center px-4">
        {/* <span>Be the <span className="text-green-500">first</span> to know when Breeze is available.</span> */}
      </div>
      <div>
        <div className="flex justify-center">
          <div className="flex mt-6 flex-col md:flex-row">
            <div className="sm:col-span-4 mt-4">
              <div
                className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300
                  focus:none sm:max-w-md mr-2"
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }} // Update email state on input change
                  className="w-72 h-12 rounded-md block flex-1 bg-transparent py-4 pl-4
                    text-white placeholder:text-gray-400 focus:none sm:text-md
                    sm:leading-6 text-lg"
                  placeholder="Enter your e-mail"
                  disabled={joined || loading} // Disable input if joined or loading
                />
              </div>
            </div>
            <button
              onClick={handleClick} // Use a synchronous function here
              className={`mx-auto text-white px-6 py-2 rounded-md shadow border
              font-medium mt-4 text-xl ${
                joined
                  ? 'bg-green-700'
                  : 'bg-blue-700 hover:brightness-90'
              }`}
              disabled={joined || loading} // Disable button if joined or loading
            >
              {loading ? (
                <div
                  role="status"
                  className="flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600
                      fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">
                    Loading...
                  </span>
                </div>
              ) : joined ? (
                'Joined'
              ) : (
                'Join Waitlist'
              )}{' '}
              {/* Change button text based on state */}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
