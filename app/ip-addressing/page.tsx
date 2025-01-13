import Link from 'next/link';

export default function IPAddressing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">IPv4 and IPv6, Subnetting and Supernetting</h1>
      
      <p className="mb-4">Internet Protocol (IP) is the principal communications protocol in the Internet protocol suite for relaying datagrams across network boundaries. IPv4 and IPv6 are two versions of the Internet Protocol.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">3.1 IPv4 (Internet Protocol version 4)</h2>
      <p className="mb-4">IPv4 is the fourth version of the Internet Protocol and the most widely used version.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Key features:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>32-bit address space (approximately 4.3 billion unique addresses)</li>
        <li>Dotted-decimal notation (e.g., 192.168.0.1)</li>
        <li>Classful (originally) and Classless addressing</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">3.1.1 IPv4 Address Structure</h3>
      <p className="mb-4">An IPv4 address is a 32-bit number divided into four 8-bit octets.</p>
      <p className="mb-4">Example: 192.168.0.1</p>
      <p className="mb-4">In binary: 11000000.10101000.00000000.00000001</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">3.1.2 IPv4 Address Classes</h3>
      <p className="mb-4">IPv4 addresses are divided into five classes (A, B, C, D, and E) based on their leading bits and intended usage.</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Class A: For large networks (1.0.0.0 to 126.0.0.0)</li>
        <li>Class B: For medium-sized networks (128.0.0.0 to 191.255.0.0)</li>
        <li>Class C: For small networks (192.0.0.0 to 223.255.255.0)</li>
        <li>Class D: For multicast groups (224.0.0.0 to 239.255.255.255)</li>
        <li>Class E: Reserved for experimental purposes (240.0.0.0 to 255.255.255.255)</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">3.1.3 Limitations of IPv4</h3>
      <p className="mb-4">The growing demand for IP addresses has led to the exhaustion of the IPv4 address space, necessitating the development of IPv6.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">3.2 IPv6 (Internet Protocol version 6)</h2>
      <p className="mb-4">IPv6 is the most recent version of the Internet Protocol, designed to address the exhaustion of IPv4 addresses.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Key features:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>128-bit address space (approximately 3.4 × 10^38 unique addresses)</li>
        <li>Hexadecimal notation with colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334)</li>
        <li>Simplified header format</li>
        <li>Built-in security (IPsec)</li>
        <li>Better support for QoS</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">3.2.1 IPv6 Address Types</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Unicast: Identifies a single interface</li>
        <li>Anycast: Delivered to the nearest interface among a group</li>
        <li>Multicast: Delivered to multiple interfaces</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">3.2.2 Advantages of IPv6</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Virtually unlimited address space</li>
        <li>Efficient routing and reduced overhead</li>
        <li>Improved security features</li>
        <li>Better support for mobile devices</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">3.3 Subnetting and Supernetting</h2>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">3.3.1 Subnetting</h3>
      <p className="mb-4">Subnetting is the process of dividing a larger network into smaller subnetworks to improve network management and efficiency.</p>
      <h4 className="text-lg font-semibold mt-4 mb-2">Key points:</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Improves network performance and security</li>
        <li>Allows for more efficient use of IP addresses</li>
        <li>Uses a subnet mask to identify network and host portions of an IP address</li>
      </ul>
      <p className="mb-4">Example: Subnetting a Class C network (192.168.1.0/24) into smaller networks with /26 subnet masks creates four subnets, each with 64 addresses.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">3.3.2 Supernetting (CIDR - Classless Inter-Domain Routing)</h3>
      <p className="mb-4">Supernetting combines multiple smaller networks into a larger one to reduce routing complexity and make efficient use of IP address space.</p>
      <h4 className="text-lg font-semibold mt-4 mb-2">Key points:</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Reduces routing table size</li>
        <li>More efficient use of IP address space</li>
        <li>Uses CIDR notation (e.g., /20) to represent the network prefix</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">3.3.3 Practical Example of Supernetting</h3>
      <p className="mb-4">Combining two /24 networks (192.168.0.0/24 and 192.168.1.0/24) into a single /23 network reduces routing complexity and saves address space.</p>
      
      <Link href="/" className="text-blue-600 hover:underline">Back to Table of Contents</Link>
    </div>
  );
}

