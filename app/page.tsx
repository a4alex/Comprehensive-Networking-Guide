import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Comprehensive Networking Guide</h1>
      <p className="mb-4">This guide covers fundamental concepts of computer networking, focusing on routing algorithms, congestion control, IP addressing, and various protocols. It's designed for exam preparation and spans multiple topics in detail.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Table of Contents</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><Link href="/routing-algorithms" className="text-blue-600 hover:underline">Routing Algorithms</Link></li>
        <li><Link href="/congestion-control" className="text-blue-600 hover:underline">Congestion Control</Link></li>
        <li><Link href="/ip-addressing" className="text-blue-600 hover:underline">IPv4 and IPv6, Subnetting and Supernetting</Link></li>
        <li><Link href="/application-layer" className="text-blue-600 hover:underline">Application Layer Protocols</Link></li>
        <li><Link href="/transport-layer" className="text-blue-600 hover:underline">Transport Layer Protocols (TCP and UDP)</Link></li>
        <li><Link href="/tcp-connection" className="text-blue-600 hover:underline">TCP Connection Management</Link></li>
        <li><Link href="/error-detection" className="text-blue-600 hover:underline">Error Detection and Correction</Link></li>
        <li><Link href="/practice-questions" className="text-blue-600 hover:underline">Practice Questions</Link></li>
      </ul>
      
      <div style={{
  position: 'absolute',
  bottom: 0,
  right: 0,
}}>
  <p>Developed and Researched By :- Alex</p>
</div>

    </div>
  )
}

