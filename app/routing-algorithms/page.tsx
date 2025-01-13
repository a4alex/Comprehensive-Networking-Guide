import Link from 'next/link'

export default function RoutingAlgorithms() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">1. Routing Algorithms</h1>
      
      <p className="mb-4">Routing algorithms are fundamental to the operation of computer networks, determining the best path for data to travel from source to destination. This chapter provides an in-depth exploration of various routing algorithms, their principles, advantages, and limitations.</p>
      
      <h2 className="text-3xl font-semibold mt-8 mb-4">1.1 Introduction to Routing</h2>
      <p className="mb-4">Routing is the process of selecting paths in a network along which to send network traffic. Routing is performed for many kinds of networks, including the telephone network, electronic data networks (such as the Internet), and transportation networks.</p>
      
      <h3 className="text-2xl font-semibold mt-6 mb-3">1.1.1 Key Concepts in Routing</h3>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Node:</strong> Any device in a network, such as a router, switch, or host.</li>
        <li><strong>Link:</strong> A connection between two nodes in a network.</li>
        <li><strong>Path:</strong> A sequence of links that connects two nodes.</li>
        <li><strong>Routing Table:</strong> A data table stored in a router or a networked computer that lists the routes to particular network destinations.</li>
        <li><strong>Hop:</strong> The trip a data packet takes from one router or intermediate point to another in the network.</li>
        <li><strong>Metric:</strong> A value used by routing algorithms to determine the optimal path for traffic to take.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.1.2 Goals of Routing Algorithms</h3>
      <p className="mb-4">Effective routing algorithms aim to achieve several objectives:</p>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Optimality:</strong> Finding the best route based on chosen metrics and constraints.</li>
        <li><strong>Simplicity:</strong> Implementing the algorithm with minimal software and processing overhead.</li>
        <li><strong>Robustness:</strong> Functioning correctly despite hardware failures, high load, and errors.</li>
        <li><strong>Stability:</strong> Converging to steady-state behavior within a reasonable time.</li>
        <li><strong>Fairness:</strong> Providing equitable access to resources for all network nodes.</li>
        <li><strong>Efficiency:</strong> Minimizing routing protocol traffic and routing table size.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4">1.2 Classification of Routing Algorithms</h2>
      <p className="mb-4">Routing algorithms can be classified based on various criteria:</p>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.2.1 Static vs. Dynamic Routing</h3>
      <h4 className="text-xl font-semibold mt-4 mb-2">Static Routing</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Routes are fixed and do not change in response to network conditions.</li>
        <li>Suitable for small networks or networks with predictable traffic patterns.</li>
        <li>Requires manual configuration and updates.</li>
        <li>Advantages: Predictable, low overhead, secure.</li>
        <li>Disadvantages: Not scalable, doesn't adapt to network changes.</li>
      </ul>

      <h4 className="text-xl font-semibold mt-4 mb-2">Dynamic Routing</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Routes change automatically in response to network topology or traffic changes.</li>
        <li>Uses routing protocols to exchange routing information between routers.</li>
        <li>Adapts to network changes and failures.</li>
        <li>Advantages: Scalable, adaptive, automatic fail-over.</li>
        <li>Disadvantages: More complex, higher overhead, potential for routing loops.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.2.2 Flat vs. Hierarchical Routing</h3>
      <h4 className="text-xl font-semibold mt-4 mb-2">Flat Routing</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>All routers are peers of all others.</li>
        <li>No hierarchical structure.</li>
        <li>Suitable for small networks.</li>
        <li>Example: RIP (Routing Information Protocol)</li>
      </ul>

      <h4 className="text-xl font-semibold mt-4 mb-2">Hierarchical Routing</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Routers are organized into a hierarchy.</li>
        <li>Improves scalability for large networks.</li>
        <li>Reduces routing table size and update traffic.</li>
        <li>Example: OSPF (Open Shortest Path First) with areas</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.2.3 Intradomain vs. Interdomain Routing</h3>
      <h4 className="text-xl font-semibold mt-4 mb-2">Intradomain Routing (Interior Gateway Protocols - IGPs)</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Used within an autonomous system (AS).</li>
        <li>Examples: RIP, OSPF, EIGRP</li>
        <li>Focus on optimal path within the organization's network.</li>
      </ul>

      <h4 className="text-xl font-semibold mt-4 mb-2">Interdomain Routing (Exterior Gateway Protocols - EGPs)</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Used between autonomous systems.</li>
        <li>Example: BGP (Border Gateway Protocol)</li>
        <li>Focus on policy and scalability rather than just optimal path.</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4">1.3 Link-State Routing</h2>
      <p className="mb-4">Link-state routing is a dynamic routing algorithm where each router constructs a map of the network topology and uses this map to determine the best path to each destination.</p>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.3.1 Principles of Link-State Routing</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Each router discovers its neighbors and learns their network addresses.</li>
        <li>Each router measures the delay or cost to each of its neighbors.</li>
        <li>Each router constructs a packet telling all it has just learned.</li>
        <li>Each router broadcasts this packet to all other routers.</li>
        <li>Each router computes the shortest path to every other router.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.3.2 Dijkstra's Algorithm</h3>
      <p className="mb-4">Dijkstra's algorithm is the most well-known link-state routing algorithm. It computes the shortest path from a source node to all other nodes in the network.</p>

      <h4 className="text-xl font-semibold mt-4 mb-2">Steps of Dijkstra's Algorithm:</h4>
      <ol className="list-decimal pl-6 mb-4">
        <li>Initialize distances to all nodes as infinite, except the source node (distance = 0)</li>
        <li>Mark all nodes as unvisited</li>
        <li>For the current node, consider all unvisited neighbors and calculate their tentative distances</li>
        <li>When done considering all neighbors, mark the current node as visited</li>
        <li>If the destination node has been marked visited, or if the smallest tentative distance among unvisited nodes is infinity, stop</li>
        <li>Otherwise, select the unvisited node with the smallest tentative distance and set it as the new current node, then go back to step 3</li>
      </ol>

      <h4 className="text-xl font-semibold mt-4 mb-2">Example of Dijkstra's Algorithm:</h4>
      <p className="mb-4">Consider the following network:</p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
{`
   A --- 4 --- B
   |           |
   2           3
   |           |
   C --- 1 --- D
`}
      </pre>
      <p className="mb-4">To find the shortest path from A to all other nodes:</p>
      <ol className="list-decimal pl-6 mb-4">
        <li>Initialize: A(0), B(∞), C(∞), D(∞)</li>
        <li>Visit A: Update B(4), C(2)</li>
        <li>Visit C: Update D(3)</li>
        <li>Visit D: No updates</li>
        <li>Visit B: No updates</li>
      </ol>
      <p className="mb-4">Final shortest paths from A: B(4), C(2), D(3)</p>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.3.3 Open Shortest Path First (OSPF)</h3>
      <p className="mb-4">OSPF is a widely-used link-state routing protocol for IP networks.</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Uses Dijkstra's algorithm to calculate the shortest path tree.</li>
        <li>Supports hierarchical routing using areas.</li>
        <li>Fast convergence time.</li>
        <li>Supports equal-cost multipath routing.</li>
        <li>Uses "Hello" packets to discover and maintain neighbor relationships.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.3.4 Advantages and Disadvantages of Link-State Routing</h3>
      <h4 className="text-xl font-semibold mt-4 mb-2">Advantages:</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>More accurate view of network topology</li>
        <li>Faster convergence time compared to distance vector routing</li>
        <li>Less prone to routing loops</li>
        <li>Supports larger networks</li>
      </ul>
      <h4 className="text-xl font-semibold mt-4 mb-2">Disadvantages:</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Higher memory and processing requirements</li>
        <li>More complex implementation</li>
        <li>Potential for increased network traffic due to flooding of link-state packets</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4">1.4 Distance Vector Routing</h2>
      <p className="mb-4">Distance Vector Routing is a dynamic routing algorithm where each router maintains a table (vector) of the shortest distances to all known destinations.</p>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.4.1 Principles of Distance Vector Routing</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Each router maintains a vector of distances to all known destinations.</li>
        <li>Routers periodically share their distance vectors with their neighbors.</li>
        <li>Routers use received information to update their own distance vectors.</li>
        <li>The process continues until the network converges.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.4.2 Bellman-Ford Algorithm</h3>
      <p className="mb-4">The Bellman-Ford algorithm is the basis for distance vector routing protocols.</p>

      <h4 className="text-xl font-semibold mt-4 mb-2">Key features:</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Computes shortest paths from a single source vertex to all other vertices in a weighted graph</li>
        <li>Can handle negative edge weights (unlike Dijkstra's)</li>
        <li>Used in RIP (Routing Information Protocol)</li>
        <li>Complexity: O(VE), where V is the number of vertices and E is the number of edges</li>
      </ul>

      <h4 className="text-xl font-semibold mt-4 mb-2">Steps of Bellman-Ford Algorithm:</h4>
      <ol className="list-decimal pl-6 mb-4">
        <li>Initialize distances from source to all vertices as infinite and distance to the source itself as 0</li>
        <li>Repeat V-1 times (where V is the number of vertices):
          <ul className="list-disc pl-6 mt-2">
            <li>For each edge (u, v) with weight w:
              <ul className="list-disc pl-6 mt-2">
                <li>If distance[u] + w < distance[v], then update distance[v] = distance[u] + w</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Check for negative-weight cycles:
          <ul className="list-disc pl-6 mt-2">
            <li>For each edge (u, v) with weight w:
              <ul className="list-disc pl-6 mt-2">
                <li>If distance[u] + w < distance[v], then graph contains a negative-weight cycle</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.4.3 Routing Information Protocol (RIP)</h3>
      <p className="mb-4">RIP is a common implementation of distance vector routing.</p>

      <h4 className="text-xl font-semibold mt-4 mb-2">Key features of RIP:</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Uses hop count as the metric (maximum 15 hops)</li>
        <li>Updates sent every 30 seconds</li>
        <li>Simple to configure and suitable for small networks</li>
        <li>Suffers from count-to-infinity problem</li>
        <li>Uses split horizon and poison reverse to prevent routing loops</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.4.4 Enhanced Interior Gateway Routing Protocol (EIGRP)</h3>
      <p className="mb-4">EIGRP is an advanced distance-vector routing protocol developed by Cisco.</p>

      <h4 className="text-xl font-semibold mt-4 mb-2">Key features of EIGRP:</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Uses Diffusing Update Algorithm (DUAL) for route calculations</li>
        <li>Supports multiple network layer protocols (IP, IPv6, AppleTalk, etc.)</li>
        <li>Faster convergence compared to traditional distance vector protocols</li>
        <li>Uses bandwidth, delay, load, and reliability as metrics</li>
        <li>Supports unequal-cost load balancing</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.4.5 Advantages and Disadvantages of Distance Vector Routing</h3>
      <h4 className="text-xl font-semibold mt-4 mb-2">Advantages:</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Simple implementation and configuration</li>
        <li>Lower processing and memory requirements compared to link-state routing</li>
        <li>Works well in small networks</li>
      </ul>
      <h4 className="text-xl font-semibold mt-4 mb-2">Disadvantages:</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Slow convergence in large networks</li>
        <li>Vulnerable to routing loops</li>
        <li>Count-to-infinity problem</li>
        <li>Limited scalability</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4">1.5 Path Vector Routing</h2>
      <p className="mb-4">Path Vector Routing is an extension of the distance vector routing protocol. It's primarily used for interdomain routing.</p>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.5.1 Principles of Path Vector Routing</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Similar to distance vector, but includes the entire path to the destination</li>
        <li>Prevents routing loops by allowing a router to check if its own AS is in the path</li>
        <li>Allows for policy-based routing decisions</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.5.2 Border Gateway Protocol (BGP)</h3>
      <p className="mb-4">BGP is the primary path vector routing protocol used for interdomain routing on the Internet.</p>

      <h4 className="text-xl font-semibold mt-4 mb-2">Key features of BGP:</h4>
      <ul className="list-disc pl-6 mb-4">
        <li>Uses TCP for reliable communication between BGP peers</li>
        <li>Supports large-scale routing on the Internet</li>
        <li>Allows for policy-based routing decisions</li>
        <li>Uses path attributes to influence route selection</li>
        <li>Implements route aggregation to reduce routing table size</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-8 mb-4">1.6 Comparison of Routing Algorithms</h2>
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Feature</th>
            <th className="border border-gray-300 p-2">Link-State</th>
            <th className="border border-gray-300 p-2">Distance Vector</th>
            <th className="border border-gray-300 p-2">Path Vector</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">Network view</td>
            <td className="border border-gray-300 p-2">Complete topology</td>
            <td className="border border-gray-300 p-2">Neighbor's distance vectors</td>
            <td className="border border-gray-300 p-2">Path to destination</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Algorithm</td>
            <td className="border border-gray-300 p-2">Dijkstra's</td>
            <td className="border border-gray-300 p-2">Bellman-Ford</td>
            <td className="border border-gray-300 p-2">Best Path Selection</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Convergence</td>
            <td className="border border-gray-300 p-2">Fast</td>
            <td className="border border-gray-300 p-2">Slow</td>
            <td className="border border-gray-300 p-2">Medium</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Scalability</td>
            <td className="border border-gray-300 p-2">Good</td>
            <td className="border border-gray-300 p-2">Limited</td>
            <td className="border border-gray-300 p-2">Excellent</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Resource usage</td>
            <td className="border border-gray-300 p-2">High</td>
            <td className="border border-gray-300 p-2">Low</td>
            <td className="border border-gray-300 p-2">Medium</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Example protocols</td>
            <td className="border border-gray-300 p-2">OSPF, IS-IS</td>
            <td className="border border-gray-300 p-2">RIP, EIGRP</td>
            <td className="border border-gray-300 p-2">BGP</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-3xl font-semibold mt-8 mb-4">1.7 Advanced Routing Concepts</h2>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.7.1 Quality of Service (QoS) Routing</h3>
      <p className="mb-4">QoS routing involves finding paths that satisfy multiple constraints, such as bandwidth, delay, and jitter.</p>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.7.2 Multicast Routing</h3>
      <p className="mb-4">Multicast routing algorithms efficiently deliver the same data to multiple recipients.</p>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.7.3 Mobile IP Routing</h3>
      <p className="mb-4">Mobile IP allows devices to move from one network to another while maintaining their IP address.</p>

      <h3 className="text-2xl font-semibold mt-6 mb-3">1.7.4 Software-Defined Networking (SDN)</h3>
      <p className="mb-4">SDN separates the control plane from the data plane, allowing for more flexible and programmable network management.</p>

      <Link href="/" className="text-blue-600 hover:underline mt-8 inline-block">Back to Table of Contents</Link>
    </div>
  )
}

