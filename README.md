# Code Jam Solution Viewer
<br />

This application can be hosted entirely as static files in any HTTP server.
Here is an example of the app hosted using Google Drive:
[Code Jam Solution Viewer](https://googledrive.com/host/0B2DTdtklfWDyWXBueGRCVmdSTTQ/index.html)

This project started off as a way to learn clojure syntax and functional programming
concepts. Originally, it only ran on the JVM. I then had the idea of creating a browser
based UI for running the solutions and viewing the source code. My first thought was to
create a rest service in clojure that takes the problem name and input text as parameters,
runs the corresponding solve function against the input, and returns the results.
But that was too straight forward and easy, and it also required investment in a web
server that could host the webservices that would be doing all of the computing.
Instead, I decided to convert all of my clojure code into code that could be compiled
and ran in both the browser and the JVM. I used the [cljx plugin](https://github.com/lynaghk/cljx)
for leiningen to handle the minor implementation differences between the two.

The clojurescript code is compiled down to a single js file using the lein cljsbuild
plugin. Instead of being loaded into the page, the file is loaded as a web worker script.
This creates something that can be thought of as a mini clojurescript server running
as a background process in the user's browser. The services can be started and stopped
by creating a new worker and then calling the terminate function on the worker. Messages
can be sent and received between the javascript environment and the clojurescript web worker
environment, much like messages are passed back and forth when making ajax calls to a REST service.
The Run Button starts the worker and passes it a message containing the problem name and input.
Then, when the clojurescript worker computes a response, it passes the output in a message back
to the javascript environment that invoked it. The text field for displaying the output text
is then updated with the message contents.


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
    
## To Solve Problems using the JVM:

### Requirements:

* Java
* Leiningen 2

### Usage

    From the root of the project directory, type:
    lein solve <problem_name> <input_name>
    
#### Example:
    The following command will solve the snapper chain problem using the file src/cljx/shared /problems/snapper_chain/input/large.in as its input.
    The output will be the file src/cljx/shared/problems/snapper_chain/output/large.out
> lein solve snapper_chain large



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
