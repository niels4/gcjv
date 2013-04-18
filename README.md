# Code Jam Solution Viewer

## To Run Web-App:

### Requirements:

* Any static HTTP file server
* The latest version of a modern browser.

### Usage
The easiest way to run the app is to launch a simple HTTP file server in the src/public directory and then use a web browser to load the index.html file.

Example With Python:

    1. cd src/public
    2. python -m SimpleHTTPServer 3000
    3. Open a browser and navigate to http://localhost:3000

## To Build:

### Requirements:
* Compass (which requires ruby) to build the css files

    > Sudo gem install compass    

* Leiningen 2 to build the clj and cljs files

    > https://github.com/technomancy/leiningen

* Ant as the glue to bind it all together
    
    > sudo apt-get install ant

* Node.js for faster webapp builds using r.js optimizer (Optional, can use Rhino instead, but its much slower)

### Building:

With all of the build tools installed, to build the minified web app, simply type:
  ANT

## Advanced Workflow:

Open 4 terminal windows ([tmux](http://tmux.sourceforge.net/) helps manage several terminal sessions at once)
In each session, cd into the root directory of this project

In the first terminal:
  > cd src/compass
  > compass watch
  
This will automatically compile any changes you make to the .scss files and copy
the compiled css files into the src/public/css directory

In the second terminal:
  > lein cljx auto
  
This will watch for any changes you make to the .cljx files and automatically create
the corresponding clojure and clojurescript source files

In the third terminal:
  > lein cljsbuild auto
  
This will watch for any changes to the clojurescript files (caused by changing the
cljx files) and compile the necessary javascript files. The javascript files are then
copied into the src/public/js/workers directory.

With these three processes running, launch a simple HTTP server from the src/public
directory (see python example above). Now any time you change a file that needs to be compiled,
one of the build tools will see the change and automatically build the files for you. All you need to do
to see the changes is refresh your browser window (clearing your browser cache may be
necessary to force the browser to reload your changes).

When you are ready to build your web app for production deployment, simply type:
  > ant
  
This will clean and rebuild all of your css, clj, and cljs files. The script will also
run the r.js optimizer to reduce the javascript code to a single file with whitespace removed.
The web app is then reconstructed using the minified files in the target/public directory.
To test the minified build, either copy the target/public directory to a HTTP server
or launch a new HTTP server in the the target/public directory on a different port.
