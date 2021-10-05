## About 
This simple website is an automation project which uses _Gulp_.
Its purpose is to speed up the development process by copying,
concatenating, transpiling and minifying source files, thus making 
life easier so that more time can be spent on writing high quality 
code and testing. It also provides a simple and clear file structure 
for working files and files waiting to be tested/published.

### Tools
As I am completely new to automation, I have chosen (mostly) 
to use the tools suggested by my teachers at Mittuniversitetet. 

The following tools/packages are used:
- **Gulp** is used to automate the tasks.
- **gulp-concat** is used to concatenate CSS and JS files.
- **gulp-babel** is used to transpile more recent versions of JS for 
full browser compatibility.
- **gulp-cssnano** is used to minify the concatenated CSS file.
- **gulp-uglify-es** is used to minify the concatenated JS file.
- **gulp-image** is used to compress images.
- **gulp-sass** is used to compile SASS into CSS.
- **Browsersync** is used to reload the browser window when changes 
are made to the files in the _pub_ folder. 

The reason why I chose to use **gulp-image** rather than the suggested
**gulp-imagemin** was because there seemed to be an issue with the 
**gulp-imagemin** version available on _npmjs.com_. The _require_ 
function was not supported, so I chose to use **gulp-image** instead.

### Download and install
This project can be used on any machine that has _Node.js_ installed.

Take the following steps:
1. Clone the repository to your computer.
2. Install Gulp globally with the following command 
(ignore this step if you already have Gulp): _npm install gulp_.
3. CD into the repository folder and install Gulp locally with 
the following command: _npm install gulp --save-dev_.
4. Create an _NPM_ project with the following command: 
_npm init -y_ (or _npm init_ if you want to add project configurations. 
In which case, just follow the instructions in the terminal).
5. Install the packages used by the repository with the following 
command: _npm install_.

### File structure 
Source files can be found in the _src_ folder, which contains the
_index.html_ file and subdirectories for SASS, JS and image files.
There are currently multiple SASS and JS files.

The _pub_ folder contains the compiled/concatenated/minified/compressed/copied 
files waiting to be tested/published.

### Tasks
For each file type, there is a task that will be run whenever
a change is made to a file. First, you will need to start Gulp.
CD into your project folder and run the following command: _gulp_.
Gulp is now running and will execute the tasks below whenever a 
change is made to a file.

#### htmlTask
This task will copy all HTML files in the _src_ folder to the _pub_
folder whenever a change is made.

#### sassTask
This task will compile the SASS files in the _src_ folder into CSS. 
It will then concatenate, minify and copy the concatenated CSS file 
to the _pub_ folder. It will also update the browser window.

#### jsTask
This task will concatenate, transpile (if necessary), minify and copy 
the concatenated JS file in the _src_ folder to the _pub_ folder.

#### imageTask
This task will compress and copy all images in the _src_ folder to the
_pub_ folder.

#### watchTask
This task will be running whenever Gulp is started. It is listening for
changes to the files in the _src_ and _pub_ folders. Whenever a change
is made, all four tasks above will be run synchronously. It will also
create a live server on the _pub_ folder and update the browser window
whenever a change has been made to the files in the _pub_ folder.
In other words, you can have your copied HTML files running in the 
browser and any changes will be reflected without manual reloading.
 

