Building a Tinder Swipe Cards in React Native 😀
================================================

[![Jesus Alvan](https://miro.medium.com/v2/resize:fill:88:88/1*smwqbUAGctawfwPYskfG4A.jpeg)

](https://medium.com/@jesusalvan2010?source=post_page-----eaa290e92be2--------------------------------)

[Jesus Alvan](https://medium.com/@jesusalvan2010?source=post_page-----eaa290e92be2--------------------------------)

·

[Follow](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fsubscribe%2Fuser%2Fe426288ff5c8&operation=register&redirect=https%3A%2F%2Fmedium.com%2F%40jesusalvan2010%2Fmaking-a-tinder-swipe-cards-in-react-native-eaa290e92be2&user=Jesus+Alvan&userId=e426288ff5c8&source=post_page-e426288ff5c8----eaa290e92be2---------------------post_header-----------)

6 min read·Sep 22

\--

Listen

Share

We’ve all seen these dating apps where show a list of users and if you like to stablish a conversation you have to swipe card to the right or left if you don’t like.

But how can we achieve it in React Native? Let see in the next sections!

1.  **Understanding about Animated and PanResponder API in React Native 🤓**
2.  **Creating the SwipeCard Component 🙃**
3.  **Using our SwipeCard into Discover People Tab 😁**
4.  **Conclusion and what is next of our learning? 😅**

Understanding **about Animated and PanResponder API in React Native** 🤓
========================================================================

**The Animated API** is designed to add good animations in a performant way.Animated exports 6 animatable components: Views, Text, Image, ScrollView, FlatList and SectionList.However you can create your own components with Animated.createAnimatedComponent().

In the example before. The FadeInView starts with:

```
const fadeAnim = useRef(new Animated.Value(0)).current
```

In this first Line we are creating our fadeIn animation with Value Zero. In our case we are going to fiddle with the opacity.

After that we have:

```
 Animated.timing(fadeAnim, {  
      toValue: 1,  
      duration: 10000,  
      useNativeDriver: true,  
   }).start();
```

In these lines we are adding a timer using the native Driver with 10secs duration and opacity of 1. That means when the component is rendered will apply the opactiy from 0 to 1.

For using this animation we’ll have to add an <Animation.View> component with the opacity style.

Now let’s suppose we want to bounce a ball with Animation API. In this case we are going to need using **Animated.ValueXY({}). Let’s check it out!**

First thing to do is creating an animation with Animated.ValueXY({x: 10, y: 450}) :

```
const bounce = useRef(new Animated.ValueXY({x: 10, y: 450})).current;
```

This line set the position in X= 10 and Y=450 initially. After that when we press on Touchable Component it calls move function and runs Animated.spring with position values x: 250 and y: 10. This change the position from 10,450 to 250,10.

**The PanResponder API** is designed to add good animations in a performant identifying gestures actions. Most React Native components, like `View`, can handle touch/click events. However, the APIs for doing this are fairly low level, so we rarely use them directly. Instead, we use the `PanResponder` API, which is a higher level abstraction for handling touch/click events.

Let see an example to drag an drop this element:

For creating a component to drag and drop we will use PanResponder.create({…}). Let see the parameters:

`**onMoveShouldSetPanResponder**`: This determines whether our pan responder should actuallly do anything. For this example we want the pan responder to be enabled on all the screen so we return true.

`**onPanResponderMove**`: When a movement is detected , is executed this method. We are ignoring the raw event, which is the first argument, thus we pass null. The second argument is the `gestureState` which provides some helpful values, in our case `dx` and `dy`. Which are deltas (aka the changes) in how far the user has moved their finger from the beginning of the touch. **We pass in our 2 animated values from an** `**Animated.ValueXY**` **which our** `**Animated.event**` **will take that configuration, traverse it, find the Animated values and call** `**setValue**` **for us**. Effectively when the user moves their finger our Animated values will be the delta positions.

`**onPanResponderRelease**`: When a movement is done this method is executed.Pan.extractOffset() is adding the value to the offset and the offset is reseted to 0.

Finally is added the X and Y position from pan to the transform styles in <Animated.View>

**Creating the SwipeCard Component 🙃**
=======================================

Now we can start checking our SwipeCard Component. Let’s take a look:

First we create Animated.ValueXY() that will be swipe animation on each card. The other one is titlSign(create Animated.Value(1)) for card rotation.

After that PanResponder creates a reference with:

**onMoveShouldSetPanResponder** return true to detect gesture action in every moment.

**onPanResponderMove** set the swipe values and titlSign values when the user is touching the screen.

**onPanResponderRelease** is called when the action is done.Here we validate in case of swipe is out the screen we animate the card and remove the card from the list. Otherwise if not out of the screen , this card go back to initial position.

Let’s continue with our **SwipeCard Component**:

**RemoveTopCard** is used for removing the first card from the list and set the swipe value to x:0 and y:0.

Then **rotate** aims to add rotation in the transform style that is being applied in our cards component. Rotate uses Animated.multiply() to multiply the swipe.X value with titlSign value(this has the rotation value calculated when the user swipe the Card).

After that it is using interpolate. Interpolate allows you to add more equivalents in this case we are saying to react native: “I want to add a transform values range but also in the same timeline please add the degrees. Imagine the animation reach -100 position so the rotation degree will be 8deg”.

**Handle Choice Function** aims to show and move the text inside the Card. If you swipe to the right or press like button the Like Text will be shown otherwise will be shown Nope Text.

Finally we are iterating each Item adding the transform styles and panResponder Handlers. Take into accout these will be applied only the first one item.

If you see almost at the end we are using **Render Props Pattern**.

First into the children we are accepting a children like a method that receives two parameters and this returns a React Node, Why are we doing this? Because we will need access to the swipe value, the item value and the index.

In the next section we’ll see the implementation. The same thing happens with renderActionBar method.

**Using our SwipeCard into Discover People Tab 😁**
===================================================

Now, let’s take a look how we can use this SwipeCard Component.

In this first part we can highlight the likeOpacity and nopeOpacity these guys aims to manage the opacity of Like Text in the right and NopeText in the left. After that we have the method to render these texts.

Finally we are calling the SwipeCard Component also passing the Actions Bar(where are the like button, nope button and chat button). Then is rendering each Card getting the item, swipe and isFirst argument also returning the Card Component with each item info.

The result looks like this:

As always you can use these component for your own projects checking this component in the github repository.

Github Repo: [https://github.com/Yei-Linux/d](https://github.com/Yei-Linux/dating-app)ating-app

**Conclusion and what is next of our learning? 😅**
===================================================

Animations API and Pan API are so powerfull to make great things in react native. I tried to show you the theory and the practice part. I know that is missing more cases , more theory and more things but take the things that are more interesting for you and start coding!

In this post we developed a SwipeCard component, in future posts we are going to build the chat section in our app.Don’t miss the next post!

See you soon in the next one!