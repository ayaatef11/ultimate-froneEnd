*********************************************commands:
gulp watch 
to watch the html file






















extensions we need :
1-auto rename tag:to auto complete and edit while you write html tags
2-css peek:allow you to know the css attributes of an element while you are in the html file
3-editor config: to enable take the configurations of my file to someone else and edit them
4-icon font : you can take an icon from the avaiable ones 
5-indent-rainbow : to make the indentation of lines of codes well
6-path intellisence:define the available paths 
7-prettier : format your code when saving it
8- bracket pair  colorizer 2 : highlights matching brackets
9-material icon theme :designing the icons
10-pola code :colorful coding with a nice style.
----
dist or distribution folder ;this will contain the folders that the client will use
stage folder:this will contain all the work you do
-------------
main.scss is the file where i can include all the files in the sass structure
---------------------
npm init :create a new poject and its package.json will contain the packages to use  if you want to run the project in another device

----------------------------------------------------------------------------------------------------------------

var gulp = require('gulp'): This line imports the Gulp module, allowing you to create Gulp tasks.
var concat = require('gulp-concat'): This imports the gulp-concat plugin, which concatenates files.
var sass = require('gulp-sass'): This imports the gulp-sass plugin, which compiles Sass/SCSS files into CSS.
var autoprefixer = require('gulp-autoprefixer'): This imports the gulp-autoprefixer plugin, which automatically adds vendor prefixes to CSS rules.
var pug = require('gulp-pug'): This imports the gulp-pug plugin, which compiles Pug/Jade templates into HTML.
var livereload = require('gulp-livereload'): This imports the gulp-livereload plugin, which enables live reloading of web pages during development.
var sourcemaps = require('gulp-sourcemaps'): This imports the gulp-sourcemaps plugin, which generates sourcemaps for CSS and JavaScript files.
var minify = require('gulp-minify'): This imports the gulp-minify plugin, which minifies JavaScript files.



Defining Gulp Tasks:

Gulp tasks are defined using the gulp.task() function. Each task typically has a name and a function that defines what the task does.
These tasks can include various operations like compiling Sass to CSS, concatenating files, minifying files, etc.

--------------------------------------------------------------------------------------------------------------



In a Gulpfile, tasks refer to individual units of work that can be executed by the Gulp task runner. Each task typically performs a specific operation or set of operations on files, such as compiling Sass to CSS, concatenating JavaScript files, minifying assets, etc. Tasks are defined using the gulp.task() function, and they can be named and configured according to the requirements of the project.

For example, you might have tasks like:

sass: Compiles Sass files into CSS.
scripts: Concatenates and minifies JavaScript files.
images: Optimizes images for the web.
watch: Sets up a file watcher to automatically trigger tasks when files change.
You can define as many tasks as needed to automate various aspects of your development workflow. Tasks can also be organized into dependency chains, where one task depends on the output of another task, ensuring that tasks are executed in the correct order.

Once tasks are defined in the Gulpfile, you can run them using the gulp command followed by the task name. For example, gulp sass would run the sass task defined in the Gulpfile.

-------------------------------------------------------------------------------

Node.js will treat .cjs files as CommonJS modules and .mjs files as ECMAScript modules. It will treat .js files as whatever the default module system for the project is (which is CommonJS unless package.json says "type": "module",).
----------------------------------------------------------------------

.MJS file

mjs an extension for EcmaScript modules
An MJS file is a source code file containing an ES Module (ECMAScript Module) for use with a Node.js application.
MJS files are written in JavaScript, and may also use the .JS extension outside of the Node.js context.

ES Modules allow web and application developers to organize code into smaller reusable components.
------------------------------------------------------------------------------------------


ES modules (ESM) and CommonJS modules are two different module systems used in JavaScript, each with its own syntax, features, and use cases. Here are the key differences between them:

Syntax:

ES modules use import and export statements for module loading and exporting.
CommonJS modules use require() function for module loading and module.exports or exports object for exporting.
Static vs. Dynamic:

ES modules are statically analyzed, meaning imports and exports are resolved at compile time, allowing for optimizations like tree shaking.
CommonJS modules are dynamically loaded, meaning modules are loaded and evaluated at runtime, which can make it harder to perform optimizations.
Browser vs. Node.js:

ES modules are supported in modern browsers natively via <script type="module"> tags or through bundlers like Webpack.
CommonJS modules are the default module system in Node.js, but they can also be used in browsers with bundlers like Browserify.
Top-level Scope:

In ES modules, each module has its own scope, meaning variables and functions are scoped to the module and not visible outside unless explicitly exported.
In CommonJS modules, variables and functions defined in a module are scoped to the module, but they can be accessed and modified from outside the module.
Asynchronous Loading:

ES modules are loaded asynchronously by default, improving page loading performance.
CommonJS modules are loaded synchronously, which may lead to slower page loading times, especially in large applications.
Dynamic Imports:

ES modules support dynamic imports, allowing modules to be imported conditionally or asynchronously.
CommonJS does not have built-in support for dynamic imports, although it can be achieved using require() within functions or using third-party libraries.
Circular Dependencies:

ES modules do not support circular dependencies directly, and they must be resolved using workarounds like lazy loading or refactoring.
CommonJS modules handle circular dependencies by providing the module exports as an empty object during the module initialization, allowing other modules to access and modify it.
In summary, while both ES modules and CommonJS modules serve the purpose of modularizing JavaScript code, they differ in syntax, loading mechanism, scope, and support for features like dynamic imports and circular dependencies. ES modules are the modern standard for modular JavaScript development, especially in browser environments, while CommonJS modules are widely used in Node.js and legacy browser environments.

---

sourcemap you have a minified project you don't know its place   this method help you know its place even it is compressed

every new file you create you need to make a watch for it


The gulpfile.js is a configuration file used in projects that utilize Gulp.js, a task runner built on Node.js. Its importance lies in facilitating the automation of various development tasks, such as compiling Sass to CSS, concatenating and minifying JavaScript files, optimizing images, and more. Here are some key aspects of the gulpfile.js and its importance:

Task Definition: In the gulpfile.js, you define tasks using Gulp's API. Tasks represent different operations that you want Gulp to perform, such as compiling code, optimizing assets, or deploying files.

Automation: By defining tasks in the gulpfile.js, you can automate repetitive tasks in your development workflow. For example, you can set up tasks to compile Sass files whenever they change, concatenate and minify JavaScript files before deployment, or optimize images for better performance.

Modular and Flexible: Gulp allows you to organize your tasks into smaller, modular functions that can be easily reused across different projects. This modularity and flexibility make it easy to customize and extend your build process as needed.

Stream-based Processing: Gulp operates on streams, which allows for efficient processing of files. Tasks can be chained together using streams, enabling you to perform complex transformations on files with minimal memory usage.

Integration with Plugins: Gulp has a rich ecosystem of plugins that extend its functionality. These plugins can be easily integrated into your gulpfile.js to add support for various tasks and tools, such as compiling different languages, optimizing assets, or running tests.

Consistency and Reproducibility: By defining your build process in code within the gulpfile.js, you ensure consistency and reproducibility across different environments and team members. Everyone working on the project uses the same set of tasks, reducing the likelihood of errors and inconsistencies.

In summary, the gulpfile.js is a central component of a Gulp-based build system, responsible for defining and orchestrating the tasks needed to automate various aspects of the development workflow. Its importance lies in its ability to streamline development tasks, improve efficiency, and maintain consistency in the project's build process.

User
it must be named this name or we can name it any name we want
ChatGPT
The gulpfile.js is the default name recognized by Gulp.js for its configuration file. However, you can name it differently if you prefer.

By default, when you run the gulp command in a project directory, Gulp will look for a file named gulpfile.js or gulpfile.babel.js (if you're using ES6 modules) in that directory. If you want to use a different name for your Gulp configuration file, you can specify it explicitly when running the gulp command using the --gulpfile option followed by the file path.

For example:

css
Copy code
gulp --gulpfile mygulpfile.js
This command tells Gulp to use the mygulpfile.js file as the configuration file instead of the default gulpfile.js.

So, while gulpfile.js is the conventional name and is automatically recognized by Gulp, you have the flexibility to choose a different name if it suits your project's organization or preferences.

-------------------------------------------------------------------------
***********************************The structure of the page really important***********************
-side bar will be the same in all pages but the content area will change
-files that end with underscore which means that compiler won't see this file and this file is foer include only

 --------------------------------
 ***********************importance ofgulp***
-toolkit to automate repeated tasks in your development environment
-gulp js built on node js
-example of tasks [minify css,compile sass or less ,compress images ,upload files]
more than 3800 plugins and tasks are done by it 
you can create your own defined tasks 
save your time and make you focus on code
give your fast builds because its use power of nodejs 
has 30k star on github 
by using task runner ,all your work will be standard and with one pattern

----------------------------------------------------------------------------------------
what does a plugin mean?
it is a piece of software added to an existing computer program .
we also call it an add-on or extension
in candian english a plugin is an electric outlet for plugging in a vehicle's block heater in order to keep the engine warm 
what is a plugins?
it has unique capabilities,they add a specific feature to an existing program
for example ,if you want to watch a video on a website ,you might have to download a plugin for your web browser 
plugins can make your software either more powerful or better targeted to your specific requirements .
in the world of website design and development ,things would be significantly more limited if we had no plugins
most plugins are available as free downloads 
premium plugins are the ones we pay for

plugin is used to add different functionality to the original code
add-on is a software extension or hardware peripheral the provides additional functions or customization for a core application or system
poker:it is an additional chip that can be purchased at specific times in turnament play
it is also called something that can be appended to something else
add-on is synonym for plug-in or add-in
************************************************browsersync with gulp**********************************
it is a powerful tool that makes it easy to test your website while you are building it,it works by spinning up a local sserver and syncing it  up to your browser and then every change you make with your code it will reload the browser automatically 
*************************web workflow************
it is a design aspect which covers all of the processes and steps that will be necessary to create a website .it's purpose is to serve as a type of recipe for your site building

it mainly cosists of three basic steps:
planning-implementation-testing and launch

steps:
manage expectations-define objectives and audience -plan site structure - create content-review and approval-website development-testing -launch and further improvements
2-define the objectives and the audience ,what will be the purpose of the website ,who is the site garded by and what will people be looking for when they get to the site 
these and many others are important questions to ask your team at this point
plan site structure :
this is where you will develop your wireframes and create your site map.this will give you big picture of where things will go and how your site will  function

3-create content:
this is the fun part ! this is your chance to create all the mockups and really start to see what your website is going to look like

4- review and approval:
your site is almost ready to fo at this point .Now you will send it to the client for approval .this stage can present its self in many different ways, so it is important to stay patient and flexible

website development :
once everything is approved and ready for those final touches ,your it team can now step in and integrate any missing pieces and make sure that everything is ready to operate live online

testing :
this might be one of the most important steps now is when will take the time to make sure everything runs as it should.this may include:
-bug fixes -checking your content -checking your seo setitngs and checking mobile responsiveness

launch and further improvements 
now that the project is more or less done ,you will finally choose the domain and publish the site but rememeber websites aren't one and done projects it will be important to check in on the site often and perform any routine maintenance necessary this will also be about when you want to start looking into the analytics of your site too

what is the task runner?
it is a program that performs repetitive developmental tasks within your code,this include tasks like :
prefixing css rules 
concatenating files 
compiling code 
minimizing js and css files

task runners provides automation
the part that has many ufnctionalities it is better to make it in his own file 

the main file for import only not to put your design





