import type { Metadata } from 'next'
import React from 'react'
import Banner from '@/components/OurTeam/Banner'
import Founders from '@/components/OurTeam/Founders'
import GroupCeo from '@/components/OurTeam/GroupCeo'
import CEoRsa from '@/components/OurTeam/CEoRsa'
import CoreTeam from '@/components/OurTeam/CoreTeam'
import OurPeople from '@/components/OurTeam/OurPeople'
import TeamSider from '@/components/OurTeam/TeamSider'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the founders, leadership, and team behind RSA.',
  alternates: { canonical: '/our-team' },
  openGraph: { url: '/our-team', images: [{ url: '/team.png' }] },
  keywords: ['team', 'leadership', 'founders', 'staff'],
}

const page = () => {
  return (
    <div>
      <Banner />
      <Founders />
      <GroupCeo />
      <CEoRsa />
      <CoreTeam />
      <OurPeople />
      <TeamSider />
    </div>
  )
}

export default page