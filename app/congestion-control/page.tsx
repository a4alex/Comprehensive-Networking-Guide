import Link from 'next/link';

export default function ApplicationLayer() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Application Layer Protocols</h1>

      <p className="mb-4">
        The application layer is the topmost layer in both the OSI and TCP/IP models. It directly provides network services to end-users or applications, facilitating interaction between software and network protocols. Acting as a bridge between user applications and the network, this layer ensures data is presented in a user-friendly manner for seamless communication and resource sharing.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4.1 Hypertext Transfer Protocol (HTTP)</h2>
      <p className="mb-4">
        HTTP underpins the World Wide Web, enabling communication between web browsers and servers. It allows access to resources such as web pages, images, and videos. Being a stateless protocol, HTTP processes each request independently, necessitating additional mechanisms for session management.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Key features:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Client-server model: Facilitates structured communication between browsers and servers.</li>
        <li>Stateless protocol: Treats each request-response pair as distinct.</li>
        <li>Supports multiple methods: GET (retrieve data), POST (submit data), PUT (update resources), DELETE (remove resources), etc.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4.2 File Transfer Protocol (FTP)</h2>
      <p className="mb-4">
        FTP enables reliable file transfers between systems over a network. Widely utilized by web developers, administrators, and users, FTP is integral for managing files on remote servers.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Key features:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Separate control and data connections: Promotes efficient file transfer.</li>
        <li>Active and passive modes: Enhances compatibility with various network setups.</li>
        <li>User authentication: Ensures secure access via username and password.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4.3 Simple Mail Transfer Protocol (SMTP)</h2>
      <p className="mb-4">
        SMTP is the standard protocol for email transmission, enabling the transfer of messages from the sender's server to the recipient's server. Its reliability and efficiency are crucial for modern email communication.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Key features:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Text-based protocol: Employs plain text commands for interaction.</li>
        <li>Uses TCP port 25: Provides dependable, connection-oriented delivery.</li>
        <li>Authentication: Secures communication and reduces spam risks.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4.4 Domain Name System (DNS)</h2>
      <p className="mb-4">
        DNS operates as the Internet's directory, converting user-friendly domain names (e.g., www.example.com) into machine-readable IP addresses (e.g., 192.168.1.1). This essential service simplifies accessing online resources without needing to memorize numerical addresses.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Key features:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Domain-to-IP translation: Maps human-readable names to IP addresses.</li>
        <li>Hierarchical structure: Includes root, top-level domains (TLDs), and subdomains.</li>
        <li>TCP and UDP on port 53: Balances flexibility and efficiency in data transmission.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4.5 Other Application Layer Protocols</h2>
      <p className="mb-4">
        The application layer supports numerous other protocols designed for specific functions, such as:
      </p>

      <ul className="list-disc pl-6 mb-4">
        <li><strong>POP3 and IMAP:</strong> Facilitate retrieving and managing emails from mail servers.</li>
        <li><strong>Telnet:</strong> Provides a command-line interface for remote device management.</li>
        <li><strong>SNMP:</strong> Enables remote monitoring and configuration of network devices.</li>
      </ul>

      <p className="mb-4">
        Collectively, these protocols ensure robust communication and data exchange across various applications and networks.
      </p>

      <Link href="/" className="text-blue-600 hover:underline">Back to Table of Contents</Link>
    </div>
  );
}

