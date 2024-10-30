import { useState } from 'react'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzERcz-NCqTPuAxiRFbDTQs_XuMg2OZiLa_psLdb_CMry1IpP4Iq45wMISAUo3abAfy/exec'

export default function EmailForm() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            })

            setStatus('Thank you for subscribing!')
            setEmail('')
        } catch (error) {
            setStatus(`Error: ${error.message || 'Something went wrong'}`)
            console.error('Error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto my-8">
            <div className="flex flex-col sm:flex-row gap-2">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-success"
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 text-white bg-success-600 rounded-md hover:bg-success-700 focus:outline-none focus:ring-2 focus:ring-success disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Submitting...' : 'Sign Up'}
                </button>
            </div>
            {status && (
                <div className={`mt-4 text-center ${status.includes('Error') ? 'text-danger' : 'text-success'}`}>
                    {status}
                </div>
            )}
        </form>
    )
} 