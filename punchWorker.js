// punchWorker.js
/*self.onmessage = function(event) {
    const direction = event.data;
    punchBag(direction);
    self.postMessage('done');
};

const bag = document.querySelector('.bag');

function punchBag(direction) {
    gsap.to(bag, {
        duration: 0.2,
        x: direction.x,
        y: direction.y,
        //z: direction.z, 
        rotation: direction.rotation,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        onComplete: () => {
            gsap.to(bag, {
                duration: 1,
                rotation: 0,
                x: 0,
                y: 0,
                //z: 0,
                ease: "elastic.out(1, 0.3)"
            });
        }
    });
}*/

self.onmessage = function(event) {
    const direction = event.data;
    // Simulate heavy computation or delay (e.g., animation frame calculation)
    const start = Date.now();
    while (Date.now() - start < 1000) {
        // Simulating delay for the purpose of the example
    }
    self.postMessage(direction);
};