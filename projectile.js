function launcher(player, ctx){
    var mouseX = 0.0;
    var mouseY = 0.0;
    var player = {
    //     x: (800 * 0.5) | 0,
    //     y: (600* 0.5) | 0,
    //     dx: 0.0,
    //     dy: 0.0,
    //     angle: 0.0,
    //     radius: 17.5,
        
        tick: function() {
        this.angle = Math.atan2(mouseY - this.y,mouseX - this.x);
        }
    }

        // render: function() {
        //     ctx.fillStyle = "darkred";
        //     ctx.strokeStyle = "black";
        //     ctx.translate(this.x,this.y);
        //     ctx.rotate(this.angle);
        //     ctx.beginPath();
        //     ctx.moveTo(this.radius,0.0);
        //     ctx.lineTo(-0.5 * this.radius,0.5 * this.radius);
        //     ctx.lineTo(-0.5 * this.radius,-0.5 * this.radius);
        //     ctx.lineTo(this.radius,0.0);
        //     ctx.fill();
        //     ctx.stroke();
        //     ctx.rotate(-this.angle);
        //     ctx.translate(-this.x,-this.y);
        // }
    // };
    
    var bullet = {
        x: (800 * 0.5) | 0,
        y: (600 * 0.5) | 0,
        dx: 0.0,
        dy: 0.0,
        radius: 5.0,
        
        tick: function() {
            this.x += this.dx;
            this.y += this.dy;
            
            if (this.x + this.radius < 0.0
            ||	this.x - this.radius > 800
            ||	this.y + this.radius < 0.0
            || 	this.y - this.radius > 600)
            {
                this.dx = 0.0;
                this.dy = 0.0;
            }
        },
        
        render: function() {
            ctx.fillStyle = "darkcyan";
            ctx.strokeStyle = "white";
            ctx.beginPath();
            ctx.arc(this.x,this.y,this.radius,0.0,2.0*Math.PI,false);
            ctx.fill();
            ctx.stroke();
        }
    }
    
    function loop() {
        // Tick
        bullet.tick();
        player.tick();
        // Render
        ctx.fillStyle = "gray";
        ctx.fillRect(0,0,800,600);
        bullet.render();
        // player.render();
        //
        requestAnimationFrame(loop);
    }
    
    window.onmousedown = function(e) {
        // The mouse pos - the player pos gives a vector
        // that points from the player toward the mouse
        var x = mouseX - player.x;
        var y = mouseY - player.y;
        
        // Using pythagoras' theorm to find the distance (the length of the vector)
        var l = Math.sqrt(x * x + y * y);
        
        // Dividing by the distance gives a normalized vector whose length is 1
        x = x / l;
        y = y / l;
        
        // Reset bullet position
        bullet.x = player.x;
        bullet.y = player.y;
        
        // Get the bullet to travel towards the mouse pos with a new speed of 10.0 (you can change this)
        bullet.dx = x * 10.0;
        bullet.dy = y * 10.0;
    }
    
    // window.onmousemove = function(e) {
    //     mouseX = e.clientX - bounds.left;
    //     mouseY = e.clientY - bounds.top;
    // }
    loop();
}