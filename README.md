In this project, I have built an App Store by applying the concepts I have learned so far.

###  Output is as Below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/app-store-output.gif" alt="app store output" style="max-width:90%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality added</summary>
<br/>

The app has the following functionalities

- Initially, the **Social** tab is active and the apps with **Social** as their category are displayed
- When a value is provided in the search input
  - The apps in the active category, that include search input value in their name are displayed
  - When another tab is clicked, the apps in the corresponding category, that include search input value in their name are displayed
  - The search is case insensitive
- When the search input is empty,
  - All the apps in the active category are displayed
  - When another tab is clicked, the apps in the corresponding category are displayed
- The `AppStore` component is provided with `tabsList`. It consists of a list of tabItem objects with the following properties in each tabItem object

  |     Key     | Data Type |
  | :---------: | :-------: |
  |    tabId    |  String   |
  | displayText |  String   |

- The `AppStore` component is provided with `appsList`. It consists of a list of app objects with the following properties in each app object

  |   Key    | Data Type |
  | :------: | :-------: |
  |  appId   |  Number   |
  | appName  |  String   |
  | imageUrl |  String   |
  | category |  String   |

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Used these files to complete the implementation:

- `src/components/AppStore/index.js`
- `src/components/AppStore/index.css`
- `src/components/TabItem/index.js`
- `src/components/TabItem/index.css`
- `src/components/AppItem/index.js`
- `src/components/AppItem/index.css`

</details>


### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png](https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png) alt attribute is **search icon**

</details>

<details>
<summary>Colors Used</summary>

<br/>

<div style="background-color: #fff1eb; width: 150px; padding: 10px; color: black">Hex: #fff1eb</div>
<div style="background-color: #ace0f9; width: 150px; padding: 10px; color: black">Hex: #ace0f9</div>
<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #7b8794; width: 150px; padding: 10px; color: white">Hex: #7b8794</div>
<div style="background-color: #dfe2e5; width: 150px; padding: 10px; color: black">Hex: #dfe2e5</div>
<div style="background-color: #2563eb; width: 150px; padding: 10px; color: white">Hex: #2563eb</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>

</details>

<details>
<summary>Font-families Used</summary>

- Bree Serif

</details>

> ### _Things to Keep in Mind_
>
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
