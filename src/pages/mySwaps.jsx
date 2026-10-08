import "./MySwaps.css";

function MySwaps() {
  const swaps = [
    {
      id: 1,
      person: "Abel",
      skill: "UI/UX Design",
      status: "Pending",
    },
    {
      id: 2,
      person: "Sara",
      skill: "Node.js",
      status: "Accepted",
    },
    {
      id: 3,
      person: "Daniel",
      skill: "Python",
      status: "Completed",
    },
  ];

  return (
    <div className="my-swaps">
      <div className="page-header">
        <div>
          <h1>My Swaps</h1>
          <p>Manage your skill swap requests.</p>
        </div>
      </div>

      <div className="swap-list">
        {swaps.map((swap) => (
          <div className="swap-card" key={swap.id}>
            <div className="person-avatar">{swap.person.charAt(0)}</div>

            <div className="swap-info">
              <h2>{swap.person}</h2>
              <p>
                Wants to swap with you for <strong>{swap.skill}</strong>
              </p>
            </div>

            <span className={`swap-status ${swap.status.toLowerCase()}`}>
              {swap.status}
            </span>

            <button className="swap-button">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySwaps;
