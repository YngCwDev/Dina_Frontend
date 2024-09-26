import jsonData from "./list.json";

function GetJsonData() {
  const products = (data = jsonData.products) => {
    for (const [key, value] of Object.entries(data)) {
      return (key, value)
    }
  };
  const industries = jsonData.industries;
  const services = jsonData.services;
  return (
    <>
      <div>{products()}</div>
    </>
  );
}

export default GetJsonData;
