
function reload() {
    targets = { podinfo: [],  nodes: [], resourcetypes: [],  namespaces: [] };
    objects = [];
    while(scene.children.length > 0){
        scene.remove(scene.children[0]);
    }
    for (var member in resourcetypes) delete objects[resourcetypes];
    for (var member in targets.resourcetypes) delete objects[targets.resourcetypes];
    for (var member in targets.nodes) delete objects[targets.nodes];

    for (var member in targets.resourcetypes) delete objects[targets.resourcetypes];
    objects.clear;
    scene.clear;
    targets.clear;

}



function init() {

    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 3000;

    scene = new THREE.Scene();

    renderer = new THREE.CSS3DRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById( 'container' ).appendChild( renderer.domElement );

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


        //open( "http://xahlee.info/js/js.html", "_blank");

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


    window.addEventListener( 'resize', onWindowResize, false );
}