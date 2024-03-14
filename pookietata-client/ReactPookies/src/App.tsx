import ListGroup from "./components/ListGroup";

function App() {
  let items = [];
  items = ["New York", "London", "Tokyo", "Kyoto"];
  const handleSelecteditems = (items: string) => {
    console.log(items);
  };
  return (
    <>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelecteditems}
      />
    </>
  );
}

export default App;
