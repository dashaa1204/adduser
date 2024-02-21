export default function Home() {
  const beUrl = "http://localhost:3001/add-user";

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: e.target.username.value,
      age: Number(e.target.age.value),
    };
    console.log(data);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const fetchedData = await fetch(beUrl, options);
    const fetchedJson = await fetchedData.text();
    console.log(fetchedJson);
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
    </div>
  );
}
