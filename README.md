# CopyCat

This project is made under react 101 course of codecademy. In this project, we'll build a program that lets user type into a textbox and allows them to visualize the immediate effect that these changes have on the web page.

Our program will displaye a textbox with a picture of a cat beneath it. When users type into the textbox, a copy of the text will appear below the cat image, suggesting that the cat is being a copy cat. Clicking on the image of the cat will toggle whether or not it is able to copy the user.

## Task 1

Take a look at the code in <b>components/CopyCat.js</b>. We're going to divide a CopyCat into a presentational component and a container component.

Inside of the containers folder, there is a file named <b>CopyCatContainer.js</b>. Copy all of the contents from <b>components/CopyCat.js</b> into <b>containers/CopyCatContainer.js</b>.

## Task 2

Select <b>components/CopyCat.js</b>. This is going to be our presentational component class.

On line 2, delete the line import ReactDOM from 'react-dom'; At the bottom of the file, delete the ReactDOM.render() call.

Inside of CopyCat's class definition, delete everything except for the render function. Finally, export CopyCat.

## Task 3

Select <b>containers/CopyCatContainer.js</b>. This is going to be our container component class.

Import CopyCat at the top of the file.

Now, down where the class is being defined, change CopyCat to CopyCatContainer. Be sure to update this in the ReactDOM.render call.

Inside of CopyCatContainer's render function, delete everything inside of the return statement. Instead, just return an instance of CopyCat.

## Task 4

Take a look at CopyCat. You'll see that the component needs access to the copying state as well as the toggleTape method that now only exists in CopyCatContainer.

Inside of <b>containers/CopyCatContainer.js</b>, pass copying and toggleTape as props to CopyCat component.

Now switch back to CopyCat in <b>components/CopyCat.js</b>. Make sure the render method is grabbing copying and toggleTape from the props.

Then click Save. If everything was done correctly, the app should look the exact same in the browser as it did in step 1. Don't worry that it doesn't look pretty. We'll spruce it up once we add some style!

## Task 5

Select <b>styles.js</b>.

In this file, you'll see a number of style properties defined. Underneath these, there are two objects, each of which contain a selection of these properties: divStyles and imgStyles.

At the bottom of this file, create a const styles. Set its value to be an object that holds divStyles and imgStyles. Export this styles object.

## Task 6

Go back to CopyCat.js and import styles.

In the JSX in the render() method, set the div element's style to divStyles. Use imgStyles for the img element.

Give h1 a single property: marginBottom: 80.

Add a Form

## Task 7

In <b>CopyCat.js</b>, create an input element between the h1 and img elements. Give it three attributes: type, value, onChange. Set type to be text.

The value and onChange will be acquired from the props, but we currently aren't passing anything down for those. For now, use empty braces as their values.

## Task 8

Navigate to <b>CopyCatContainer.js</b>.

Add input to the state and set its initial value to an empty string.

Next, write an event handler function called handleChange which takes the event e as an argument. The function should update the state with input's value whenever it changes.

Don't forget to bind handleChange in the constructor method!

## Task 9

Next, pass input and handleChange as props to CopyCat.

Navigate back to CopyCat.js and update the values for input's value and onChange attributes.

###

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
