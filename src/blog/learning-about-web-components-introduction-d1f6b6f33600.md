---
storyReadTime: 9 min read
storyPublishDate: Aug 8
storyImage: https://miro.medium.com/v2/resize:fit:640/0*r3f8hTKumXEPhTCA.png
storyTitle: learning about web components introduction
---

Learning about Web Components 😅(Introduction)
==============================================

![Alt text](https://miro.medium.com/v2/resize:fit:640/0*r3f8hTKumXEPhTCA.png)

As **frontend** developer we are accustomed to use libraries or frameworks to modularize our project as components and decrease the code size of files. Some libraries and frameworks that we can use are: “React”, “Angular”, “Vue”, etc. But sometimes its interesting know new options to take into account.

Today we are going to see what is needed to start working with web components. In this post we will learn about:

1.  **What are web components🙃**
2.  **Three Main Technologies of Web Components🤔**
3.  **Life Cycle of Web Components 🤔**
4.  **Using Web Components without any library 😨**
5.  **Web Components Libraries 😁**
6.  **Advantages of Web Components 😁**
7.  **Useful cases to start using Web Components in our projects** 😇
8.  **Conclusion and what is next of our learning? 😅**

What are web components🙃
-------------------------

![Alt text](https://miro.medium.com/v2/resize:fit:640/0*SNHkiwuzyNchu2-d.jpeg)

Web Components is a suite of technologies where we can create reusable custom element.

We can say is a way to **create an encapsulated, single-responsibility code block that can be reused on any page.**

When we say **encapsulation we are talking about b**eing able to keep the markup structure, style, and behavior hidden and **separate from other code on the page so that different parts do not clash**, and the code can be kept nice and clean.

Three Main Technologies of Web Components🤔
-------------------------------------------

The main technologies of web components are:

1.  **Custom elements:** A set of web platform APIs that **enable the creation of reusable and encapsulated HTML elements(using custom HTML tags and defined in JS)**. They allow developers to define their own custom elements, complete with custom behaviors, properties, and styling, which can be used just like any other HTML element in web pages. For example in the next images we create a custom element defining in our HTML the <my-custom-element> tag. After that we need to create ,in our JS, the class to control the behavior of our custom tag. This class should extend from HTMLElement where in constructor we have to attach in the shadow dom our element’s content. Finally it will be defined in the DOM our my-custom-element.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*O7e3btH7vQcrNpfrlp9syQ.png)
![Alt text](https://miro.medium.com/v2/resize:fit:640/1*3UhI6_fcpikBtYjw1mfoYw.png)
![Alt text](https://miro.medium.com/v2/resize:fit:640/1*BFyPOO-8joaUQ7lJxtxHfQ.png)
![Alt text](https://miro.medium.com/v2/resize:fit:640/1*_i88hiSBxAWhyzfDozUiPg.png)

**2\. Shadow DOM:** A set of JavaScript APIs for **attaching an encapsulated “shadow” DOM tree to an element which is rendered separately from the main document DOM**. As the main documentation says:  
“_Shadow_ DOM allows hidden DOM trees to be attached to elements in the regular DOM tree”.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*mmIPlSwps1rQLdJsss5ajA.png)

3\. **Templates:** Template HTML is **a way for holding HTML that is not to be rendered immediately until you grab a reference to it with JS and then append it to the DOM**. In the next images we can see first our template defined(along with id attribute) in HTML. After that in JS we proceed to get it with id and get the template’s content. Finally it ill be append it to the DOM. To take into account: we can see in the second to last image the **#documentFragment**. This indicates that the content has not parent with any element of HTML.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*qj7E49uBfg7asSvyG7vmVw.png)
![Alt text](https://miro.medium.com/v2/resize:fit:640/1*a5NO7psgswlw7v07q_bRvA.png)
![Alt text](https://miro.medium.com/v2/resize:fit:640/1*TFhrwh0JhO6avOjKq7fXpg.png)
![Alt text](https://miro.medium.com/v2/resize:fit:640/1*Blukb6N1m0Ea9QV54O4hfw.png)

**Life Cycle of Web Components 🤔**
-----------------------------------

In the life cycle we have:

1.  **Constructor**: The **first method called once the web component is initialized**. In this method should call super method(to execute parent’s constructor) and attach elements to the shadow dom.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*_8kouYZ9ZWsH4aRlrdP6cA.png)

2\. **ConnectedCallback**: This method will be called once each time the web component is attached to the DOM.  
**Since the shadow root was attached in the** `**constructor()**`**, then** `**connectedCallback()**` **can be used to access attributes, child elements, or attach event listeners.**

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*-xi1YHdu5tmXQXwxbffjpw.png)

3\. **AttributeChangedCallback**: This method will be called every time that attribute is updated. Attributes are updated when `this.setAttribute()` is triggered. The attributes to be observed must first be defined in a static method called `observedAttributes().`

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*vrWdsIiVetjC-8g1f4CDjw.png)
![Alt text](https://miro.medium.com/v2/resize:fit:640/1*1G7tt3ufhyqhYhRVV4Z8LA.png)

4\. **AdoptedCallback**: Used to move a node from one document to another. This is often used when working with iFrame components. `adoptedCallback()` is triggered when `document.adoptNode()` is used to move the web component to a new document.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*4eExsRCUSp0m-X09uqmOtA.png)

5.**DisconnetedCallback**: Will be called when the web component is removed from the DOM.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*MiAuxzuEnTbJND14-CKrlQ.png)

**Using Web Components without any library 😨**
-----------------------------------------------

Ok let’s start making a tic tac toe but using Web Components. It will be interesting!.

First of all in our html we’ll have these two web components: <board-wc> and <square-wc>.

The board web component will have the logic of our board ang game also it will receive a slot(is a placeholder inside a web component), by other side, square web component will have the logic of each square of our board also receive two attributes row and col to identify each square at the moment of verify is player won or not.

Let’s see (**HTML Content**):

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*L_fk3qZz9OmTNDPjfRHPcQ.png)

Right now anything will be displayed … yeah but it’s still missing the definition of our web components.

Let’s see our board web component**(Board Web Component)**:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*ef7pEtQU-IoL4wdMfyqnow.png)
![Alt text](https://miro.medium.com/v2/resize:fit:640/1*5Hf0dAetGZIS4MOZx8l3Sg.png)

As we can see the slot tag is defined with attribute name. This name will be the identifier to match the elements that will go inside of this slot.

In the **connectedCallback** it defined the HTML content of our web component.

After that we have the **addEventListener**. In this case we are using a **CustomEvent** to dispatch events between our store and web components.

This custom event will be explained in the store section! Ok, Let’s continue with this component:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*Yx5or7QZg6ayx30_xhdZEw.png)

The next two methods are:

**updatePlayer**: Update the player text to indicate whose the turn.  
Also we can notice it was used **this.shadowRoot.querySelector**. This helps to select any element from the shadowRoot.  
After that as you can see we are calling the store. This store is a custom store that we’ll check it in soon!  
Content Rendered:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*0iK6kEstCAziu-n9oVqOpg.png)

**updateEndGame**: Update the end game text to indicate if any player won or not. Example:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*FlXxBXyS36o4HLv1Fd5QRQ.png)

The next method is:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*e2GiMtIGsNtW1gZkkBC0KA.png)

**handleStoreChanges**: Is called by addEventListener method. So this event arrives when either the currentPlayer or matrix was changed.  
When currentPlayer was updated(it means that round changed) will be updated round player.  
When matrix was updated. Is executed isVictory method to analyze if there is any winner or not.

Let’s see isVictory method:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*nNRFrowInVLMpElGL1_I4w.png)

I made this diagram to understand the three validations of this method:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*0mrKC5uU273E_eOJEGQx-w.png)

**wonInRow** means that last move of player win the game in the direction showed in the image above.  
**wonInCol** means that last move of player win the game in the direction showed in the image above.  
**wonInDiagonal** means that last move of player win the game in the direction showed in the image above.

Otherwhise the game continues until all tryes are completed.

Finally we define our web component:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*BMFIx9DKo0VYA4BNDnbgfA.png)

Now we have our square web component **(Square Web Component)**:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*x6EwKxYIbBiqkFW5sex2UA.png)

**This web component aims manage when user click over the square of board** to register the action in our store and dispatch the event to our board.

We can see the **attributeChangedCallback** of web component’s lifecycle to detect when attributes are updated and handler actions.

After that we have **this.addEventListener** to detect when user click and call the **handlerSquare** method.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*NvUMfBKIbswj0t2q7gyBPw.png)

This method mentioned aims draw the cross or nought ,depends the player. After draw the icon over the square call to the store. It will update the matrix of tic tac toe and the player’s turn.

Finally in this web component we have the styles:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*dYFcQF7eOz8-aK4zf3fuqg.png)

Last but not least…the store:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*lU_Ik-XBp0gIlaNXfYYW0A.png)

This is our store. First we have an IIFE where inside its defined the store in the windows object to make it globally.

There is its defined fields and methods to manage our store. But the most important thing to highlight is the **CustomEvent**.

Basically a **CustomEvent** is an event that we can create and define it with an action handler to do. For example in this case every time the currentPlayer or matrix is updated , the custom event is dispatched with the payload. Our payload will be the key(field name updated from the store) and value updated.

This event dispatched is listened by our board and managed.

Also here you have the link of GitHub repository to see the project:

**GitHub:** [https://github.com/GamiLife/BlogSample/tree/master/tictactoe](https://github.com/GamiLife/BlogSample/tree/master/tictactoe)

Web components Libraries 😁
---------------------------

We can name some of them:

1.  [Lit](https://lit.dev/docs/)
2.  [Haunted](https://hauntedhooks.netlify.app/)(if you like react probably you will like this one)
3.  [Stencil](https://stenciljs.com/docs/introduction)(if you like angular probably you will like this one)
4.  [Hybrids](https://hybrids.js.org/#/)

**Advantages of Web Components😁**
----------------------------------

Web Components has the following advantages:

1.  Faster and more memory efficient.
2.  Supported by modern browsers.
3.  Encapsulation(All the encapsulation styles is provided by Shadow DOM. It separates your components from the rest of the DOM)
4.  Framework agnostic components( can be used with any frontend library or directly in HTML documents)

![Alt text](https://miro.medium.com/v2/resize:fit:640/0*2p3fF0gd1Vf7dUrB.gif)

**Useful cases to start using Web Components in our projects** 😇
-----------------------------------------------------------------

Companies such as:

1.  Google
2.  Amazon
3.  Apple
4.  Github
5.  NASA
6.  Netlify
7.  Microsoft
8.  Salesforce
9.  SpaceX
10.  Adobe

Are using Web Components in their projects. These companies have their own use cases to use it. Some use cases where it can be used are:

1.  Building a design system using Web Components to be used in different frameworks.
2.  Implementation of Web Components in a website where is using JQuery or VanillaJS.
3.  Small and Medium Projects.
4.  Create a reusable component used in any kind of framework.

**Conclusion and what is next of our learning? 😅**
---------------------------------------------------

Web components are a useful tool from the advantages exposed until the use cases where you can start working on that. So take this post to expand your knowledge and have more possibilities at the moment to take a decision either in your job or personal projects.

In this post we talked about web components but we have to see how can we develop a tool using web components with a library. Don’t miss the next post where we are going to develop a tool(useful on my own) using web components!

See you soon in the next post!

![Alt text](https://miro.medium.com/v2/resize:fit:640/0*SDP_jxu0bBuFERL6.png)