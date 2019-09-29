# jQuery-Selectors-and-Events

Day 3 lab

Number and name of feature: feature 1 display images

Estimate of time needed to complete: 1.5 hours

Start time: 9:30am

Finish time: 10:52

Actual time needed to complete: 1 hour, 22 minutes

Number and name of feature: feature 2 filter images

Estimate of time needed to complete: 1.5 hours

Start time: 11am

Finish time: _____

Actual time needed to complete: _____

Number and name of feature: feature 3 style the application

Estimate of time needed to complete: 2 hours

Start time: 930am

Finish time: _____

Actual time needed to complete: _____


## Feature #1: Display images
Why are we implementing this feature?


As a user, I want to view the images on the page so that I can browse the photo collection.


What are we going to implement?


Given that a user opens the application in the browser


When the user navigates to the home page


Then the photo gallery should display all of the images in the gallery

How are we implementing it?
Use AJAX, specifically $.get(), to read the provided JSON file.
Each object should become a new instance of a constructor function. Refer to the data to determine the necessary properties.
Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM.
