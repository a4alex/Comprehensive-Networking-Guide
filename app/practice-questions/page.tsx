import Link from 'next/link'

export default function PracticeQuestions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Practice Questions</h1>
      
      <ol className="list-decimal pl-6 space-y-6">
        <li>
          <p className="font-semibold">What is the main difference between distance vector routing and link state routing?</p>
          <p><strong>Answer:</strong> Distance vector routing shares routing tables only with directly connected neighbors and uses the Bellman-Ford algorithm. Each router updates its table by sending its full routing table to neighbors, causing a slow convergence. In contrast, link state routing floods the network with detailed topology information, allowing each router to build a complete map of the network and use Dijkstra's algorithm to determine optimal paths, resulting in faster convergence and better scalability.</p>
        </li>
        <li>
          <p className="font-semibold">Explain the count-to-infinity problem in distance vector routing.</p>
          <p><strong>Answer:</strong> The count-to-infinity problem occurs when a router's routing table contains incorrect information due to a network failure. If a route becomes unreachable, the routers continue to increment their distance metrics for that route until they reach an arbitrarily defined infinity value. This leads to a routing loop and network instability. Techniques like split horizon and poisoned reverse help mitigate this problem.</p>
        </li>
        <li>
          <p className="font-semibold">What is the purpose of the split horizon technique in distance vector routing?</p>
          <p><strong>Answer:</strong> Split horizon is used to prevent routing loops in distance vector protocols by ensuring that a router will not advertise a route back to the neighbor from which it learned the route. This helps to break the loop by preventing the misinformation about unreachable destinations from propagating back to the originating router.</p>
        </li>
        <li>
          <p className="font-semibold">How does Dijkstra's algorithm work in link state routing?</p>
          <p><strong>Answer:</strong> Dijkstra's algorithm works by calculating the shortest path from a source node to all other nodes in the network. It starts by assigning an initial distance of zero to the source node and infinity to all other nodes. Then, it iteratively selects the node with the smallest known distance, updates the distances to its neighbors, and marks it as processed. This continues until the shortest paths to all nodes are determined.</p>
        </li>
        <li>
          <p className="font-semibold">What is the main advantage of hierarchical routing over flat routing?</p>
          <p><strong>Answer:</strong> Hierarchical routing divides the network into smaller, manageable regions, making it more scalable for large networks. This reduces the size of routing tables and the amount of routing information exchanged, as routers only need to maintain detailed information about their local area and summaries of other areas, as opposed to flat routing, which requires maintaining full routing tables for the entire network.</p>
        </li>
        <li>
          <p className="font-semibold">How does BGP differ from interior gateway protocols like OSPF or RIP?</p>
          <p><strong>Answer:</strong> Border Gateway Protocol (BGP) is an inter-domain routing protocol used for routing between autonomous systems (ASes), which typically involves policy-based routing. BGP focuses on path selection based on various attributes like AS path, next hop, and prefix length. In contrast, OSPF (Open Shortest Path First) and RIP (Routing Information Protocol) are interior gateway protocols used within an AS, focusing on finding the optimal path based on metrics like cost (OSPF) and hop count (RIP).</p>
        </li>
        <li>
          <p className="font-semibold">What is the purpose of the DUAL algorithm in EIGRP?</p>
          <p><strong>Answer:</strong> The Diffusing Update Algorithm (DUAL) in Enhanced Interior Gateway Routing Protocol (EIGRP) is responsible for maintaining loop-free routing and ensuring fast convergence. DUAL uses a best-path algorithm that not only selects the optimal route but also keeps a backup route ready in case the primary route fails, which improves fault tolerance and network stability.</p>
        </li>
        <li>
          <p className="font-semibold">How does RIP limit the size of networks it can support?</p>
          <p><strong>Answer:</strong> RIP (Routing Information Protocol) uses hop count as its metric, where each hop represents a router between the source and destination. The protocol limits the number of hops allowed in a path to 15, with 16 hops being considered unreachable. This makes RIP unsuitable for larger networks as it cannot scale beyond small to medium-sized networks, leading to suboptimal performance in vast networks.</p>
        </li>
        <li>
          <p className="font-semibold">What is the purpose of LSAs (Link State Advertisements) in OSPF?</p>
          <p><strong>Answer:</strong> Link State Advertisements (LSAs) are the building blocks of the Open Shortest Path First (OSPF) protocol. They contain information about the state of a router's links, including details like the router’s interfaces and its directly connected neighbors. LSAs are flooded throughout the OSPF network, allowing all routers to build a consistent link-state database, which is then used to calculate the shortest paths via Dijkstra’s algorithm.</p>
        </li>
        <li>
          <p className="font-semibold">How does Software-Defined Networking (SDN) change the traditional approach to routing?</p>
          <p><strong>Answer:</strong> SDN revolutionizes traditional network routing by separating the control plane from the data plane. In a traditional network, routing decisions are made by each individual router based on local information. In SDN, a centralized controller manages the network's routing decisions, providing a global view of the network. This enables more dynamic and flexible routing configurations, centralized management, and easier network automation and optimization.</p>
        </li>
        <li>
          <p className="font-semibold">What is the difference between static and dynamic routing?</p>
          <p><strong>Answer:</strong> Static routing involves manually configuring routing entries in the router's routing table, and these routes do not change unless manually updated. It is simple and easy to set up but lacks flexibility and scalability. Dynamic routing, on the other hand, uses routing protocols (e.g., OSPF, RIP, EIGRP, BGP) to automatically adjust routing tables based on network topology changes. It offers scalability and can adapt to network failures or topology changes.</p>
        </li>
        <li>
          <p className="font-semibold">What is the role of a routing table in a router?</p>
          <p><strong>Answer:</strong> A routing table is a data structure stored in a router that contains information about network destinations and the best paths to reach those destinations. The routing table is populated with entries that are dynamically learned from routing protocols or manually configured by network administrators. Each entry typically contains the destination network, the next hop, and the interface used to reach the destination.</p>
        </li>
        <li>
          <p className="font-semibold">What are the key differences between OSPF and RIP?</p>
          <p><strong>Answer:</strong> OSPF (Open Shortest Path First) is a link-state protocol that uses Dijkstra’s algorithm to calculate the shortest path, while RIP (Routing Information Protocol) is a distance-vector protocol that uses hop count as its metric. OSPF is more scalable and efficient, supporting larger networks, and converges faster than RIP. RIP, however, is simpler to configure but is limited to smaller networks and has slower convergence times.</p>
        </li>
        <li>
          <p className="font-semibold">How does a router determine the best path to a destination?</p>
          <p><strong>Answer:</strong> A router determines the best path to a destination by evaluating its routing table and selecting the path with the lowest metric. This metric can be based on factors like hop count (in RIP), bandwidth (in OSPF), or path cost (in BGP). The router compares all available routes to the destination and chooses the one with the least cost or the most favorable metric.</p>
        </li>
        <li>
          <p className="font-semibold">What is the role of the AS path in BGP?</p>
          <p><strong>Answer:</strong> In Border Gateway Protocol (BGP), the AS path attribute lists the sequence of Autonomous Systems (ASes) that a route has traversed. This helps BGP routers avoid routing loops by preventing the advertisement of routes that would lead back to the originating AS. The AS path is also used to enforce routing policies, with administrators preferring shorter AS paths or applying other policy rules.</p>
        </li>
        <li>
          <p className="font-semibold">What is route aggregation in BGP?</p>
          <p><strong>Answer:</strong> Route aggregation in BGP is the process of combining multiple IP address prefixes into a single, larger prefix to reduce the size of the BGP routing table. This is beneficial for conserving network resources and improving routing efficiency, especially in large-scale networks. Aggregation helps prevent BGP table bloat and simplifies route management.</p>
        </li>
        <li>
          <p className="font-semibold">What is the difference between internal and external BGP?</p>
          <p><strong>Answer:</strong> Internal BGP (iBGP) is used for routing within a single Autonomous System (AS), while external BGP (eBGP) is used for routing between different ASes. iBGP routers do not advertise routes to other iBGP routers within the same AS, whereas eBGP is used to exchange routing information between different ASes, typically across the internet.</p>
        </li>
        <li>
          <p className="font-semibold">What is a routing loop, and how can it be prevented?</p>
          <p><strong>Answer:</strong> A routing loop occurs when a packet circulates in the network without reaching its destination due to incorrect routing information. Routing loops can be prevented using techniques like split horizon, poison reverse, and the use of TTL (Time to Live) in IP headers. More advanced protocols like OSPF and EIGRP use loop-free algorithms and backup routes to prevent such loops.</p>
        </li>
        <li>
          <p className="font-semibold">How does OSPF handle large networks?</p>
          <p><strong>Answer:</strong> OSPF (Open Shortest Path First) handles large networks by using a hierarchical design with areas. The backbone area (Area 0) serves as the core of the OSPF network, and other areas are connected to it. This hierarchical structure reduces the size of the routing tables by summarizing routes between areas, leading to better scalability and efficient use of network resources.</p>
        </li>
        <li>
          <p className="font-semibold">What is a stub network in the context of OSPF?</p>
          <p><strong>Answer:</strong> A stub network in OSPF is a network that has only one entry and exit point. It does not require a full OSPF routing table, and the router at the stub network's edge will only have a default route to reach destinations outside its local network. Stub networks are typically used to reduce the complexity of the routing table and improve network efficiency.</p>
        </li>
        <li>
          <p className="font-semibold">What are the advantages of EIGRP over RIP?</p>
          <p><strong>Answer:</strong> EIGRP (Enhanced Interior Gateway Routing Protocol) offers several advantages over RIP, including faster convergence, better scalability, support for variable-length subnet masks (VLSM), and more efficient use of bandwidth. Unlike RIP, which only supports hop count as its metric, EIGRP uses a combination of bandwidth, delay, load, and reliability, allowing it to make more accurate routing decisions.</p>
        </li>
        {/* You can continue adding more questions in a similar format */}
      </ol>
      
      <Link href="/" className="text-blue-600 hover:underline mt-8 inline-block">Back to Table of Contents</Link>
    </div>
  )
}

