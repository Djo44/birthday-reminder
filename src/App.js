import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [user, setUser] = useState(data);

  return (
    <>
      <main>
        <section className='container'>
          <h3>{data.length} Birthdays today</h3>
          <List user={user} />
          <button className='btn' type='button' onClick={() => setUser([])}>
            Clear list
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
