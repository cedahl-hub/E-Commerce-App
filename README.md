📌 Component Breakdown & Tasks
1️⃣ App Component (Parent Component)
Responsibilities:
Manages the state that holds an array of products.
Passes the list of products as a prop to the ProductList component.
Styles the main structure of the app using CSS.
Tasks for Students:
✅ Initialize state using useState to store a list of products (each product should have attributes like id, name, price, and description).
✅ Pass the product list as props to ProductList.
✅ Apply custom CSS styling for the app layout.

2️⃣ ProductList Component (Receives products as props)
Responsibilities:
Receives the product list from App as a prop.
Maps through the product list and renders each product using ProductItem.
Tasks for Students:
✅ Create a ProductList component that takes the product list as a prop and maps through it.
✅ Use the .map() method to iterate over products and render a ProductItem for each.
✅ Apply custom CSS styling for the product list layout.

3️⃣ ProductItem Component (Receives individual product data as props)
Responsibilities:
Represents one product with its name, price, and description.
Receives individual product data from ProductList via props.
Tasks for Students:
✅ Display product details: Name, Price, and Description.
✅ Use props to receive data and render it dynamically.
✅ Style each product visually distinct using CSS.

🛠 Testing Your App
Before submission, students should verify:
✅ The list of products is displayed on the page.
✅ State and props are used correctly between components.
✅ The layout and styling look polished and consistent.

🌟 Optional Features (Bonus Challenges)
If you feel confident, you can extend the app by adding:
🚀 Category Filtering: Add a "category" attribute and allow users to filter products based on categories.
🚀 (DONE) Product Images: Include images for each product and display them in ProductItem.

✅ Final Checklist Before Submission
✅ A list of products is displayed on the page.
✅ React components are structured properly with state and props.
✅ CSS is applied for a well-styled, responsive UI.
