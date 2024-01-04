# Data Structures and Design Patterns

The goal of this exercise is to get better with Data Structures and Design Patterns. Learning more about these will allow us to make better decisions as we build our projects.

**Pre-requisite:**

Make sure that you actually want to learn these topics before committing. Each week will be somewhere between 2-5 hours worth of work. It could be more depending on YOU and how deep you want to go. If a topic is too much for one week, we will discuss as a group about extending it into the next week. Below are some articles that you should read to understand what we will be covering. Also feel free to find your own resources if you'd rather watch videos instead of reading.

- [Design Patterns](https://refactoring.guru/design-patterns/what-is-pattern)
  - What is a pattern?
  - History of patterns
  - Why should I learn patterns?
  - Criticism of patterns
  - Classification of patterns
- [Data Structure](https://www.geeksforgeeks.org/introduction-to-data-structures/)
- [YouTube (Data Structure)](https://www.youtube.com/watch?v=poGEVboh9Rw&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=1)

**Weekly Expectations:**

- Get through all of the material listed so we can have a discussion about the topics every week
- Have a few notes on the topics. e.g.
  - What are good use cases (examples) for the Data Structure and Design Pattern you learned that week.
  - Pros and Cons list for using that specific Data Structure and Design Pattern.
  - A list of articles/videos/content that helped you understand the concepts (if they differ from the included resources).
  - A sample code snippet of the Data Structure and Design Pattern.
- If you're having trouble understanding the Data Structure and Design Pattern that week, create a list of talking points so we can discuss what you're confused about as a group.
- Optional: Do the included practice challenges (NeetCode/GeeksforGeeks/leetcode) for the specific Data Structure
- Optional: Do the work in TS & JS (I will mostly be using TS personally)

**Note about JS files:** If you're using js for this exercise, please note that we're using `.mjs` files for this project. If you have an questions about that, let me know.. It's mainly to simplify the run process.

**Future Stuff:**

- After 2-3 months of this flow maybe we'll start adding in some algorithms each week?

## Project Structure

I've included files for JavaScript and TypeScript code. I highly recommend that you do the work in TS but feel free to use whatever you're comfortable with. I think it will be a little easier writing Design Patterns in TypeScript since the syntactic sugar allows for keywords like private, protected, and abstract to be used. If you do use TS it would be a good idea to also look at the JS version just to see how it would be accomplished without the listed keywords.

**Some TypeScript references:**

- [Object types](https://www.typescriptlang.org/docs/handbook/2/objects.html)
- [public, private, and protected](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)
- [abstract classes and members](https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members)

For week-1 I included example code for both the TS and JS versions of the Data Structure and Design Pattern. The main reason for this is so you could see how to configure the files. Feel free to delete the code in those files and start from scratch after you understand how it's working. The future weeks won't include any code, just files.

**Included Files:**

Each week will have it's own directory with mjs/ts files, `NOTES.md` and `README.md`. The `NOTES.md` file is so you can keep notes about the Data Structure and Design Pattern that we're learning about that week. You should also put discussion points / questions for our weekly meeting in that file. The `README.md` file will have all the information that is necessary for that weeks Data Structure and Design Pattern exercise. It will include resources that I came across while putting this repository together. However, you don't need to use those resources for learning the topics. Feel free to look up your own information so you can learn the topics in a way that works best for you. Just remember that if you do use your own resources; please keep track of the videos/articles so you can share them during the weekly meeting. Other people might find them helpful and we can add them to this repository.

You'll notice that some weeks might have multiple Data Structure files e.g. Queue and Circular Queue. When you see this don't freak out! The Data Structures are very similar to each other, so similar that I decided that studying the variant for a week would be a waste of time. They require a small modification of the main Data Structure. e.g. "In linear queue, insertion is done from the rear end, and deletion is done from the front end. In circular queue, the insertion and deletion can take place from any end. The memory space occupied by the linear queue is more than the circular queue.".

## Running the code

Each week has it's own command, as well as, JS and TS.

To run TS you'll run the following command with the proper week #:

```
npm start --week=1 --lang=ts
```

To run JS you'll run the following command with the proper week #:

```
npm start --week=1 --lang=js
```

## General Resources

There are a few resources in here that contradict the SOLID principles. Make sure to check them out!

### Data Structures

- [Udemy Course on JS Data Structures](https://www.udemy.com/course/design-patterns-javascript/)
- [Javascript Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms/tree/master)
- [Geeks for Geeks Data Structures](https://www.geeksforgeeks.org/data-structures/?ref=shm)
- [YouTube DSA Playlist (HackerRank)](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [YouTube Data Structures Playlist (Codevolution)](https://www.youtube.com/watch?v=poGEVboh9Rw&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy&index=1)

### Design Patterns

- [Refactoring Guru (Design Patterns)](https://refactoring.guru/design-patterns)
- [Geeks for Geeks Design Patterns](https://www.geeksforgeeks.org/javascript-design-patterns/?ref=lbp)
- [Top 10 Design Patterns in Software Development](https://medium.com/@orta1989/top-10-design-patterns-in-software-development-3d272140e6ff)
- [YouTube JS Design Patterns Playlist (DevSage)](https://www.youtube.com/watch?v=kuirGzhGhyw&list=PLFKDYTlP3abzwWleHq1WHcKyi8nCPY74s&index=1)
- [YouTube TS Design Patterns Top 5 (Jack Herrington)](https://www.youtube.com/watch?v=JBu2ZTPgiKI)

### Other

- [Programming Principles](https://java-design-patterns.com/principles/)
- [Computer Science Roadmap](https://roadmap.sh/computer-science)
- [NeetCode All Practice Challenges](https://neetcode.io/practice)
- [Solid for Functional Programming](https://stackoverflow.com/a/62527987)
- [Why SOLID principles are still the foundation for modern software architecture](https://stackoverflow.blog/2021/11/01/why-solid-principles-are-still-the-foundation-for-modern-software-architecture/)
- [Why Every Element of SOLID is Wrong](https://speakerdeck.com/tastapod/why-every-element-of-solid-is-wrong)
- [Principles for Microservice Design: Think IDEALS, Rather than SOLID](https://www.infoq.com/articles/microservices-design-ideals/)
