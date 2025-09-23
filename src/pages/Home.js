function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome to My CRUD App</h1>
      <p>
        This is a simple CRUD (Create, Read, Update, Delete) application built
        with React.
      </p>
      <h6 >
        Features:
      </h6>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>➕ Create new items</li>
        <li>📋 View all items</li>
        <li>✏️ Edit existing items</li>
        <li>🗑️ Delete items</li>
      </ul>
     <h6>Created by Ahmed Elkholy</h6>
    </div>
  );
}

export default Home;
