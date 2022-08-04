
// Activity:

// In the below exercises, write code that achieves
// the desired result. To check your work, run this
// file in your Terminal.

foods = {
  apples: 23,
  grapes: 507,
  eggs: 48,
  tomatoes:18
}

// Write code that prints all of the 'keys' of the foods variable
// you created above:
console.log(Object.keys(foods));

// Write code that prints all of the 'values' of the foods variable
// you created above:
console.log(Object.values(foods));

// Write code that prints the value of the second food of the foods variable
// you created above:
console.log(Object.values(foods)[1])

// Write code that adds a food to the foods object.
// Then, print the updated object:
console.log(Object.keys(foods)[3])


//#-------------------
// Part 2: Email
//#-------------------


// Think about all the pieces of information associated with one single email in your inbox.
// It has a sender, a subject, ...

// Declare a variable that stores an object. Each key should be an attribute of an email and each
// value should be some appropriate value for that key. Work to have at least 5 key-value pairs.
var email1 = {
  senderName: "Kai Swanson",
  senderAddress: "notactuallykai@gmail.com",
  subject: "Trip Itinerary",
  timestamp: "11:20 AM, August 3, 2022",
  body: "Hey bud, just checking in to see if you read through our trip itinerary. We'll talk soon!"
}

// Write code that logs your email object to the terminal.
console.log(email1);

// Write code that logs all of the 'keys' of the email object
// you created above:
console.log(Object.keys(email1));

// Write code that logs all of the 'values' of the email object
// you created above:
console.log(Object.values(email1));


//#-------------------
// Part 3: Many Emails - CHALLENGE!
//#-------------------

// LONG EXAMPLE:
// Now that we've learned about Objects AND Arrays, we can combine them.

// Check out the following example of an array of Instagram posts:


posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];


// An Array of Objects is probably more realistic. Objects are a data type that's great
// for storing more complex data. Below, we can store multiple key-value pairs
// that relate to each individual Instagram post:


posts = [
  {
    imageSrc: "./images/beach.png",
    caption: "At the beach with my besties",
    timestamp: "4:37 PM August 13, 2019",
    number_likes: 0,
    comments: []
  },
  {
    imageSrc: "./images/holiday-party.png",
    caption: "What a great holiday party omg",
    timestamp: "11:37 PM December 31, 2019",
    number_likes: 13,
    comments: []
  }
];

console.log(posts);
console.log(posts[0]);


// The code snippet above shows an Array with 2 elements. Each element in the Array is a
// Objects. Each of those Objects has 4 key-value pairs. This may LOOK
// a bit daunting - it's OK! You don't need to be 100% comfortable with this, but it's
// good to have some exposure before going into Mod 1.


// YOU DO: Create an array of at least 3 EMAIL Objects, using the same
// key-value pairs you used in your email Object above.
// Then, print the email Array to the Terminal.
emails = [
  {
    senderName: "Kai Swanson",
    senderAddress: "notactuallykai@gmail.com",
    subject: "Trip Itinerary",
    timestamp: "11:20 AM, August 3, 2022",
    body: "Hey bud, just checking in to see if you read through our trip itinerary. We'll talk soon!"
  },
  {
    senderName: "totally real energy company",
    senderAddress: "yepweareforsurereal@gmail.com",
    subject: "Your energy bills are overdue!",
    timestamp: "10:23 PM, August 2, 2022",
    body: "Hello, you owe us money and you can trust us but uhhh please don't look up our company just trust us its real"
  },
  {
    senderName: "SmartyKat",
    senderAddress: "smartykat.outreach@gmail.com",
    subject: "Regarding you improper use of our product",
    timestamp: "9:48 AM, August 2, 2022",
    body: "Mr. Swanson, we apologize, but our packaging clearly states our cat nip is not for human consumption. There is nothing we can do."
  }
];
console.log(emails);
