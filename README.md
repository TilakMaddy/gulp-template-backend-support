######### THIS IS ARCHIVED ############


Gulp has died out of existence ! I'd rather you to use Parcel JS https://parceljs.org/ 
Keep on hacking :)

#######################################

# Gulp Boilerplate w/ Backend Support [![Build Status](https://travis-ci.org/TilakMaddy/gulp-template-backend-support.svg?branch=master)](https://travis-ci.org/TilakMaddy/gulp-template-backend-support)

> This includes the "most common tasks" of a developer which can be achieved through [Gulp.js](http://gulpjs.com)

[Download Gulp Boilerplate](https://github.com/TilakMaddy/gulp-template-backend-support/archive/master.zip)

**In This Documentation**

1. [Getting Started](#getting-started)
2. [Features and Usage] (#features)
3. [Working with the Source Files](#working-with-the-source-files)
4. [Contribution] (#how-to-contribute)
5. [License] (#license)

## Getting Started

### Dependencies
Make sure these are installed first.

* [Node.js](http://nodejs.org)
* [Gulp](http://gulpjs.com) `sudo npm install -g gulp`

### Quick Start

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install` to install required files.
3. When it's done installing see the features below 

## Features and Usage

I want to keep my task builder as simple as possible and avoid complications!
The following simple tasks can be called:
	
	gulp coffee     => To just convert coffee to Javascript
	gulp javascript => To Minify JS files (coffeescripted as well as original) and transfer
	gulp scripts 	=> To do the above 2 commands
	
	gulp css		=> To just convert CSS to minified version and transfer
	gulp sass		=> To convert scss/sass files to css 
	gulp styles		=> To do the above 2 commands
	
	gulp others 	=> To transfer the assets and documents 'as-is' to development.	

	[For backend developers] ==> gulp index : To take care of site root redirects 
											   Read the file for more info.
	
	(QUICK VERSION - The Ultimate command)
	gulp project	=> To take care of all the other operations with default configurations


## Working with the Source Files

### Sass and CSS files

Sass files are located in `src` > `style`. Gulp generates minified and unminified CSS files.

### JavaScript and Coffescript files

JavaScript and Coffeescript files are located in the `src` > `scripts` directory.

Files placed directly in the `scripts` folder will compile directly to `dist` > `scripts` as a Single concatenated minified file.

### Images

Image files placed in the `src` > `docs` > `assets` directory will be copied as-is into the `dist` > `docs` > `assets` directory.

### Static Files

Files and folders placed in the `src` > `docs` directory will be copied as-is into the `dist` directory.

## How to Contribute

Take care to maintain the existing coding style. Please apply fixes to both the development and production code. Don't forget to update the version number, and if possible, the documentation.


## License

This code is available under the MIT license. 
