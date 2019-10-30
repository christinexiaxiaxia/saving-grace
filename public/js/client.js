
/////////////////////////////////

//////////////////////

///////////

// WARNING: ALL VERY BRUTE FORCE... SORRY! MY PEA-BRAIN JUST CAN'T TAKE IT RIGHT NOW!

///////////

//////////////////////

/////////////////////////////////


$(function () {

    var socket = io({reconnection:false});


    // SEND MOUSE POSITION FROM CLIENT TO SERVER

    $(document).mousemove(function(e){
        socket.emit('mousemoving', e.clientX, e.clientY, socket.id);
    })



// DRAW DIV WHEN MOVING CURSOR https://stackoverflow.com/questions/3385936/jquery-follow-the-cursor-with-a-div

    // BROADCAST CURSOR DATA 

    socket.on('mousemoving',function(dataX, dataY, id){
        //console.log('Mouse position: ' + dataX + ', ' + dataY + '. Client ID: ' + id);

        if (!$("#" + id).length) {
            // console.log("none")

            $("<div></div>")
                .attr("class", "cursor")
                .attr("id", id)
                .appendTo(".wrapper")
                .append('<img src="' + '../cursor.png' + '">')
        }

        $("#" + id)
            .css({
                top: dataY - 7.5,
                left: dataX - 7.5
            })

    })



/// FADE AUDIO VOLUME https://stackoverflow.com/questions/39511353/play-pause-music-with-fade-in-fade-out-with-javascript?rq=1

/// CLEAR ANIMATION QUEUE BUILD UP CAUSED BY HOLDING MOUSE DOWN https://stackoverflow.com/questions/14613498/how-to-prevent-this-strange-jquery-animate-lag

    var audio1 = $('#audio1');
    var audio2 = $('#audio2');
    var audio3 = $('#audio3');
    var audio4 = $('#audio4');
    var audio5 = $('#audio5');
    var audio6 = $('#audio6');

    var box1 = $('#box1');
    var box2 = $('#box2');
    var box3 = $('#box3');
    var box4 = $('#box4');
    var box5 = $('#box5');
    var box6 = $('#box6');


    // MOUSE DOWN

    box1.mousedown(function(){
        console.log('Mousedown over Box #1');
        socket.emit('down1', 'yes');
    })
    box2.mousedown(function(){
        console.log('Mousedown over Box #2');
        socket.emit('down2', 'yes');
    })
    box3.mousedown(function(){
        console.log('Mousedown over Box #3');
        socket.emit('down3', 'yes');
    })
    box4.mousedown(function(){
        console.log('Mousedown over Box #4');
        socket.emit('down4', 'yes');
    })
    box5.mousedown(function(){
        console.log('Mousedown over Box #5');
        socket.emit('down5', 'yes');
    })
    box6.mousedown(function(){
        console.log('Mousedown over Box #6');
        socket.emit('down6', 'yes');
    })



    socket.on('down1', function(){
        audio1.stop().animate({volume: 0.001}, 1800, function() {
            audio1.toggle('fast', function (){
                audio1.animate({volume: 0.001}); 
            })
        })
        box1.css({'opacity':0});
    })
    socket.on('down2', function(){
        audio2.stop().animate({volume: 0.001}, 1800, function() {
            audio2.toggle('fast', function (){
                audio2.animate({volume: 0.001}); 
            })
        })
        box2.css({'opacity':0});
    })
    socket.on('down3', function(){
        audio3.stop().animate({volume: 0.001}, 1800, function() {
            audio3.toggle('fast', function (){
                audio3.animate({volume: 0.001}); 
            })
        })
        box3.css({'opacity':0});
    })
    socket.on('down4', function(){
        audio4.stop().animate({volume: 0.001}, 1800, function() {
            audio4.toggle('fast', function (){
                audio4.animate({volume: 0.001}); 
            })
        })
        box4.css({'opacity':0});
    })
    socket.on('down5', function(){
        audio5.stop().animate({volume: 0.001}, 1800, function() {
            audio5.toggle('fast', function (){
                audio5.animate({volume: 0.001}); 
            })
        })
        box5.css({'opacity':0});
    })
    socket.on('down6', function(){
        audio6.stop().animate({volume: 0.001}, 1800, function() {
            audio6.toggle('fast', function (){
                audio6.animate({volume: 0.001}); 
            })
        })
        box6.css({'opacity':0});
    })



    // MOUSE UP

    box1.mouseup(function(){
        console.log('Mouseup over Box #1');
        socket.emit('up1', 'yes');
    })
    box2.mouseup(function(){
        console.log('Mouseup over Box #2');
        socket.emit('up2', 'yes');
    })
    box3.mouseup(function(){
        console.log('Mouseup over Box #3');
        socket.emit('up3', 'yes');
    })
    box4.mouseup(function(){
        console.log('Mouseup over Box #4');
        socket.emit('up4', 'yes');
    })
    box5.mouseup(function(){
        console.log('Mouseup over Box #5');
        socket.emit('up5', 'yes');
    })
    box6.mouseup(function(){
        console.log('Mouseup over Box #6');
        socket.emit('up6', 'yes');
    })



    socket.on('up1', function(){
        audio1.stop().animate({volume: 1.0}, 1800, function() {
            audio1.toggle('fast', function (){
                audio1.animate({volume: 1.0}); 
            })
        })
        box1.css({'opacity':0.8});
    })
    socket.on('up2', function(){
        audio2.stop().animate({volume: 1.0}, 1800, function() {
            audio2.toggle('fast', function (){
                audio2.animate({volume: 1.0}); 
            })
        })
        box2.css({'opacity':0.8});
    })
    socket.on('up3', function(){
        audio3.stop().animate({volume: 1.0}, 1800, function() {
            audio3.toggle('fast', function (){
                audio3.animate({volume: 1.0}); 
            })
        })
        box3.css({'opacity':0.8});
    })
    socket.on('up4', function(){
        audio4.stop().animate({volume: 1.0}, 1800, function() {
            audio4.toggle('fast', function (){
                audio4.animate({volume: 1.0}); 
            })
        })
        box4.css({'opacity':0.8});
    })
    socket.on('up5', function(){
        audio5.stop().animate({volume: 1.0}, 1800, function() {
            audio5.toggle('fast', function (){
                audio5.animate({volume: 1.0}); 
            })
        })
        box5.css({'opacity':0.8});
    })
    socket.on('up6', function(){
        audio6.stop().animate({volume: 1.0}, 1800, function() {
            audio6.toggle('fast', function (){
                audio6.animate({volume: 1.0}); 
            })
        })
        box6.css({'opacity':0.8});
    })



    // MOUSE OVER OPACITY CHANGE

    box1.on('mouseover', function(){
        console.log('Mouseover Box #1');
        socket.emit('over1', 'yes');
    })
    box2.on('mouseover', function(){
        console.log('Mouseover Box #2');
        socket.emit('over2', 'yes');
    })
    box3.on('mouseover', function(){
        console.log('Mouseover Box #3');
        socket.emit('over3', 'yes');
    })
    box4.on('mouseover', function(){
        console.log('Mouseover Box #4');
        socket.emit('over4', 'yes');
    })
    box5.on('mouseover', function(){
        console.log('Mouseover Box #5');
        socket.emit('over5', 'yes');
    })
    box6.on('mouseover', function(){
        console.log('Mouseover Box #6');
        socket.emit('over6', 'yes');
    })

    socket.on('over1', function(){
        box1.css({'opacity':1});
    })
    socket.on('over2', function(){
        box2.css({'opacity':1});
    })
    socket.on('over3', function(){
        box3.css({'opacity':1});
    })
    socket.on('over4', function(){
        box4.css({'opacity':1});
    })
    socket.on('over5', function(){
        box5.css({'opacity':1});
    })
    socket.on('over6', function(){
        box6.css({'opacity':1});
    })

    // MOUSE OUT OPACITY CHANGE

    box1.on('mouseout', function(){
        console.log('Mouseout Box #1');
        socket.emit('out1', 'yes');
    })
    box2.on('mouseout', function(){
        console.log('Mouseout Box #2');
        socket.emit('out2', 'yes');
    })
    box3.on('mouseout', function(){
        console.log('Mouseout Box #3');
        socket.emit('out3', 'yes');
    })
    box4.on('mouseout', function(){
        console.log('Mouseout Box #4');
        socket.emit('out4', 'yes');
    })
    box5.on('mouseout', function(){
        console.log('Mouseout Box #5');
        socket.emit('out5', 'yes');
    })
    box6.on('mouseout', function(){
        console.log('Mouseout Box #6');
        socket.emit('out6', 'yes');
    })

    socket.on('out1', function(){
        box1.css({'opacity':0.6});
    })
    socket.on('out2', function(){
        box2.css({'opacity':0.6});
    })
    socket.on('out3', function(){
        box3.css({'opacity':0.6});
    })
    socket.on('out4', function(){
        box4.css({'opacity':0.6});
    })
    socket.on('out5', function(){
        box5.css({'opacity':0.6});
    })
    socket.on('out6', function(){
        box6.css({'opacity':0.6});
    })




    // START MOUSE OVER

    $('.title').on('mouseover', function(){
        console.log('Mouseover start title');
        socket.emit('startover1', 'yes');
    })
    $('.line1').on('mouseover', function(){
        console.log('Mouseover start line #2');
        socket.emit('startover2', 'yes');
    })
    $('.line2').on('mouseover', function(){
        console.log('Mouseover start line #3');
        socket.emit('startover3', 'yes');
    })

    socket.on('startover1', function(){
        $('.title').css({'filter':'blur(0.5px)'});
    })
    socket.on('startover2', function(){
        $('.line1').css({'filter':'blur(0.5px)'});
    })
    socket.on('startover3', function(){
        $('.line2').css({'filter':'blur(0.5px)'});
    })



    // START MOUSE OUT

    $('.title').on('mouseout', function(){
        console.log('Mouseout start title');
        socket.emit('startout1', 'yes');
    })
    $('.line1').on('mouseout', function(){
        console.log('Mouseout start line #2');
        socket.emit('startout2', 'yes');
    })
    $('.line2').on('mouseout', function(){
        console.log('Mouseout start line #3');
        socket.emit('startout3', 'yes');
    })

    socket.on('startout1', function(){
        $('.title').css({'filter':'blur(6px)'});
    })
    socket.on('startout2', function(){
        $('.line1').css({'filter':'blur(6px)'});
    })
    socket.on('startout3', function(){
        $('.line2').css({'filter':'blur(6px)'});
    })

});





