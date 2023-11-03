// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
//https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'dashboard',
}

export default function Page() {
  return <p>Hello, Dashboard Page!</p>
}