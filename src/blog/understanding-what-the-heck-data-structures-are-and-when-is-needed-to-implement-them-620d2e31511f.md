---
storyReadTime: 4 min read
storyPublishDate: Jul 31
storyImage: https://miro.medium.com/v2/resize:fit:640/1*syooR--pGng7i372OWpOuQ.png
storyTitle: understanding what the heck data structures are and when is needed to implement them
---

**Understanding what the** heck **data structures** are **and when is needed to implement them😁?**
===================================================================================================

Every time I’m working in a project (whether in a huge project or not), personally the most of **data structures** that I found either in projects or implemented by me are: **arrays and objects** and that’s all even when the implementation could be better with a different data structure.

A little spam: Apologies for my bad English I’m on my way to improving it to bring better publications.

After this little spam… Let’s start!

In this post we will learn about:

1.  **What is Data Structure 🙃**
2.  **When is needed a Non Primitive Data Structure (Example)🤔**
3.  **Types and Classification of Data Structure 😁**
4.  **Conclusion and what is next of our learning? 😅**

What is Data Structure? **🙃**
==============================

Data structure is the study to understand **how can we organize the data in our software** and **how the data flow is managed in our program**.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*syooR--pGng7i372OWpOuQ.png)
Comparing Lego's blocks with data

**To take into account:** Data structure is the structural representation of logical relationship between data elements.

**When is needed a Non Primitive Data Structure(Example) 🤔**
=============================================================

I use the next points to take into account of my decision to implement a non primitive data structure or not:

1.  Give a different level of data organization.
2.  Fast searching and sorting data.
3.  Manage huge amount of data efficiently.

Take a look the next example and we will try to solve step by step taking into account any of three points mentioned.

> Exercise: We’re given an **array** and we know that 2 values within that array add up to our **target**. We have to **find the locations of those 2 values**.(From leetCode)

So we have:

1.  Array of n values.
2.  2 values of that array add up to our target.

In this problem the key would be a good searching and finding values without a lot of computing. Based on this requirement we can see one of the points exposed is applied(point number 2). In this case we will use a Hash Map.

The thought process would be:

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*k9G9sRB0yE_uvvY4o6SYqg.png)
![Alt text](https://miro.medium.com/v2/resize:fit:640/1*kNufDTm5tcviOvQadObRQQ.png)

and the solution using Hash Map in JavaScript would be.

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*g4JfUCPJF9L7QHRNyJUrug.png)

In this solution the steps are:

1.  Create a Map Data Structure.(Our hash map)
2.  Iterate the array of numbers.
3.  Get the current number and desired number(difference between the target and current number)
4.  Verify if the desired number is stored in our Map.
5.  In case is not found we proceed to saved into Map with a key — value( current number — index )
6.  Otherwise is found we proceed to return the index of current number and the index retrieved

As you can see using a Hash Map the performance of our program is much better and the complexity is O(n) (Big O notation will be one of the next topics to talk about) that means our code is fast.

**Types and Classification of Data Structure 😁**
=================================================

![Alt text](https://miro.medium.com/v2/resize:fit:640/0*tRXy5ynHKlvjW864.png)

1.  **Primitive Data Structures:**

Consist of the numbers and the characters which are built in programs. These can be manipulated or operated directly by the machine level instructions.

These data types are also known as simple data types because they consist of characters that cannot be divided.

2\. **Non Primitive Data Structures:**

Non-primitive data structures are **those that are derived from primitive data structures**.

These data structures **cannot be operated or manipulated directly by the machine level instructions.**

They focus on formation of a set of data elements that is either homogeneous (same data type) or heterogeneous (different data type).

**2.1 Linear Data Structure**

A data structure that maintains a linear relationship among its elements is called a linear data structure.

Here, the data is arranged in a linear fashion. But in the memory, the  
arrangement may not be sequential.

Example: Arrays, linked lists, stacks, queues.

**2.2 Non Linear Data Structure**

Non-linear data structure is a kind of data structure in which data elements are not arranged in a sequential order.

There is a hierarchical relationship between individual data items. Here, the insertion and deletion of data is not possible in a linear fashion.

Example: Trees ,graphs, tables and sets.

**Conclusion and what is next of our learning? 😅**
===================================================

Data Structures are so useful to organize our data elements and improve the performance. In the next series of computer science posts I’m going to talk about Non Primitive Data Structures.

The first Data Structure will be Linked List with a real project and exercises when we can use this data structure (from leet code). After that , the upcoming topics will be Stacks, Queues, Trees ,Graphs, Tables and Sets.

So excited to talk about these useful topics. See you soon in the next post!

![Alt text](https://miro.medium.com/v2/resize:fit:640/1*W3aNN0OszvhWWvZxR_F-Aw.png)