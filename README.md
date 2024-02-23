# Routing:
### 1. Single-Page Application Routing
### 2. Multiple Pages In Single-Page Apps
### 3. What Is Client Side Routing?
### 4. Using React Router
### 5. Advanced Features: Dynamic & Nested Routes

## What Is Routing?
Routing in React refers to the process of navigating between different parts of a web application based on the URL. In a single-page application (SPA) built with React, the entire UI is composed of components that are rendered and re-rendered based on the URL, without the need for a full page reload. React Router is a popular library for handling routing in React applications. It provides components like BrowserRouter, Route, Switch, and Link to manage the mapping between URLs and the corresponding UI components to render. With React Router, you can define different routes for different parts of your application and handle navigation between them, all while maintaining a smooth and seamless user experience.

`page change = new request + response`

## Building Single Page Applications (SPAs):
when building complex user interfaces, we typically build single-page applications (SPAs). In this only one initial HTML request & response. Page (URL) changes are then handled by client-side React code. It changes the visible content without fetching a new HTML file.

## Single-Page Applications (SPAs):
In a traditional SPA, the entire application runs on a single web page. Navigation between different views or pages is handled by the client-side JavaScript, typically using a routing library like React Router. When a user clicks on a link, the application updates the URL and renders the corresponding component without a full page reload. This approach provides a smoother user experience, as it eliminates the need for the browser to fetch and load new HTML pages from the server.

## Multiple Pages In Single-Page Apps:
This approach involves structuring a React application as if it were a multi-page application (MPA), with separate HTML pages for each view or page. However, instead of loading new pages from the server, the React components are rendered within the existing page based on the URL. This approach can be useful for SEO purposes, as search engines can crawl and index individual pages more easily than with a traditional SPA. It can also simplify the development process for applications that do not require complex client-side routing logic.

## What Is Client Side Routing?
Client-side routing, also known as front-end routing, is a technique used in web development where the routing logic is handled by the client (browser) instead of the server. In client-side routing, the entire web application is loaded initially, and subsequent navigation between different views or pages is managed by JavaScript running in the browser.

In the context of a single-page application (SPA) built with a framework like React, client-side routing allows for a more seamless and responsive user experience. When a user clicks on a link or interacts with a navigation element, the URL changes, but the browser does not perform a full page reload. Instead, the client-side routing logic updates the view by rendering the appropriate component based on the new URL.

Client-side routing is typically implemented using a routing library or framework, such as React Router for React applications. These libraries provide components and APIs for defining routes, mapping URLs to components, and handling navigation events. Client-side routing is popular in modern web development due to its ability to create dynamic, fast-loading applications without the need for traditional server-side routing and page reloads.

### for Install react-router in your project:
`npm install react-router-dom`
`npm install react-router-dom@5`
`npm install react-router-dom@6`
