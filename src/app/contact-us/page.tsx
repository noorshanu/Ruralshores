import type { Metadata } from 'next'
import Banner from '@/components/ContactUs/Banner'
import ContactForm from '@/components/ContactUs/ContactForm'
import UpperText from '@/components/ContactUs/UpperText'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with RuralShores Skills Academy for partnerships, hiring, or training inquiries.',
  alternates: { canonical: '/contact-us' },
  openGraph: { url: '/contact-us', images: [{ url: '/contact-us.png' }] },
  keywords: ['contact', 'inquiries', 'support', 'RuralShores Skills Academy'],
}

const page = () => {
  return (
    <div>
      <Banner />
      <UpperText />
      <ContactForm />
    </div>
  )
}

export default page