
function reload() {
    targets = { podinfo: [],  nodes: [], resourcetypes: [],  namespaces: [] };
    objects = [];
    while(scene.children.length > 0){
        scene.remove(scene.children[0]);
    }
    for (var member in resourcetypes) delete objects[resourcetypes];
    for (var member in nodes) delete objects[nodes];
    for (var member in targets.resourcetypes) delete objects[targets.resourcetypes];
    for (var member in targets.nodes) delete objects[targets.nodes];

    for (var member in targets.resourcetypes) delete objects[targets.resourcetypes];
    for (var member in targets.replicaset) delete objects[targets.replicaset];
    for (var member in targets.depolyment) delete objects[targets.deployment];
    objects.clear;
    scene.clear;
    targets.clear;

}



function init() {

    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 6000;

    scene = new THREE.Scene();
    sceneGl = new THREE.Scene(); //glscene

    // add light, set color and distance.
    //var light = new THREE.DirectionalLight(0xfdfdfd, 2);
    // you set the position of the light and it shines into the origin
    //light.position.set(300, 300, 300).normalize();
    //sceneGl.add(light);

    // add ambient light
    // subtle blue
    //var ambientLight = new THREE.AmbientLight(0x000022);
    //sceneGl.add(ambientLight);


 image.addEventListener('load', function(event) {


			      //-1200, 1020, 50
			      objectlogo.position.x = 00,
			        objectlogo.position.y = 1520,
			        objectlogo.position.z = -500;
			        objectlogo.rotation.x +=0.01;
			      scene.add(objectlogo);

			      objects.push(objectlogo);


			  }, false);




    var boxGeom = new THREE.CubeGeometry(60, 60, 60);//glscene
    var texture = new THREE.TextureLoader().load( 'kube.jpg' );//glscene

	//var boxGeom = new THREE.BoxBufferGeometry( 100, 100, 100 );//glscene
	var material = new THREE.MeshBasicMaterial( { map: texture, opacity: 0.5} );//glscene
	material.transparent = true;

	cube = new THREE.Mesh( boxGeom, material );//glscene
    cube.position.copy(new THREE.Vector3(-1200, 1020, 50));//glscene
    //cube.rotation.copy(Math.PI / 6);//glscene



    sceneGl.add(cube);//glscene
    rendererGl = new THREE.WebGLRenderer({alpha:true});//glscene
    rendererGl.setClearColor(0x00ff00, 0.0);//glscene

    rendererGl.setSize(window.innerWidth, window.innerHeight);//glscene
    rendererGl.domElement.style.position = 'absolute';//glscene
    rendererGl.domElement.style.zIndex = 1;//glscene
    rendererGl.domElement.style.top = 0;//glscene
   // document.body.appendChild(rendererGl.domElement);


    renderer = new THREE.CSS3DRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
           //renderer.domElement.appendChild(rendererGl.domElement);//glscene deze regel veroorzaakt selecterenfout
               // document.getElementById( 'container' ).appendChild( rendererGl.domElement );
           // document.body.appendChild(renderer.domElement);//glscene
    document.getElementById( 'container' ).appendChild( renderer.domElement );
                    //document.getElementById( 'container' ).appendChild( rendererGl.domElement );

    controls = new THREE.TrackballControls( camera, renderer.domElement );
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener( 'change', render );








    var button = document.getElementById( 'refresh' );
    button.addEventListener( 'click', function () {
        reload();
        loadnodes();
        loadinfo();
        loadreplicasets
        loaddeployments

    }, false );

    var button = document.getElementById( 'detail10' );
    button.addEventListener( 'click', function () {
        mylink = "http://localhost:8001/" +detail12.innerHTML
        open( mylink, "_blank");
    }, false );

    var button = document.getElementById( 'detail11' );
    button.addEventListener( 'click', function () {
                var deleteobject = "http://localhost:8001" + detail12.innerHTML;
                var xhttp = new XMLHttpRequest();
                xhttp.open("DELETE", deleteobject, true);
                xhttp.send();

    }, false );

    var buttonadd = document.getElementById( 'detail13' );
    buttonadd.addEventListener( 'click', function () {
       if (buttonadd.innerHTML=='Add replica'){

                var xhttp = new XMLHttpRequest();
                  xhttp.open("GET", "http://localhost:8001/apis/extensions/v1beta1/namespaces/"+mynamespace+"/replicasets/"+ detail1.innerHTML, true);
                  xhttp.send();
                  xhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                    var newreplicas = parseInt(detail5.innerHTML , 10)+ 1;
                    var response1 = xhttp.responseText;
                    var res = xhttp.responseText.replace('"replicas": '+ detail5.innerHTML , '"replicas": '+ newreplicas);
                    var xhttp2 = new XMLHttpRequest();
                                      xhttp2.open("PUT", "http://localhost:8001/apis/extensions/v1beta1/namespaces/"+mynamespace+"/replicasets/"+ detail1.innerHTML, true);
                                      xhttp2.setRequestHeader("Content-Type", "application/json");
                                      xhttp2.send(res);
                                      if (this.readyState == 4 && this.status == 200) {
                                      test=1;
                                      }
                    var test = 1;
                }
             }
                  }

             if (buttonadd.innerHTML=='Add one replica'){

                       var xhttp = new XMLHttpRequest();
                         xhttp.open("GET", "http://localhost:8001/apis/extensions/v1beta1/namespaces/"+mynamespace+"/deployments/"+ detail1.innerHTML, true);
                         xhttp.send();
                         xhttp.onreadystatechange = function() {
                         if (this.readyState == 4 && this.status == 200) {
                           var newdeployments = parseInt(detail5.innerHTML , 10)+ 1;
                           var response1 = xhttp.responseText;
                           var res = xhttp.responseText.replace('"replicas": '+ detail5.innerHTML , '"replicas": '+ newdeployments);
                           var xhttp2 = new XMLHttpRequest();
                                             xhttp2.open("PUT", "http://localhost:8001/apis/extensions/v1beta1/namespaces/"+mynamespace+"/deployments/"+ detail1.innerHTML, true);
                                             xhttp2.setRequestHeader("Content-Type", "application/json");
                                             xhttp2.send(res);
                                             if (this.readyState == 4 && this.status == 200) {
                                             test=1;
                                             }
                           var test = 1;
                       }
                       }
              }

    }, false );


        var buttonreduce = document.getElementById( 'detail14' );
        buttonreduce.addEventListener( 'click', function () {
           if (buttonreduce.innerHTML=='Reduce replica'){

                    var xhttp = new XMLHttpRequest();
                      xhttp.open("GET", "http://localhost:8001/apis/extensions/v1beta1/namespaces/"+mynamespace+"/replicasets/"+ detail1.innerHTML, true);
                      xhttp.send();
                      xhttp.onreadystatechange = function() {
                      if (this.readyState == 4 && this.status == 200) {
                        var newreplicas = parseInt(detail5.innerHTML , 10)- 1;
                        var response1 = xhttp.responseText;
                        var res = xhttp.responseText.replace('"replicas": '+ detail5.innerHTML , '"replicas": '+ newreplicas);
                        var xhttp2 = new XMLHttpRequest();
                                          xhttp2.open("PUT", "http://localhost:8001/apis/extensions/v1beta1/namespaces/"+mynamespace+"/replicasets/"+ detail1.innerHTML, true);
                                          xhttp2.setRequestHeader("Content-Type", "application/json");
                                          xhttp2.send(res);
                                          if (this.readyState == 4 && this.status == 200) {
                                          test=1;
                                          }
                        var test = 1;
                    }
                 }
                      }

                 if (buttonreduce.innerHTML=='Reduce one replica'){

                           var xhttp = new XMLHttpRequest();
                             xhttp.open("GET", "http://localhost:8001/apis/extensions/v1beta1/namespaces/"+mynamespace+"/deployments/"+ detail1.innerHTML, true);
                             xhttp.send();
                             xhttp.onreadystatechange = function() {
                             if (this.readyState == 4 && this.status == 200) {
                               var newdeployments = parseInt(detail5.innerHTML , 10)- 1;
                               var response1 = xhttp.responseText;
                               var res = xhttp.responseText.replace('"replicas": '+ detail5.innerHTML , '"replicas": '+ newdeployments);
                               var xhttp2 = new XMLHttpRequest();
                                                 xhttp2.open("PUT", "http://localhost:8001/apis/extensions/v1beta1/namespaces/"+mynamespace+"/deployments/"+ detail1.innerHTML, true);
                                                 xhttp2.setRequestHeader("Content-Type", "application/json");
                                                 xhttp2.send(res);
                                                 if (this.readyState == 4 && this.status == 200) {
                                                 test=1;
                                                 }
                               var test = 1;
                           }
                           }
                  }

        }, false );







    window.addEventListener( 'resize', onWindowResize, false );
}