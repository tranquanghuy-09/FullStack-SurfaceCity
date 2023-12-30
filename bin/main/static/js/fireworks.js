var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

var cwidth, cheight;
var shells = [];
var pass = [];

var colors = ['RGB(255, 206, 52)', '#F00', 'RGB(175, 224, 245)', 'RGB(204, 233, 164)'];

window.onresize = function () {
    reset();
}
reset();

function reset() {
    cwidth = window.innerWidth;
    cheight = window.innerHeight;
    c.width = cwidth;
    c.height = cheight;
}

function clearCanvas() {
    ctx.clearRect(0, 0, cwidth, cheight);
}

function newShell() {
    var shell = {};
    shell.x = 0.5;
    shell.y = 1;
    var direction = (Math.random() > 0.5) ? 1 : -1;
    shell.xoff = direction * (0.01 + Math.random() * 0.007);
    shell.yoff = 0.01 + Math.random() * 0.007;
    shell.size = Math.random() * 3 + 3;
    shell.color = colors[Math.floor(Math.random() * colors.length)];
    shell.explode = false;
    shells.push(shell);

}

function newPass(shell) {
    var pasCount = Math.ceil(Math.pow(shell.size, 2) * Math.PI);
    for (i = 0; i < pasCount; i++) {
        var pas = {};
        pas.x = shell.x * cwidth;
        pas.y = shell.y * cheight;
        var a = Math.random() * 4;
        var s = Math.random() * 10;
        pas.xoff = s * Math.sin((5 - a) * (Math.PI / 2));
        pas.yoff = s * Math.sin(a * (Math.PI / 2));
        pas.color = shell.color;
        pas.size = Math.sqrt(shell.size);
        pas.alpha = 1; // Thêm thuộc tính alpha
        if (pass.length < 500) {
            pass.push(pas);
        }
    }
}

var lastRun = 0;
var isRunning = true;

setTimeout(function () {
    isRunning = false;
}, 30000);

Run();

function Run() {
    if (!isRunning) {
        clearCanvas();
        return;
    }

    var dt = 1;
    if (lastRun != 0) {
        dt = Math.min(50, (performance.now() - lastRun));
    }
    lastRun = performance.now();
    ctx.fillStyle = "rgba(0,0,0,0)";
    // ctx.fillRect(0, 0, cwidth, cheight);
    ctx.clearRect(0, 0, cwidth, cheight);

    if ((shells.length < 1000) && (Math.random() > 0.85)) {
        newShell();

    }

    for (let ix = shells.length - 1; ix >= 0; ix--) {
        var shell = shells[ix];

        if (!shell.explode) {
            ctx.beginPath();
            ctx.arc(shell.x * cwidth, shell.y * cheight, shell.size, 0, 2 * Math.PI);
            ctx.fillStyle = shell.color;
            ctx.fill();

            shell.x -= shell.xoff;
            shell.y -= shell.yoff;
            shell.xoff -= (shell.xoff * dt * 0.001);
            shell.yoff -= ((shell.yoff + 0.1) * dt * 0.00005);

            if (shell.x * cwidth < 0 || shell.x * cwidth > cwidth || shell.y * cheight > cheight) {
                shell.explode = true;
                newPass(shell);

            }
        } else {
            shells.splice(ix, 1);
        }
    }

    for (let ix = pass.length - 1; ix >= 0; ix--) {
        var pas = pass[ix];

        ctx.beginPath();
        ctx.arc(pas.x, pas.y, pas.size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(${pas.color}, ${pas.alpha})`; // Sử dụng alpha
        ctx.fill();

        pas.x -= pas.xoff;
        pas.y -= pas.yoff;
        pas.xoff -= (pas.xoff * dt * 0.001);
        pas.yoff -= ((pas.yoff + 5) * dt * 0.0005);
        pas.size -= (dt * 0.002 * Math.random());

        // Giảm alpha theo thời gian
        pas.alpha -= dt * 0.001;

        if ((pas.y > cheight) || (pas.y < -50) || (pas.size <= 0) || (pas.alpha <= 0)) {
            pass.splice(ix, 1);
        }
    }

    requestAnimationFrame(Run);
}