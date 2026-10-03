"use client";

import { useState } from "react";

const users = {
  "admin@test.com": "Admin",
  "kitchen@test.com": "Kitchen",
  "dispatch@test.com": "Dispatch",
  "driver@test.com": "Driver",
};

const orders = [
  { id: "ORD-1001", company: "Acme Corp", employee: "Rahul Shah", status: "Confirmed", total: "$24.50" },
  { id: "ORD-1002", company: "TechNova", employee: "Priya Patel", status: "Placed", total: "$18.25" },
  { id: "ORD-1003", company: "Globex", employee: "Amit Mehta", status: "Delivered", total: "$31.00" },
  { id: "ORD-1004", company: "Acme Corp", employee: "Neha Shah", status: "Kitchen Ready", total: "$22.75" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<string | null>(null);

  function login() {
    if (users[email as keyof typeof users] && password === "Test@1234") {
      setRole(users[email as keyof typeof users]);
    } else {
      alert("Use one of the provided test accounts.");
    }
  }

  if (!role) {
    return (
      <main style={styles.login}>
        <div style={styles.card}>
          <h1>Fernleaf Kitchen</h1>
          <p>Operations Admin Panel</p>

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={login}>Sign in</button>

          <small>
            Demo accounts: admin@test.com / kitchen@test.com /
            dispatch@test.com / driver@test.com
          </small>
        </div>
      </main>
    );
  }

  return (
    <main style={styles.app}>
      <header style={styles.header}>
        <div>
          <h1>Fernleaf Kitchen</h1>
          <span>Operations Admin Panel</span>
        </div>

        <div>
          <b>{role}</b>
          <button
            style={styles.logout}
            onClick={() => setRole(null)}
          >
            Logout
          </button>
        </div>
      </header>

      <section style={styles.stats}>
        <Stat title="Today's Orders" value="42" />
        <Stat title="Confirmed" value="18" />
        <Stat title="Kitchen Ready" value="11" />
        <Stat title="Deliveries" value="13" />
      </section>

      <section style={styles.content}>
        <div style={styles.panel}>
          <h2>Today's Orders</h2>

          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Company</th>
                <th>Employee</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.company}</td>
                  <td>{order.employee}</td>
                  <td>
                    <span style={styles.badge}>
                      {order.status}
                    </span>
                  </td>
                  <td>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={styles.panel}>
          <h2>Quick Actions</h2>
          <button style={styles.action}>Create Order</button>
          <button style={styles.action}>Kitchen Board</button>
          <button style={styles.action}>Dispatch Board</button>
          <button style={styles.action}>Companies</button>
        </div>
      </section>
    </main>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div style={styles.stat}>
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  login: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f3f4f6",
  },

  card: {
    background: "white",
    padding: 40,
    width: 380,
    borderRadius: 12,
    boxShadow: "0 10px 30px #0001",
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },

  app: {
    minHeight: "100vh",
    background: "#f5f6f8",
  },

  header: {
    background: "#111827",
    color: "white",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logout: {
    marginLeft: 20,
    padding: "8px 14px",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20,
    padding: 30,
  },

  stat: {
    background: "white",
    padding: 25,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  content: {
    padding: "0 30px",
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
    gap: 20,
  },

  panel: {
    background: "white",
    padding: 25,
    borderRadius: 10,
  },

  badge: {
    background: "#e5e7eb",
    padding: "5px 10px",
    borderRadius: 20,
  },

  action: {
    display: "block",
    width: "100%",
    padding: 12,
    marginBottom: 10,
  },
};