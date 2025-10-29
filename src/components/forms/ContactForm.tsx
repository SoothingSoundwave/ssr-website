'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-[#E5E7EB] mb-2">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-4 py-2 bg-[#1F2937] border border-[#4B5563] rounded-md text-[#F9FAFB]"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-[#E5E7EB] mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-4 py-2 bg-[#1F2937] border border-[#4B5563] rounded-md text-[#F9FAFB]"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-[#E5E7EB] mb-2">Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          rows={4}
          className="w-full px-4 py-2 bg-[#1F2937] border border-[#4B5563] rounded-md text-[#F9FAFB]"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#C879FF] hover:bg-[#B066E6] text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        Send Message
      </button>
    </form>
  )
}
