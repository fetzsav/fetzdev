---
title: "Twitter’s Powerful API – Too Powerful?"
description: "An exploration of Twitter’s developer API, its potential, and the privacy and control implications of such open access."
publishDate: "03 May 2022"
tags: ["twitter", "api", "privacy", "tech"]
draft: false
---


Twitter has been a recent topic of controversial discussion. With Elon Musk's offer to buy the platform being accepted by the board of directors, it has left many Twitter users waiting on the edge of their seats, whether in a good or bad way. This is not what we will be talking about today though. Unrelated to this recent debacle, Twitter has undergone some other major changes to their platform. More specifically, I am referring to the new Twitter API... coined as *'Twitter API V2'*. In this context, the '**API**' or '**Application Programming Interface**' is the means by which Twitter gives programmers a way to interact with their platform's content without visiting the Twitter.com website or opening an app on their phone. Granted, much of the core functionality and possibilities from the V1 API are the same in the V2 API; the V2 API is much easier to use. This opens a multitude of possibilities for developers to build things such as 3rd-party Twitter apps, targeted statistics on their companies accounts, or even automating simple actions for a Twitter account like posts or follows. I was intrigued by these things which led me to begin exploring the API. Upon little reading of Twitter's documentation, it had become clear that this API is much more powerful than I had imagined it to be, and it lives on Twitter - the online equivalent of your public square. 

![flipthebird](/flipthebird.png#center)


### Social Media's Tracking Habits
When participating on any social media platform, we all know that our data is being used for tracking and marketing. This is how the platforms make money. Every social media platform has the ability to learn what a user's favorite interests are and provide them with related content. This is the core business model of these platforms and what allows them to be free. So, it isn't a surprise to any of us that Twitter is practicing this same model. None of us care, we still use the platform, it's part of our agreement. Twitter provides the fun and we provide the marketable data. 
Yet, I've noticed an additional piece to the puzzle since working with the Twitter API. More specifically, with the /search/ endpoint. After just moments of reading up on the documentation, it became clear just how powerful this one endpoint can be; and it leaves me wondering, do users of Twitter know about the power behind this endpoint? 

### What is The /search/ Endpoint?
If you are unfamiliar with using APIs, then you probably don't really know what I am talking about yet. Don't worry, it's simple. To better understand what an *API* is doing, it may be easier to relate it to how a regular person uses the application on a daily basis. When you are using any social media platform, you are typically given some sort of search bar or search option. You know... the Facebook search bar... or searching for a profile on Instagram. You can use the search bar to search for other user's profiles, posts, or anything else on the social media's website. When you input a search into the search bar, your search is sent to a server via. an API request. The API request includes information such as your username along with your search query. Similarly, the **/search/ endpoint** is simply a backend method of interacting with Twitter's search bar. It allows developers to use the Twitter search function without visiting the Twitter website or app. It also provides quite the multitude of filters and search query options to fine tune your search much farther than the standard app allows. More specifically... it only searches for Tweets... not profiles or groups or anything like that.
So, **the /search/ endpoint is an advanced and fine tuned method to search for Tweets throughout the entirety of Twitter**.
There are some dangerous specifics and gate-keeping regarding the endpoint that we will touch on momentarily. First, I want to give you an example of how powerful this endpoint can be.

### Where's The Power?
You may still not see the power behind this endpoint yet, but let me put some things into perspective for you. Let us imagine a hypothetical that we can directly relate to Twitter - If your whole city was being audio recorded 24/7. 
Every table in every restaurant has a microphone. Every inch of sidewalk. Everywhere. There's no escaping the microphones. All conversations are recorded and saved, and the city municipals can go back and listen to any conversation from any day that happened in their city. Already, this sounds crazy and unfeasible. This would be too much information to even be useful. Most, if not all conversations would be trivial, and not have any real value to the person (or persons) eavesdropping. (Which would be some sort of political power or overruling authority, I would assume). There is something I forgot to mention about these recording devices though. Not only do they record your voice, but they also transcribe what you say into a database. So, if you were talking about 'cats', then the big-bad-city can search and listen to only 'cat' conversations that happened in their city that day. Now, the city muncipals have a way of searching for exactly the conversations they are interested in, and ultimately know their population's feelings towards cats. Or, maybe they search for conversations that include the words 'hate', 'horrible', or 'stupid' along with the phrase 'Johnny Depp'. With this set of conversions from the city, they are able to get an idea of how many people dislike Johnny Depp.
You're now probably thinking, "Well, great. So what? Who cares?". Well... let me add one more layer onto the hypothetical for you. What if the recording devices could somehow magically detect the true identity of the person speaking? So then, the city municipals know not only **WHAT** was said, but also **WHO** said it! Honestly, this is really hard to imagine. It's a little too much of a stretch. Well, good thing you don't need to imagine that. It already exists. **It's called Twitter.**

### The Gatekeeping
The truth be told, this may not even sound surprising to you. In fact, you may already assumed the worst. Most of us probably already knew there is this form of extensive data harvesting of our information on social media. In result, some of us may be careful about what we post on social media... for the sake of our personal image and also for fear of the unknown usage of our data. It's without a doubt that these social media platforms track our information and know everything about us. Yet, I see a key difference in Twitter's search endpoint. It can be described in one word **gatekeeping**. 
Twitter offers 3 tiers of access to their APIv2. They are as follows:
- Essential
- Elevated
- Academic
![TwitterTiers](/twittertiers.png)

The differences showed in these images are the key features that are locked behind the *'Academic'* tier. Obtaining *'Academic'* tier has the benefit of being able to search the full archive. Just to make sure we understand this right, the first tweet ever was published on March 21, 2006. And to answer your question... Yes, you can search (and find) any tweet since 2006 if you have *academic* access. Otherwise, if you have any of the lower tiers, you are only permitted to search Tweets from the past **7 Days**. 
Amazingly, while playing with even the standard 7 day /search/ endpoint, I was amazed at how accurate the searches were and how many Tweets you could find. The filters provided by the API are exceptionally useful to pinpoint exactly the thing you are looking for. If you were to combine the Twitter API with a knowledgeable programmer, determining something such as a politician's popularity could be much easier than people may think, especially with certain filters that aren't available in the standard API. 
I can't help but to find it odd that Twitter places these certain restrictions on the publically available version of their API. It makes me even wonder more... is their more access tiers above *'Academic'*? I mean, of course... there has to be. I look foward to trying to obtain the *'Academic'* tier for myself and playing around. Nevertheless, I think I've exhausted this article for now.

## We Aren't Done Here
I am sure this won't be my last article about Twitter and it's marvelous API. I plan to research it's capabilities more, and see if I can come up with a specific use case where I can make the API powerful for myself or other every-day people. I believe there are many possibilities waiting to explored in this technology. Yet, those who find the gems are probably not incentivized to share the secrets too easily.
I had slight hope that the full version of the API may become available to everyone once Elon brings his free-speech ideologies to the platform. Yet realistically, I do not think that is on his list of priories. In the meantime, I am going to also try and obtain the *'Academic'* tier on my Twitter account. I will let you know how it goes 🙂 .





 
 
