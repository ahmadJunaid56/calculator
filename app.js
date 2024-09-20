async function getdata(){
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log(data);
}
getdata();