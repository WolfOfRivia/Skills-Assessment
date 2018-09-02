# JLB Skills Assessment

Copyright © 2018 JLB All rights reserved.

## Objective

Develop a webpage that matches the mockup in `./assets/mock.jpg`.

The website should:

- Look as close to the mockup as possible on the latest versions of the browsers: Internet Explorer, Edge, Safari, Chrome, and Firefox at a screen width of 1920px.
- Sections should animate in on scroll. This animation is up to you.
- The hero image ( the image at the top of the page ) should randomly display one of the 3 hero images on page load.

## Technologies Used

- HTML
- CSS
- Javascript

## My Method

- For my layout I wrote all the markup following a traditonal 12 column grid like how bootstrap uses theirs.
- My Hero section has the random background image generated using a random number.
- I had to change the name of the hero background images by adding a hyphon between the spaces. Jquery was not showing the images unless I made this change.
- I placed my text inside its own div which I labled "Hero Content", I positioned it using flexbox alignments.
- The text header formats was complicated but I managed To get it to look as close as possible to the mock up using viewport width on the font size.
- Moving on to my main section I have two six column containers
- In my Images container I have two columns, with the first three images taking up 7 columns and the remaining two are using 5 columns.
- I labled the other container "Details", I also positioned the content using flex alignments as well as giving it some padding on the left.
- The video is positioned using absolute positioning inside its parent element (the main tag), I used transform to center the positioning as close as possible to the mock up.
- The video wrapper acts as a scale keeping the video in it's 16:9, I also gave the video container a box shadow.
- For my animations I used Animate.css and Javascript to activate my animated classes once scrolled to a certain point. I used the window scrollY method to execute the animations upon reaching 250 pixels from the top of the page.
- In my Images container the height of the main section increased size after the completion of the animations, I was able to prevent this from happening using an overflow property.
- I unfortunately do not have any apple products, so I was unable to view the webpage using safari.
- I overall enjoyed this challenge, it tested me in many areas and I picked up new technologies I will definitely use more often.
