# Code Jam Solution Viewer

## To Run:

### Requirements:

* Any static HTTP file server
* The latest version of a modern browser.

### Usage
The easiest way to run the app is to launch a simple HTTP file server in the target/public directory and then use a web browser to load the index.html file.

Example With Python:

    1. cd target/public
    2. python -m SimpleHTTPServer 3000
    3. Open a browser and navigate to http://localhost:3000

## To Build:

### Requirements:
* Compass (with ruby) to build the css files

    > Sudo gem install compass    

* Leiningen 2 to build the clj and cljs files

    > https://github.com/technomancy/leiningen

* Ant as the glue to bind it all together
    
    > sudo apt-get install ant

* Node.js for faster webapp builds using r.js optimizer (Optional, can use Rhino instead, but its much slower)

### Building:

With all of the build tools installed, to build the minified web app, simply type:
  ANT
