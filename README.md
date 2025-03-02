# Basic Checkout E-Commerce API

## Overview
Basic Checkout E-Commerce API is a lightweight and smooth backend service designed to handle shopping cart operations. It enables users to add, update, delete, and retrieve cart items while also calculating the total quantity and price dynamically.

## Live Demo & Resources

<div>
    <a href="https://www.loom.com/share/94adba543a6148b687b0646dac657c54">
      <p>Basic-Checkout-E-commerce-VideoDemo - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/94adba543a6148b687b0646dac657c54">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/94adba543a6148b687b0646dac657c54-157191e0c7413294-full-play.gif">
    </a>
  </div>
  
- **StackBlitz URL:** [Click Here](https://stackblitz.com/edit/stackblitz-starters-nm7wpq?file=index.js)
- **Deployed API:** [Click Here](https://basic-checkout-e-commerce.vercel.app/)

## Features
- Add, edit, and delete items in the cart.
- Retrieve the current cart state.
- Calculate total quantity and total price dynamically.
- Seamless integration with frontend UI.

## Setup & Deployment
1. Clone the repository:
   ```sh
   git clone https://github.com/AkshAI-2030/Basic-Checkout-E-commerce.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node index.js
   ```

## API Endpoints
- **Add an Item:** `/cart/add`
- **Edit Quantity:** `/cart/edit`
- **Delete an Item:** `/cart/delete`
- **Retrieve Cart:** `/cart`
- **Total Quantity:** `/cart/total-quantity`
- **Total Price:** `/cart/total-price`

## Integration with FlipDeal Frontend UI
1. Deploy the backend API to Vercel.
2. Copy the deployment URL.
3. Open [Frontend](https://bd-3-assignment.vercel.app/).
4. Paste the backend URL in the **Server URL** field and save.

## Technologies Used
- **Node.js & Express.js** - Backend framework for API development.
- **JavaScript (ES6+)** - Core language for backend logic.
- **CORS** - Cross-origin resource sharing for seamless frontend integration.

## Conclusion
This API streamlines e-commerce checkout functionality, providing a simple yet powerful shopping cart experience. Ideal for small to mid-scale online stores, it ensures a smooth and responsive user experience.

