//https://www.3blue1brown.com/lessons/prime-spirals
//http://www.primenumbers.net/Renaud/eng/PSpiral.html
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d')

let cameraOffset = { x: window.innerWidth/2, y: window.innerHeight/2 }
let cameraZoom = 1
let MAX_ZOOM = 200
let MIN_ZOOM = 0.002
let SCROLL_SENSITIVITY = 0.001
let n = 100000
let w = 8
function getPrimes(n) {
    let primes = [];
    for(let i = 2; primes.length < n; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function isPrime(num) {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function makepoloar(num){
    return [num*Math.cos(num),num*Math.sin(num)]
}
console.log(getPrimes(10));
function makedata(width,height)
{
    nums = getPrimes(n)
   // nums = [...Array(n).keys()]
    points = nums.map(num => {return makepoloar(num)})
    console.log(points)
    return points
}
let data = makedata(canvas.width,canvas.height)
function drawPoint([cx,cy], width) {


    // NOTE; each point needs to be drawn as its own path
    // as every point needs its own stroke. you can get an insane
    // speed up if the path is closed after all the points have been drawn
    // and don't mind points not having a stroke
    ctx.beginPath();
    //ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.rect(cx-width/2, cy-width/2, width, width);
    //context.closePath();
    ctx.fillStyle = "rgba(3,93,96,0.5)";
    ctx.fill();
    //context.stroke();
}
function draw()
{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
    ctx.translate( window.innerWidth / 2, window.innerHeight / 2 )
    ctx.scale(cameraZoom, cameraZoom)
    ctx.translate( -window.innerWidth / 2 + cameraOffset.x, -window.innerHeight / 2 + cameraOffset.y )

    /*const path = d3.geoPath().context(ctx);
    ctx.beginPath();
    path.pointRadius(2)({ type: "MultiPoint", coordinates: data });
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fill();*/

    data.forEach(function(point, index) {
        drawPoint(point, Math.abs(w+index/5));
    })
    ctx.closePath()

    requestAnimationFrame( draw )
}

// Gets the relevant location from a mouse or single touch event
function getEventLocation(e)
{
    if (e.touches && e.touches.length == 1)
    {
        return { x:e.touches[0].clientX, y: e.touches[0].clientY }
    }
    else if (e.clientX && e.clientY)
    {
        return { x: e.clientX, y: e.clientY }
    }
}



let isDragging = false
let dragStart = { x: 0, y: 0 }

function onPointerDown(e)
{
    isDragging = true
    dragStart.x = getEventLocation(e).x/cameraZoom - cameraOffset.x
    dragStart.y = getEventLocation(e).y/cameraZoom - cameraOffset.y
}

function onPointerUp(e)
{
    isDragging = false
    initialPinchDistance = null
    lastZoom = cameraZoom
}

function onPointerMove(e)
{
    if (isDragging)
    {
        cameraOffset.x = getEventLocation(e).x/cameraZoom - dragStart.x
        cameraOffset.y = getEventLocation(e).y/cameraZoom - dragStart.y
    }
}

function handleTouch(e, singleTouchHandler)
{
    if ( e.touches.length == 1 )
    {
        singleTouchHandler(e)
    }
    else if (e.type == "touchmove" && e.touches.length == 2)
    {
        isDragging = false
        handlePinch(e)
    }
}

let initialPinchDistance = null
let lastZoom = cameraZoom

function handlePinch(e)
{
    e.preventDefault()

    let touch1 = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    let touch2 = { x: e.touches[1].clientX, y: e.touches[1].clientY }

    // This is distance squared, but no need for an expensive sqrt as it's only used in ratio
    let currentDistance = (touch1.x - touch2.x)**2 + (touch1.y - touch2.y)**2

    if (initialPinchDistance == null)
    {
        initialPinchDistance = currentDistance
    }
    else
    {
        adjustZoom( null, currentDistance/initialPinchDistance )
    }
}

function adjustZoom(zoomAmount, zoomFactor)
{
    if (!isDragging)
    {
        if (zoomAmount)
        {
            cameraZoom += zoomAmount
        }
        else if (zoomFactor)
        {
            console.log(zoomFactor)
            cameraZoom = zoomFactor*lastZoom
        }

        cameraZoom = Math.min( cameraZoom, MAX_ZOOM )
        cameraZoom = Math.max( cameraZoom, MIN_ZOOM )

        console.log(zoomAmount,cameraZoom)
        //w = w+(zoomAmount)*300


    }

}

canvas.addEventListener('mousedown', onPointerDown)
canvas.addEventListener('touchstart', (e) => handleTouch(e, onPointerDown))
canvas.addEventListener('mouseup', onPointerUp)
canvas.addEventListener('touchend',  (e) => handleTouch(e, onPointerUp))
canvas.addEventListener('mousemove', onPointerMove)
canvas.addEventListener('touchmove', (e) => handleTouch(e, onPointerMove))
canvas.addEventListener( 'wheel', (e) => adjustZoom(e.deltaY*SCROLL_SENSITIVITY))

// Ready, set, go
draw()