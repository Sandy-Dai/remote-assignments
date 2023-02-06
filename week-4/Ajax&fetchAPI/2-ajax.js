function ajax(url) {
  const promise = fetch(
    "https://appworks-school.github.io/Remote-Assignment-Data/products"
  ).then((response) => {
    if (!response.ok) {
      throw Error("Error");
    }
    return response.json();
  });
  return promise;
}

function render(data) {
  console.log(data);
  const html = data
    .map((product) => {
      return `
                <div class="product">
                <p>Name: ${product.name}</p>
                <p>Price: ${product.price}</p>
                <p>Description: ${product.description}</p>
                </div> `;
    })
    .join(""); //讓console.log(html)的字串連一起
  console.log(html);

  document
    .querySelector("#items") //連動html裡的id
    .insertAdjacentHTML("afterbegin", html); //加入獲取的html字串
}

const url = "https://appworks-school.github.io/Remote-Assignment-Data/products";

ajax(url).then((data) => {
  render(data);
});
