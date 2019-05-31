# Kubernetes-3d-vizualizer

This project renders your Kubernetes or minikube cluster in 3d. You can delete pods, and zoom in on details/specs.
It is an early version. I will add more functionality (if you have a request, just create a comment or gitlab issue).

## Prerequisites

-Make sure you have kubectl API access via http://localhost:8001 (The command 'kubectl proxy' works in most cases). Atleast namespace rights needed.

-Run chrome with some extra flags to prevent CORS errors.
 ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir=~/chromeTemp")

![](/k8s.gif)

### Getting Started

Start the HTML.

Todo:
-Add services to rendering
-Autodiscovery option for namespaces (make this an option)
-Investigate putting this in a docker container
-Clean up code
-Add more interaction
-Add more 3d items

#### Thank you..
Threejs as this app makes use of:
https://threejs.org/docs/#examples/renderers/CSS3DRenderer

Based on an example from:
https://threejs.org/examples/css3d_periodictable.html
