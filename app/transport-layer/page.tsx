import Link from 'next/link';

export default function TransportLayer() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Transport Layer Protocols (TCP and UDP)</h1>
      
      <p className="mb-4">The transport layer is a crucial component of the OSI model and the TCP/IP stack, responsible for end-to-end communication between devices. It ensures data is transferred reliably and efficiently, offering key services such as error detection, data segmentation, and flow control.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5.1 Transmission Control Protocol (TCP)</h2>
      <p className="mb-4">TCP is a connection-oriented protocol that provides reliable communication through acknowledgment mechanisms and error-checking features. It ensures data is delivered in the correct order and without duplication.</p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Key Features:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Guaranteed delivery:</strong> TCP uses acknowledgment (ACK) messages to confirm successful delivery of data packets.</li>
        <li><strong>Flow control:</strong> Employs mechanisms like sliding windows to regulate the data flow between sender and receiver.</li>
        <li><strong>Congestion control:</strong> Implements algorithms like TCP Reno and TCP Vegas to prevent network congestion.</li>
        <li><strong>Full-duplex communication:</strong> Allows simultaneous data transmission and reception.</li>
        <li><strong>Segmentation:</strong> Splits data into manageable segments for transmission and reassembles them at the destination.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">Applications of TCP:</h3>
      <p className="mb-4">TCP is widely used in applications requiring reliable data transmission, such as:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Web browsing (HTTP/HTTPS)</li>
        <li>Email (SMTP, IMAP, POP3)</li>
        <li>File transfer (FTP)</li>
        <li>Remote login (SSH, Telnet)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5.2 User Datagram Protocol (UDP)</h2>
      <p className="mb-4">UDP is a connectionless protocol that prioritizes speed and low-latency communication over reliability. It is lightweight and suitable for real-time applications.</p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Key Features:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>No guaranteed delivery:</strong> Data packets may be lost or arrive out of order without retransmission.</li>
        <li><strong>Low overhead:</strong> UDP has minimal protocol overhead compared to TCP.</li>
        <li><strong>Stateless communication:</strong> Does not establish or maintain connections between devices.</li>
        <li><strong>Broadcast and multicast support:</strong> Allows efficient communication with multiple recipients.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">Applications of UDP:</h3>
      <p className="mb-4">UDP is ideal for applications where speed and efficiency are more critical than reliability, such as:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Video streaming (YouTube, Netflix)</li>
        <li>Voice over IP (VoIP)</li>
        <li>Online gaming</li>
        <li>Domain Name System (DNS) queries</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5.3 Comparison of TCP and UDP</h2>
      <p className="mb-4">The table below highlights the key differences between TCP and UDP:</p>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Feature</th>
            <th className="border border-gray-300 p-2">TCP</th>
            <th className="border border-gray-300 p-2">UDP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Connection</td>
            <td className="border border-gray-300 p-2">Connection-oriented</td>
            <td className="border border-gray-300 p-2">Connectionless</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Reliability</td>
            <td className="border border-gray-300 p-2">Reliable</td>
            <td className="border border-gray-300 p-2">Unreliable</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Ordering</td>
            <td className="border border-gray-300 p-2">Ordered delivery</td>
            <td className="border border-gray-300 p-2">No order guarantee</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Error Checking</td>
            <td className="border border-gray-300 p-2">Extensive error checking</td>
            <td className="border border-gray-300 p-2">Basic error checking</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Flow Control</td>
            <td className="border border-gray-300 p-2">Yes</td>
            <td className="border border-gray-300 p-2">No</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Congestion Control</td>
            <td className="border border-gray-300 p-2">Yes</td>
            <td className="border border-gray-300 p-2">No</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Speed</td>
            <td className="border border-gray-300 p-2">Slower</td>
            <td className="border border-gray-300 p-2">Faster</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Usage</td>
            <td className="border border-gray-300 p-2">Web, Email, File Transfer</td>
            <td className="border border-gray-300 p-2">DNS, Streaming, VoIP</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5.4 Conclusion</h2>
      <p className="mb-4">The transport layer plays a pivotal role in ensuring reliable and efficient communication in networks. TCP is suited for applications requiring high reliability, while UDP excels in scenarios where low latency is critical. Understanding the strengths and limitations of each protocol is essential for designing robust and efficient networked applications.</p>

      <Link href="/" className="text-blue-600 hover:underline">Back to Table of Contents</Link>
    </div>
  );
}

