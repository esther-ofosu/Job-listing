# Job Listing and filtering 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Description
This project is an Angular application Filter job listings based on the categories selected. The categories are:
o Role: Frontend, Backend, Fullstack
o Level: Junior, Midweight, Senior
o Languages: Python, Ruby, JavaScript, HTML, CSS
o Tools: React, Sass, Vue, Django, RoR (Ruby on Rails)

## User Story Acceptance Criteria
### View the Optimal Layout
-The app should display a responsive design based on the user's screen size.

### Hover states for all Interactive Elements
-the app should display hover states for all interactive elements.

### Filter job listings based on the categories selected
-Selected categories should filter and list jobs based on selected categories.

### Add/Remove categories
-Users can add/remove categories and remove selected categories.

### Search Functionality
-Selected categories appears in the search bar.
-All searched categories can be cleared with the clear button

## Installation
Clone the repository.
Run npm install to install dependencies.
Run ng serve to start the development server.
Access the application in your browser at [here](https://job-project-alpha.vercel.app/home).

## Technologies Used
Angular
TypeScript

## Folder Structure
src/app: Contains Angular components, services, and modules.
src/Sass: Files Containing reusable syting variables, components and properties.
src/assets: Contains static assets like images and icons.
src/styles.css: Global styles for the application.

## Usage
Add categories from Job cards by clicking on buttons to select categories, selected categories are displayed in the search bar
Remove categories from the search bar by clicking the close section of the selected buttton.
Remove all categories by clicking the clear button.
click on prefered category buttons to filter out Jobs with selected categories.

## Development server

Run 
```bash
ng serve
```
for a dev server. Navigate to 
```bash
http://localhost:4200/
```
The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use 
```bash
ng generate directive|pipe|service|class|guard|interface|enum|module
```

## Build

Run 
```bash
ng build
```
to build the project. The build artifacts will be stored in the `dist/` directory.

