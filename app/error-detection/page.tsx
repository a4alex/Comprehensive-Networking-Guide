import Link from 'next/link';

export default function ErrorDetection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Error Detection and Correction</h1>
      
      <p className="mb-4">Error detection and correction techniques are crucial for maintaining data integrity in network communications.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">7.1 Error Detection Techniques</h2>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">7.1.1 Parity Check</h3>
      <p className="mb-4">Parity check adds an extra bit to detect single-bit errors.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">7.1.2 Cyclic Redundancy Check (CRC)</h3>
      <p className="mb-4">CRC is a powerful error-detecting code used in digital networks and storage devices.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">7.1.3 Checksum</h3>
      <p className="mb-4">Checksum is a simple error-detection scheme that adds up the values of the transmitted words and sends the sum along with the data.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">7.2 Error Correction Techniques</h2>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">7.2.1 Hamming Code</h3>
      <p className="mb-4">Hamming code is a linear error-correcting code that can detect up to two simultaneous bit errors and correct single-bit errors.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">7.2.2 Reed-Solomon Codes</h3>
      <p className="mb-4">Reed-Solomon codes are block-based error correcting codes widely used in storage systems and digital communications.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">7.3 Numerical Problem: CRC Calculation</h2>
      <p className="mb-4">Problem: Given the data 10110011 and generator polynomial x^3 + x + 1, calculate the CRC.</p>
      
      <h3 className="text-xl font-semibold mt-6 mb-3">Solution:</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`
Generator polynomial: 1011

Data: 10110011000 (appended with 3 zeros)

Division process:
  10110011000 | 1011
 -1011         -----------
   0001001
  -0000000
    1001100
   -1011000
     0101000
    -1011000
      1110000
     -1011000
       1010000
      -1011000
         01000

CRC: 010

Transmitted message: 10110011010
        `}
      </pre>
      
      <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">Back to Table of Contents</Link>
    </div>
  );
}

