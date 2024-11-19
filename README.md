#User Management Dashboard

A feature-rich web application that allows users to manage user details with basic CRUD (Create, Read, Update, Delete) operations. This app leverages React, Bootstrap, and mock data stored in dataApp.js. The application is designed without custom CSS, ensuring a clean and responsive design through Bootstrap utilities.

#Features

View Users: Displays a list of users in a tabular format.
Add User: Allows users to input new user details.
Edit User: Enables editing of existing user information.
Delete User: Removes a user from the list.
Responsive Design: Built with Bootstrap for a seamless user experience on all devices.
State Management: Efficiently handles state using React Context API.

#Screenshots

User List
Add User Form

#Technologies Used
Technology	Purpose
React	Frontend framework for UI creation
Bootstrap	Styling and responsive design
React Context API	State management
Mock Data (dataApp.js)	Simulates a backend database

#File Structure
src/
  ├── App.js          # Main application entry point
  ├── context.js      # React Context for state management
  ├── Home.js         # Main component for user management
  ├── dataApp.js      # Contains mock user data
  ├── components/
      ├── UserList.js # Displays the list of users
      ├── UserForm.js # Form for adding and editing users


#Setup and Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo/crud-app.git
cd crud-app
Install the required dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open http://localhost:3000 in your browser to view the app.



#How It Works
Data Management
User data is stored in dataApp.js as an array of objects:

javascript
Copy code
const dataApp = [
  { id: 1, name: "Mora ", email: "moranikhil951@gmail.com" },
  { id: 2, name: "vamhi Smith", email: "vamshi009@gmail.com" },
];
export default dataApp;
The data is managed globally using React Context API.

#Key Components
1. App.js
Wraps the application with the AppProvider from context.js for global state management.

2. context.js
Handles the application's state, making the user list and state updater accessible throughout the app.

3. Home.js
Combines the UserList and UserForm components into a cohesive dashboard.


#Usage Instructions
View Users:

Users are displayed in a table with columns for ID, Name, Email, and Actions.
Add a User:

Fill out the form fields at the bottom of the page and click the "Add User" button.
Edit a User:

Click the "Edit" button for a specific user. The form will pre-fill with the user's details.
Modify the details and click "Update User".
Delete a User:

Click the "Delete" button for a user to remove them from the list.

Future Enhancements
Backend Integration:

Replace Context.js with a real backend using APIs for persistent data storage.
Validation:

Add form validation to ensure correct user input.
Pagination:

Implement pagination for a large number of users.
Search and Filter:

Allow users to search for and filter the user list.
Authentication:

Add user authentication for restricted access.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
