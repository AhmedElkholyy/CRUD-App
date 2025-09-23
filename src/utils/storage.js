import productsData from "../data/productsData";

const KEY = "products";

export function initProducts() {
  const raw = localStorage.getItem(KEY);
  if (!raw) {
    localStorage.setItem(KEY, JSON.stringify(productsData));
    return productsData;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    localStorage.setItem(KEY, JSON.stringify(productsData));
    return productsData;
  }
}

export function loadProducts() {
  const raw = localStorage.getItem(KEY);
  if (!raw) return initProducts();
  try {
    return JSON.parse(raw);
  } catch {
    return initProducts();
  }
}

export function saveProducts(products) {
  localStorage.setItem(KEY, JSON.stringify(products));
}

export function getProductById(id) {
  const prods = loadProducts();
  return prods.find(p => String(p.id) === String(id));
}

export function addProduct(product) {
  const prods = loadProducts();
  prods.push(product);
  saveProducts(prods);
  return prods;
}

export function updateProduct(updatedProduct) {
  const prods = loadProducts();
  const idx = prods.findIndex(p => String(p.id) === String(updatedProduct.id));
  if (idx === -1) return prods;
  prods[idx] = updatedProduct;
  saveProducts(prods);
  return prods;
}

export function deleteProduct(id) {
  const prods = loadProducts().filter(p => String(p.id) !== String(id));
  saveProducts(prods);
  return prods;
}
