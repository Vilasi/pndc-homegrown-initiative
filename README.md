# The Penn-Northwest Homegrown Initiative's: Homegrown Mercer County

The Penn-Northwest Homegrown Initiative is a local nonprofit dedicated to improving the lives of people in Western Pennsylvanian community of Mercer County. This project is their website - the main functionality of which is helping people find work, homes, schools, activities, and community in the area.

**Link to project:** http://www.homegrownmc.com/

<!-- ![Project Landing Page](https://i.imgur.com/WJWiRjX.png) -->

![Project Landing Page](./images/gif/landing.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Bootstrap v5.2, Netlify Hosting

This site constitutes my first foray into the world of freelance web development - that is, the first project I've built for someone other than friends and family! The tech used is entirely vanilla HTML, CSS and JS (not counting the Bootstrap framework).

Primarily this is a static site, composed of 6 main HTML pages, each of which serving the purpose of elucidating some part of the local community to the user. The landing index.html was the greatest challenge of the entire site. As the user scrolls down on desktop they'll find distinct sections that work as calls to action to each of the other pages on the site. Each section contains a series of overlayed Divs - each of which with varying skew, transform, and styling rules that in sum total create a cool modern diagonal effect. The actual content of the divs are layed out using Flexbox (_love_ Flexbox).

<!-- _Check it out!_ -->

![Project Landing Page Diagonal Skew](https://i.imgur.com/4dtKHbX.png)
![Project Landing Page Diagonal Skew](https://i.imgur.com/K8BPdxZ.png)

This is followed by a basic parallax-effect background image section and then the footer, wherein the user finds a form allowing the user to enter their email to join a mailing list, and a sitemap nav.

![Project Landing Page Footer](https://i.imgur.com/fiIrBri.png)

After this, the rest of the pages follow a similar flavor: A large heading with a header and tag line, followed by the relevant content.

![Project Pages](./images/gif/gif-2.gif)

The work page contains some of the more complicated JS scripts on the site. Most prominent to the user is the Salary/College/Job Openings animation. This effect is accomplished through an OOP Class oriented approach and the Intersection Observer API. When an Intersection is observed, a new class object is created. This class is fed the relevant data (Average salary, job openings - data provided by client) and a setInterval function is ran. Through what is essentially a stopwatch of varying numerical steps, the desired value is reached. As the iterator approaches the value, the number by which the iterator jumps lessens, thereby, in effect, slowing down the animation. As the value comes nearest the final value, the iterator starts incrementing by 1, until finally the value is reached and the interval is cleared - ending the animation.

Below this is a Contact form. This allows the user to put in information that is forwarded to the client, who uses it to get in contact with the user and thereby help them find work. This uses Netlify's form handling tech to scour the form and extract relevant data, constricting an Email to send to any specified parties.

![Project work Page](./images/gif/gif-3.gif)

## Optimizations

_(optional)_

You don't have to include this section but interviewers _love_ that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!

## Lessons Learned:

No matter what your experience level, being an engineer means continuously learning. Every time you build something you always have those _whoa this is awesome_ or _fuck yeah I did it!_ moments. This is where you should share those moments! Recruiters and interviewers love to see that you're self-aware and passionate about growing.

## Examples:

Take a look at these couple examples that I have in my own portfolio:

**Palettable:** https://github.com/alecortega/palettable

**Twitter Battle:** https://github.com/alecortega/twitter-battle

**Patch Panel:** https://github.com/alecortega/patch-panel
