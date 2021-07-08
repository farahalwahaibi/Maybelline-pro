# **StoreFront APP**

### **Author: Farah AlWahaibi**

### **Front-End**
* [Maybelline_Products](https://maybelline2021.netlify.app)


## **Redux**

### **LAB - 36**

## **Phase 1 Requirements**

Today, we begin the first of a 4-Phase build of the storefront application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application with initial styling and basic behaviors. This initial build sets up the file structure and state management so that we can progressively build this application in a scalable manner

The following user/developer stories detail the major functionality for this phase of the project.

* As a user, I expect to see a list of available product categories in the store so that I can easily browse products
* As a user, I want to choose a category and see a list of all available products matching that category
* As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence

## **PULL REQUESTS**

* [PR LINK1](https://github.com/farahalwahaibi/stoRefont/pull/1)
* [PR LINK2](https://github.com/farahalwahaibi/stoRefont/pull/2)
* [PR LINK3](https://github.com/farahalwahaibi/stoRefont/pull/3)
* [PR LINK4](https://github.com/farahalwahaibi/stoRefont/pull/4)
* [PR LINK5](https://github.com/farahalwahaibi/stoRefont/pull/5)



### **Installation**
* **dependencies :**
  *  "@testing-library/jest-dom"
  *  "@testing-library/react"
  *  "@testing-library/user-event"
  *  "react"
  *  "react-dom"
  *  "react-router-dom"
  *  "react-scripts"
  *  "web-vitals"
  *  "react-bootstrap"
  *  "redux"
  *  "react-redux"
  *  "redux-devtools-extension"


### **Running the app**
* **npm start**


## **UML DIAGRAM PHASE-1**

![UML](1.PNG)

***
***
***



## **Combined Reducers**

### **LAB - 37**

## **Phase 2 Requirements**

In phase 2, we will be adding the “Add to Cart” feature to our application, which will allow our users to not only browse items in the store, but also select them and have them persist in their “shopping cart” for later purchase.

The user stories from Phase 1 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

* As a user, I want to choose from products in the list and add them to my shopping cart
* As a user, I want to see the products that I’ve added to my shopping cart so that
* As a user, I want to change the quantity of items I intend to purchase in my shopping cart
* As a user, I want to be able to remove an item from my shopping cart

Application Flow:

* User sees a list of categories
* Chooses a category and sees a list of products
* Clicks the “Add to Cart” button on any product
* Clicks the “Cart” link in the header
* Sees a list of all products in the cart
* Clicks the delete button on an item and sees the item removed
* Changes the quantity selector on an item and sees the cart total change

## **PULL REQUESTS**

* [PR LINK1](https://github.com/farahalwahaibi/stoRefont/pull/6)


### **Installation**
* **dependencies :**
  *  "sass"



## **UML DIAGRAM PHASE-2**

![UML](2.PNG)



***
***
***


## **Asynchronous Actions**

### **LAB - 38**

## **Phase 3 Requirements**

In phase 3, we will be connecting our Virtual Store to a live API so that our data is persistent and able to be separately managed.

The user stories from Phases 1 and 2 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

* As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock
* As a user, I want to know to that when I add an item to my cart, that it is removed from inventory so that no other users can purchase it


## **PULL REQUESTS**

* [PR LINK1](https://github.com/farahalwahaibi/stoRefont/pull/7)


### **Installation**
* **dependencies :**
  *  "superagent"
  *  "redux-thunk"



## **UML DIAGRAM PHASE-3**

![UML](3.PNG)

***
***
***

## **Additional Topics**

### **LAB - 39**

## **Phase 4 Requirements**

In phase 4, we will be completing work on our Virtual Store by adding a two full page views to the application: Product Details and Checkout

The user stories from Phases 1, 2 and 3 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

* As a user, I want to see a full detail view of a product so that I can make a more informed choice about purchasing it.
* As a user, I want to view my full cart and initiate the checkout process so that I can purchase my items and have them delivered


## **PULL REQUESTS**

* [PR LINK1](https://github.com/farahalwahaibi/stoRefont/pull/8)


### **Installation**
* **dependencies :**
  *  "react-redux-toolkit"
  



## **UML DIAGRAM PHASE-4**

![UML](https://raw.githubusercontent.com/farahalwahaibi/Readme/main/4.png?token=ASV4PGKS43SPJPKXVSDX5BLA4ZVBW)


