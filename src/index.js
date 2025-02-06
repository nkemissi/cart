import faker from "faker";

let cart = "";

for (let i = 0; i < 10; i++) {
  const name = faker.address.cityName();
  const code = faker.address.countryCode();
  const country = faker.address.country();
  const state = faker.address.state();
  cart += `<div><strong>${name}</strong> (${code} / ${country} / ${state})</div>`;
}

document.querySelector(`#my-cart`).innerHTML = cart;
