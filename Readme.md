# Kubernetes-3d-vizualizer

This project renders your Kubernetes cluster in 3d. You can delete pods, and zoom in on details/specs. <br/>

Also working with Minikube. <br/>

It is an early version. I will add more functionality (if you have a request, just create a comment or gitlab issue). <br/>

## Prerequisites

-Make sure you have kubectl API access via http://localhost:8001 (The command 'kubectl proxy' works in most cases). Atleast namespace rights needed.<br/>

-Run chrome with some extra flags to prevent CORS errors.<br/>
 ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir=~/chromeTemp")

![](/k8s.gif)

### Getting Started

Start the HTML.

Done:
2-6-2019: Replica's and deployments added. Also buttons for increasing and decreasing replica's done.

Todo:  <br/>
-Add services to rendering <br/>
-Autodiscovery option for namespaces (make this an option) <br/>
-Investigate putting this in a docker container <br/>
-Clean up code <br/>
-Add more interaction <br/>
-Add more 3d items <br/>

I am not an expert on JS or CSS, but I do like to build things.

#### Thank you..
Threejs as this app makes use of:
https://threejs.org/docs/#examples/renderers/CSS3DRenderer

Based on an example from:
https://threejs.org/examples/css3d_periodictable.html
