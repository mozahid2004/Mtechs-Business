import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);
  const navigate = useNavigate();

  // Fetch leads from backend
  const fetchLeads = () => {
    fetch("http://localhost:5000/api/leads", {
      headers: { Authorization: localStorage.getItem("token") }
    })
      .then(res => res.json())
      .then(data => setLeads(data.data || []));
  };

  useEffect(() => {
    // Extra safety: if no token, redirect to login
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin/login");
      return;
    }
    fetchLeads();
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  // Delete lead
  const deleteLead = async (id) => {
    if (!window.confirm("Delete lead?")) return;

    await fetch(`http://localhost:5000/api/leads/${id}`, {
      method: "DELETE",
      headers: { Authorization: localStorage.getItem("token") }
    });

    fetchLeads();
  };

  // Mark as contacted
  const markContacted = async (id) => {
    await fetch(`http://localhost:5000/api/leads/${id}`, {
      method: "PATCH",
      headers: { Authorization: localStorage.getItem("token") }
    });

    fetchLeads();
  };

  return (
    <div className="dashboard-container">

      {/* HEADER */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* LEADS GRID */}
      <div className="leads-grid">
        {leads.map(l => (
          <div key={l._id} className="lead-card">

            <div className="lead-row"><span>Name</span><p>{l.name}</p></div>
            <div className="lead-row"><span>Contact</span><p>{l.email}</p></div>
            <div className="lead-row"><span>Phone</span><p>{l.phone}</p></div>
            <div className="lead-row"><span>Service</span><p>{l.service}</p></div>
            <div className="lead-row message-row"><span>Message</span><p>{l.message}</p></div>
            <div className="lead-row">
              <span>Submitted</span>
              <p>{new Date(l.createdAt).toLocaleString("en-IN", {
                day: "numeric", month: "short", year: "numeric",
                hour: "2-digit", minute: "2-digit"
              })}</p>
            </div>

            <div className="status">
              Status
              <span className={l.status === "Contacted" ? "status-contacted" : "status-new"}>
                {l.status}
              </span>
            </div>

            <div className="btn-group">
              <button onClick={() => markContacted(l._id)} className="btn btn-contact">Mark Contacted</button>
              <button onClick={() => deleteLead(l._id)} className="btn btn-delete">Delete</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}