# Github

## Branch Name:

- Use type of branch (if you are addeing a new feature or making a fix).
- Add name of screen or function to develop.

Examples:

- feature/login
- feature/createPassword
- fix/login
- fix/createPassword

## Pull Request (PR) :

- Avoid monstrous pull requests.
- Client side logs and commented code cant be in a PR.
- Avoid PR unfinished features.
- Describe in a list the reazon of change in file. You can describe a specific line of code if you think necessary.
- Indicate if a new library is added.
- Once PR is accepted and merged , branch should be deleted from local and remote repository.
- Only reviewers can merge branch

Example:

    - Routes.js : dashboard screen added to routes
    - Dashboard/index.js : dashboard screen main file
      - 105 : line style because antd component is not modificable
    - Common/Button/index.js : prop added to accept onCancel function

# React

## Directory Structure

Use a file for each component, a (name of component).js file.

Use App.js as principal file.

    src
     └─components
     |  ├─Header.js
     |  └─Navbar.js
     └─App.js

## Assets

Descriptive name for images.

    src
     └─assets
        ├─svgs
        |   └─Logo.svg
        ├─images
        |   ├─houses.png
        |   └─createPassword.jpg
        └─fonts

## Import files:

- Export elements by default
- Group imports by categories:
  1. 3rd party dependencies
  2. Hooks and custom hooks
  3. Custom components
  4. Functions, local stylesheets and assets.

```javascript
import React from "react";
import axios from "axios";
import { Form } from "antd";

import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "../containers/Home";
import User from "../state/models/User";

import FormatDate from "./FormatDate";
import logo from "../assets/logo.svg";
import styles from "./Home.module.css";
```

## Components and functions:

- Use function for principal component
- Use Arrow function for functions and inside components.
- Declare functions before passing them as props instead of passing inline anonymous (arrow) functions.
- Omit values for boolean props if the default value is true.
- Always define explicit values for all not required props.
- If you want to render an element or nothing, better use **&&** operator.
- Make reusable components only if you need it or if is potentially reusable.
- don't use abbreviations unless the names are too longs.

<table style="width:100%;">
<tr>
<th> Good </th>
<th> Bad </th>
</tr>
<tr >
<td style="width:50%; height:100%" >

```js
import React from 'react'
function Home(){

    const doSomething=()=>{
        //some stuff
    }

    const Tag=({isBig=false,title="default", subTitle})=>{
        return  <div>
            Titulo: {title}
            {subTitle && <div> {subTitle} </div> }
        </div>
    }

    return(
        <div>
            <div> Hello </div>
            {list.map(item=><Tag title={item.title} isBig />)}
            <button onClick={doSomething}>
                click
            </button>
        <div>
    )
}
```

</td>
<td style="width:50%; height:100%" >

```js
import React from 'react'
const Tag=({isBig,title,subTitle})=>{
    return  <div>
        Titulo: {title}
        {subTitle ? <div> {subTitle} </div> : null }
    </div>
}

const  Home=()=>{
    return(
        <div>
            <div> Hello </div>
            {list.map(item=><div>
                Titulo: {item.title}
                {item.subTitle && item.subTitle}
                </div> )}
            <button onClick={()=>{
                //some stuff
            }>
                click
            </button>
        <div>
    )
}
```

</td>
</tr>
</table>

## Variables

- Use camelCase for prop names, variables and functions.
- Use descriptive names in functions avoid onClick,onChange.
- Use **const** for hooks, customHooks and arrowFunctions.
- Use **let** for variables inside functions

Example

<table style="width:100%;">
<tr>
<th> Good </th>
<th> Bad </th>
</tr>
<tr >
<td style="width:50%; height:100%" >

```js
import React from 'react'

import {useState} from 'react'

function Home(){
    const [user,setUser] = useState(null)
    const loginUser=(form)=>{
        let localUser=form
    }
    return(
        <div>
            Login
            <button onClick={loginUser}>
                click
            </button>
        <div>
    )
}
```

</td>
<td style="width:50%; height:100%" >

```js
import React from 'react'

import {useState} from 'react'

function Home(){
    let [state,setState] = useState(null)
    let onClick=(form)=>{
        const localUser=form
    }
    return(
        <div>
            Login
            <button onClick={onClick}>
                click
            </button>
        <div>
    )
}
```

</td>
</tr>
</table>

## Promesas

- Use async await and try catch to synchronous functions
- Use callBack to asynchronous functions

Example

```js
const synchronous = async () => {
  try {
    await axios.post(something.com);
    Alert.success("everything ok");
  } catch (e) {
    Alert.error(e);
  }
};
```

```js
const asynchronous = () => {
  axios
    .post(something.com)
    .then((something) => {
      Alert.success("everything ok");
    })
    .catch((error) => {
      Alert.error(error);
    });
  Alert("getting something");
};
```

# CSS

## Comments:

- Title every style section:

```css
/*------------------------------------*\
        #SECTION-HEADER
    \*------------------------------------*/
.header {
  color: aliceblue;
}
/*------------------------------------*\
        #SECTION-JOIN_US
    \*------------------------------------*/
.join_us {
  color: aliceblue;
}
```

## Naming elements

- Avoid use ID's.
- separate strings with an " - ".
- Name a container with screen name.
- Name elements with what are related or roll, not by description.
- BEM split:
  - Block: The sole root of the component.
  - Element: A component part of the Block.
  - Modifier: A variant or extension of the Block.

```css
    .person {                   |   .form{
        width: auto;            |       display: flex
    }                           |   }
    .person__head {             |   .form__label{
        width: auto;            |       color: aqua
    }                           |   }
    .person--tall{              |   .form--accept_terms{
        width: auto;            |       width: 434px
    }                           |   }
```

## Selectors

- Avoid to use elements selectors
- Keep selectors as short as possible
- Avoid use of **!important**

# TEST

- Tests should test the functionality of the app, how it will be used by your end users.
- Do not to test things that- are not in user functionality.
- Do not to test const variables.
- Do not to test third party libraries
- Do not test implementation details such as names of functions and variables

### References:

[Airbnb guideline](https://github.com/airbnb/javascript/tree/master/react)

[React guidelines and best practices](https://infinum.com/handbook/books/frontend/javascript/react)

[cssGuideLine](https://cssguidelin.es/)

[Community examples](https://es.reactjs.org/community/examples.html)

[MDN guideline](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS)

[Obsessive css](https://perishablepress.com/obsessive-css-code-formatting-organization-comments-and-signatures/)
