# w6-Express
Just about there to full-stack.

# About
Express is the premier lightweight and minimalist server of choice for almost all Node-based web developers. We'll be using Express to hit our database routes, create APIs, host our web app's servers - everything.

The limits to what you can do with Express regarding middleware, routing, proxies, security, etc. is quite expansive, so for now, we're going to be using just the absolute basics in order to create a server.

# Task
Clone down this repository, and run ```npm i``` to install Express (it's set as a dependency). Take a look at the ```index.js``` file I provided.

This is a fully-functioning Express server, and it's actually pretty boilerplate-usable across many projects, depending on file structure and techs used of course. But for the most part, all of our Express servers will look a LOT like this one - so I want you to get familiarized with it so you can modify it to fit whatever needs you have.

Run ```node index.js``` in your console to execute the server, and go head over to your localhost:3000 in your browser. Note down what you see, and also note where that file lives, and try to figure out how it's being served by the Express server.

You can exit out of the Express server (and any continuously running Node program) with CTRL+C.

Go through the ```index.js``` file, and try to figure out and comment the purpose of each line from 1-13. No submission required right now, but keep it in the repo as we'll be submitting that exact file later on as our server. If it's not making much sense, I'll also be going through it line-by-line tomorrow so we all know what's going on.

Here's a couple useful links in Express' documentation:

https://expressjs.com/

https://expressjs.com/en/starter/static-files.html

Tomorrow, we'll be looking into routing!

# Update - 7/21
Alright, today is the day we go full-stack! There's a lot to digest - I wish I could do another screen-share for this one but couldn't find the time. As always, I'll be available for any questions/clarification. Let's jump right in.

Take a look at lines 11-15 on our Express server file.

![](https://i.imgur.com/VqhPAnM.png)

Line 11: this is a newly-added line which we use to initialize our Router in our ```routes``` folder that you'll find in the repo's main directory. 

Lines 13-15: pay special attention to this - this is the fundamental Express route handler. Essentially the 'hello world' of Express. Let's break it down.

```app.get()``` may look familiar to you. If it does, it's because it's another return to our roots - Axios! The ```.get``` statement we see here and in Axios is actually one of many things we call **HTTPS request methods** - other ones we'll be frequently using are PUT, POST, and DELETE. The Axios and Express syntax respectively are as you'd guess - ```axios.put()```, ```axios.post()```, etc. We'll get more into these very soon once we start working with databases - just keep them in mind.

However, in this case, ```app.get()``` in Express is not performing a promise-based .GET request like Axios. You'll notice there is no ```.then()``` callback, or ```.catch()```, both of which are standard in promise-based API calls. Rather, this ```app.get()``` is instructing the server on *how to handle* such an API call. That's right - with these simple 2 lines of code, we are able to build an API.

Moving on, the ```'/'``` string defines the route in which our data is being served. This single backslash denotes a blank route - in our case, localhost:3000.

The ```req``` and ```res``` parameters simply represent the ```request``` and ```response``` values respectively - ```req``` will contain information about the individual API call request, and ```res``` will be the supplier of response methods. Here are the response methods Express supplies us:

![](https://i.imgur.com/LIwJGPC.png)

If none of these methods are called from our route handler, the request-response cycle will never be fulfilled. There's no more REST in our API! So in our case, we'll be simply sending the user a string of 'hello world' with ```res.send()```. However, line 7 in our server file is taking priority by serving a static .html page from our ```public``` directory, which is why you don't see "Hello world!". Otherwise, you would.

***

Let's move on to our first route file - and our first RESTful API!

![](https://i.imgur.com/ToAMWDs.png)

This is in our ```routes``` folder, under ```productRoutes.js```.

Line 1 is a simple import of Express set to ```const router```, using Express' ```.router()``` function.

Let's look at our ```router.get()``` again. This time, you'll notice we have the router set to ```/products```, meaning API calls to ```localhost:3000/api/products``` will be handled by this route handler. We'll see where the /api/ part comes from in a bit.

Since we don't have a proper database, we simply have a hard-coded array full of objects here for our products. Each has a name and unique ID, given sequentially which is best practice.

We then use ```res.json(products)``` to turn ```products``` into a web-readable .JSON-like response, much like the ones we saw with our PokeAPI calls. 

The default page localhost:3000 which is serving ```index.html``` in the public folder is actually set up already with an Axios call to the products API logged to the console - run the server and go take a look!

We then simply use module.exports to export the router variable - this is what gets imported when we use ```require``` in our other files.

***

Finally, let's take a look at the ```index.js``` in our ```routes``` folder - not the server one.

![](https://i.imgur.com/jbINbST.png)

This one's fairly straightforward, but important. Line 3 is the only different one. This is how we prepend '/api' to the API-specific routes - this is best practice for setting up APIs. Further, this index file allows us to keep all of the routes here. That way, our actual server file has to only import this single index file to get all of the route handlers in it.

# Task
Yay, we made it! We're so so close to being officially full-stack - we just need a frontend to hook up to our new, elegant pseudo-database backend! But before that, I want you guys to hook up another route first - what kind of API only has a 3-item array of essentially name keys?

In the ```db``` folder in the repo's root directory, you'll find a .JSON containing some data for 1000 car makes, years, and models - all real. (I didn't write it, don't worry)

Import the .JSON file directly into a new ```carRoutes.js``` in the ```routes``` folder - don't copy and paste it as a hard-coded array. Simply write a route for it, and set it up just like the products route so that an API call to ```localhost:3000/api/cars``` will return that data.

Hint: as it is a plain file and not a Node/JS file, importing it is a lot easier than you think. You won't need ```module.exports```.

Now, it's time to go full-stack and build out our front end! Our homepage is being statically served in ```public```, and you can see both the .html and .js file for it there. Your task is simple, or possibly complex - 

Build out the front end for our cars 'database'!

It's completely up to you how you want to do this or how far you want to go. The only requirement is that it has to be user-responsive in SOME way - take a user action or input to filter/display the cars - or however you want to do it. 

Possible ideas may be allowing the user to filter by country of origin, click a button to see a random car, maybe even hook up another API to do an image search of any searched car. Do as much as you can - this is our first full-stack application, get creative, explore the bounds of what you can do now!

You'll have a week to work on this one - submit by Wednesday, 7/28. Publish repo, Slack link - you know the deal.

Have fun!