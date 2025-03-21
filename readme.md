Overview:

- Weather reporting app. Search by city

Technologies Used:

- HTML
- CSS
- JavaScript
- Open Weather API
- Materialize
  - CDN
  - Switch component
  - JS from scratch for switch funcitonality

Features:

Notes:

- The general workflow seems to be content, styling, then placeholder styling for dynamic things, and THEN adding the JS and API for functionality.
- Oh and we used Materialize for the first time in a long time, specifically a switch, AND found out how to use JS to add functionality to that switch (the console logs were successful so I’m counting it!

Challenges:

Future Development:

- I probably won't develop this page any further, but may reference it in case future project require similar features.
- change the weather icon if statements to a switch case
- make the input clear upon search??

  - this works!
  - and is really gratifying b/c it's one of the Future Dev points from a previous iteration (weatherApp2)
- Toggle between metric and imperial

  - This also works!  You HAVE to actively choose it before the app searches (WIP), but after that the toggle DOES work to make a separate Metric or Imperial API call, and then displays the relevant units of measure labels.
  - So basically I have to figure out defaults.  Like, the settings upon page load that would allow the search.
  - Could also do the conversions in JS on our end instead of a separate API call.. b/c I had wanted the toggle to function like the Dark/Light mode toggle, but honestly not even the Apple Weather App does that.  So perhaps it's a nonstart.
- Search on Enter keydown also works!

  - and is really gratifying b/c it's one of the Future Dev points from a previous iteration (weatherApp2)
