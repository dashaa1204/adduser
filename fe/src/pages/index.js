import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function Home() {
  const beUrl = "http://localhost:3001/add-user";
  const [data, setData] = useState();

  useEffect(() => {
    async function getData(e) {
      const fetchedData = await fetch("http://localhost:3001/users");
      const data = await fetchedData.json();
      console.log(data);
      setData(data.users);
    }
    getData();
  }, []);

  async function handleDelete(e) {
    const fetchedData = await fetch("http://localhost:3001/delete");
    data = { id };
    const option = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let newId = nanoid();
    const data = {
      name: e.target.username.value,
      age: Number(e.target.age.value),
      id: newId,
    };
    console.log(data);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const fetchedData = await fetch(beUrl, options);
    const fetchedJson = await fetchedData.text();
    console.log("success");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-4 mt-9 ml-10">
        <label htmlFor="username"></label>
        <input name="username" id="username" className="border" />
        <label htmlFor="age"></label>
        <input name="age" id="age" className="border" />
        <input type="submit" value={"submit"} />
      </form>
      <div className="flex flex-col ml-20 mt-20 w-[400px]">
        <div className="flex  gap-[150px]">
          <h2>Username</h2>
          <h2>Age</h2>
        </div>
        {data?.map((a, index) => {
          return (
            <div key={index} className="flex gap-[200px]">
              <p>{a.name}</p>
              <p>{a.age}</p>
              <button>edit</button>
              <button onClick={() => {}}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
