# Kubernetes-3d-vizualizer

This project renders your Kubernetes cluster in 3d: (Nodes, Pods, Namespaces, Deployments, Replicasets).  <br/>

You can also interact with the cluster: delete pods, increase/decrease replicas and open specs. <br/>

Also working with Minikube. <br/>

![](/k8s3.gif)

I will add more functionality and cleanup code (if you have a request, just create a comment or gitlab issue). <br/>

## Prerequisites

-Make sure you have kubectl API access via http://localhost:8001 (The command 'kubectl proxy' works in most cases). Atleast namespace rights needed.<br/>

-Run chrome with some extra flags to prevent CORS errors.<br/>
 ("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir=~/chromeTemp")



### Getting Started

Start the HTML.

Update on master:
2-6-2019: Replica's, deployments and logo added. Also buttons for increasing and decreasing replica's added.
3-6-2019: webgl also working. See new logo! Instead of putting webgl z index to 1 and CSS3d to 0 turned that around.

Todo:  <br/>
-Add services to rendering <br/>
-Autodiscovery option for namespaces (make this an option) <br/>
-Investigate putting this in a docker container <br/>
-Clean up code <br/>
-Add more interaction <br/>
-Add more 3d items <br/>

I am not an expert on JS or CSS, but I do like to build things.

#### Credits to..
Threejs as this app makes use of:
https://threejs.org/docs/#examples/renderers/CSS3DRenderer

Based on an example from:
https://threejs.org/examples/css3d_periodictable.html

If you have an idea on dockerizing this then let me know (kubectl sidecar?)!
