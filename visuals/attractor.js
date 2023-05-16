function cliffordOrbit(length, x, y, a, b, c, d) {

    let n = length;
    let { sin, cos } = Math;
    let value = new Float64Array([x, y]);

    return {
        length, next() {
                    if (n == 0) return { done: true };
                    n -= 1;
                    let x = value[0];
                    let y = value[1];
                    value[0] = sin(a * y) + c * cos(a * x);
                    value[1] = sin(b * x) + d * cos(b * y);
                    return { value, done: false };

            }
        }

}




function drawAttractor() {
    let myscale = d3.scaleLinear()
        .domain([-3,3])
        .range([0,680])
    let myscale_x = d3.scaleLinear()
        .domain([-5,3])
        .range([0,1200])
    const canvas = document.getElementById('attractor');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let params = {
        a: document.getElementById('a').value,
        b: document.getElementById('b').value,
        c: document.getElementById('c').value,
        d: document.getElementById('d').value,
        n: document.getElementById('n').value,
        clr: document.getElementById('clr').value,
        size: document.getElementById('size').value
    }
    console.log("hello", params)

    const it = cliffordOrbit(params.n, 0, 0, params.a, params.b, params.c, params.d)
    let result = it.next();

    while (!result.done) {


        ctx.beginPath();
        ctx.globalAlpha = 0.5


        ctx.arc(myscale_x(result.value[0]),  myscale(result.value[1]), params.size, 0, 2 * Math.PI);

        ctx.fillStyle = params.clr;
        ctx.fill();

        result = it.next();
    }


}

drawAttractor()
