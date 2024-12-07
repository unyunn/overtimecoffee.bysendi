const dataUrl = "/products.json"; // URL to fetch product data (your products.json file)

// Select elements to update with product details
const productImage = document.getElementById("product-image");
const productName = document.getElementById("product-name");
const productDescription = document.getElementById("product-description");

// Get the product ID from the URL (e.g., ?id=1)
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Function to fetch and display the product details
function loadProduct() {
  fetch(dataUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }
      return response.json();
    })
    .then((data) => {
      // Find the product matching the ID
      const product = data.find((item) => item.id === parseInt(productId));

      // If the product is found, update the page with its details
      if (product) {
        productImage.src = `${product.image}`;
        productImage.alt = product.name;
        productName.textContent = product.name;
        productDescription.textContent = product.description;
      } else {
        productName.textContent = "Product not found";
        productDescription.textContent = "The product you're looking for doesn't exist.";
      }
    })
    .catch((error) => {
      console.error("Error loading product data:", error);
      productName.textContent = "Error";
      productDescription.textContent = "Failed to load product details.";
    });
}

// Function to open the order modal
function openOrderModal() {
  const modal = document.getElementById("order-modal");
  modal.style.display = "flex"; // Show the modal
}

// Function to close the order modal
function closeOrderModal() {
  const modal = document.getElementById("order-modal");
  modal.style.display = "none"; // Hide the modal
}

// Call the function to load the product on page load
loadProduct();


