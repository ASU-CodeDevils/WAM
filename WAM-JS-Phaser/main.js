/*
 * Copyright (c) 2016 ASU CodeDevils

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without 
limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial 
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT 
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
var first = true;
var second = false;
var third = false;
var start = true;
var run = true;
var ready = false;
var forsprite = false;
var timer = 0;
var timer2 = 0;
var count = 0;
var count2 = 0;
var randx= 0;
var randy= 0;
var endrandx = 0;
var endrandy =0;
var increasex = 0;
var increasey = 0;
var item1 = true;
var itme2 = true;
var itme3 = true;
var itme4 = true;
var item5 = true;
var wait = false;
var result = true;
var test = true;
var test2 = true;
var testy = true;
var testyfinal = true;
var hitcount = 0;
var struck = false;
var timewait = 0;
var right = true;
var animate = 0;
var sound = true;
var sound2 = true;

var mainState = {
    preload:function(){
        game.load.image('back','Background2.png');
        game.load.image('mallet','CrouqetteMallet1.png');
        game.load.image('pan','FryingPan1.png');
        game.load.image('hammer', 'Hammer1.png');
        game.load.image('hand','Hand1.png');
        game.load.image('leftmole', 'leftMole.png');
        game.load.image('leftrun','LeftRunner2.png');
        game.load.image('leftrun1', 'leftRunnerMole.png');
        game.load.image('lightning','lightening.png');
        game.load.image('hole2','MoleHole1.png');
        game.load.image('hole1','MoleHole2.png');
        game.load.image('rightrun','RightRunner2.png');
        game.load.image('rightmole','rigthMole.png');
        game.load.image('rightrun1','rightRunnerMole.png');
        game.load.image('sungl', 'sunGlassesLeft.png');
        game.load.image('sunr', 'SunGlassesRight.png');
        game.load.image('toyhammer', 'ToyHammer1.png');
        game.load.audio('bclick', 'bclick.wav');
        game.load.audio('chiplaugh', 'chiplaugh.wav');
        game.load.audio('punch','punch.wav');
        game.load.audio('ouch', 'ouch.wav');
        game.load.spritesheet('moleleftjoined', 'moleleftjoined.png',71,40,2);
        game.load.spritesheet('molerightjoined', 'molerightjoined.png',70.5,40,2);
        
    }, 
    create: function(){
        game.stage.backgroundColor='#F5F1DE';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.tileSprite(0,0,960,640,'back');
        this.bclick = game.add.audio('bclick');
        this.laugh = game.add.audio('chiplaugh');
        this.punch = game.add.audio('punch');
        this.ouch = game.add.audio('ouch');
        this.hammer = game.add.sprite(150, 300, 'hammer');
        this.mallet = game.add.sprite(325, 300,'mallet');
        this.runleft = game.add.sprite(0,0,'moleleftjoined');
        this.runright = game.add.sprite(200,0,'molerightjoined');
        this.sungl = game.add.sprite(400,0,'sungl');
        this.sungr = game.add.sprite(500,0,'sunr');
        this.sungl.visible = false;
        this.sungr.visible = false;
        game.physics.arcade.enable(this.sungl);
        game.physics.arcade.enable(this.sungr);
        this.runleft.visible = false;
        this.runright.visible = false;
        this.runr = this.runright.animations.add('runr');
        this.runl = this.runleft.animations.add('runl');
        
        this.runright.animations.play('runr',10,true);
        this.runleft.animations.play('runl',10,true);
       
        this.lightning = game.add.sprite(100,200,'lightning');
        
        this.lightning.anchor.set(.35);
        this.lightning.visible = false;
        this.pan = game.add.sprite(450,300,'pan');
   
        this.hand = game.add.sprite(600,300,'hand');
    
        this.toyhammer = game.add.sprite(750,300,'toyhammer');
        
         
      
        this.hammer.inputEnabled = true;
        this.hammer.input.useHandCursor = true;
        this.mallet.inputEnabled = true;
        this.mallet.input.useHandCursor = true;
        this.pan.inputEnabled = true;
        this.pan.input.useHandCursor = true;
        this.hand.inputEnabled = true;
        this.hand.input.useHandCursor = true;
        this.toyhammer.inputEnabled = true;
        this.toyhammer.input.useHandCursor = true;
        
         
        this.hamsterhole = game.add.sprite(200,400, 'hole1');
        
         
        this.hamsterhole.visible = false;
        this.hamsterhole2=  game.add.sprite(200,400, 'hole2');
         
        
        this.hamsterhole2.visible = false;
        this.hamsterleft = game.add.sprite(0,0,'leftmole');
        
       
        this.hamsterleft.visible = false;
        game.physics.arcade.enable(this.hamsterleft);
        this.hamsterleftr = game.add.sprite(0,0,'leftrun');
        this.hamsterright = game.add.sprite(0,0,'rightmole');
        game.physics.arcade.enable(this.hamsterleftr);
      
         
        
        this.hamsterright.visible = false;
        this.hamsterrightr = game.add.sprite(0,0,'rightrun');
        game.physics.arcade.enable(this.hamsterrightr);
      
        this.hamsterrightr.visible = false;
        this.hamsterrightrr = game.add.sprite(0,0,'rightrun1');
         
        
        this.hamsterrightrr.visible = false;
         
    
        this.hamsterleftrr = game.add.sprite(0,0,'leftrun1');
     
       
        
        this.hamsterleftrr.visible = false;
        this.hamsterleftr.visible = false;
        notetext = game.add.text(380,100, 'Choose your weapon!');
        notetext.fontSize = 22;
        notetext.fill = '#8B4513';
     
        notetext.wordWrap= true;
        notetext.wordWrapWidth = 250;
        this.select;
        
        
        
    }, 
    update: function(){
       
    // pointer is the active pointer, x and y give you the position of the pointer
   // on the canvas so here you can position you custom cursor sprite
        //  If the sprite is > 8px away from the pointer then let's move to it
        //this.hamsterleftr.visible = true;
        //this.hamsterleftrr.visible = true;
        //this.hamsterleft.visible = true;
        //this.hamsterhole.visible = true;
        //this.hamsterhole2.visible = true;
        if(struck)
            {
                
                
                
                first = false;
                second = false;
                third = false;
                test = false;
                ready = false;
                if(animate<40)
                    {
                        animate++;
                        if(right)
                            {
                            this.hamsterright.visible = false;
                            //this.hamsterrightr.visible = false;
                            this.hamsterrightrr.visble = false;
                            this.hamsterrightr.visible = true;
                            
                            this.hamsterrightr.body.velocity.y = -500;
                            var animation = game.add.tween(this.hamsterrightr);
                            this.sungr.visible = true;
                            this.sungr.body.velocity.y = -400;
                            this.sungr.body.velocity.x =500;
                           var ganimation = game.add.tween(this.sungr);
                            ganimation.to({angle:720},-10);
                            animation.to({angle:-600},0);
                            ganimation.start();
                            animation.start();
                            }
                        else 
                            {
                            this.hamsterleft.visible = false;
                            //this.hamsterleftr.visible = false;
                            this.hamsterleftrr.visble = false;
                            this.hamsterleftr.visible = true;
                            this.hamsterleftr.body.velocity.y = -500;
                            var animation = game.add.tween(this.hamsterleftr);
                            animation.to({angle:+600},-10);
                            this.sungl.visible = true;
                            this.sungl.body.velocity.y = -400;
                            this.sungl.body.velocity.x =-500;
                            var ganimation = game.add.tween(this.sungl);
                            ganimation.to({angle:720},0);    
                            ganimation.start();

                            animation.start();
                            }
                        if(animate>5)
                            {
                                this.select.visible = false;
                            }
                        
                    }
                else{
                struck = false;
                this.intromessage();
                this.hamsterleftr.angle = 0;
                this.hamsterrightr.angle = 0;
                this.sungr.visible = false;
                this.sungl.visible = false;
                this.hamsterleftr.body.velocity.y =0;
                this.hamsterrightr.body.velocity.y=0;
                this.hamsterrightr.visible = false;
                this.hamsterleftr.visible = false;
                this.lightning.visible = false;
                    animate = 0;
                    
                }
            }
       if(ready){
         
           if(game.input.activePointer.isDown)
            {
                ready = false;
                if(sound2)
                    {
                    this.punch.play();
                    sound2 = false;
                    }
                this.select.x = game.input.x;
                this.select.y = game.input.y;
                this.select.visible =true; //game.physics.arcade.overlap(this.select,this.hamsterleft, this.hit, null, this);
               if(!right)
               {
                   //game.physics.arcade.overlap(this.select,this.hamsterleftr, this.hit, null, this);
                   //console.log(this.hamsterleftr.getBounds());
                   var pointx = this.runleft.width+this.runleft.x;
                   var pointy = this.runleft.height+this.runleft.y;
                  
                   if(game.input.x>this.runleft.x&&game.input.x<pointx)
                       {
                        
                       
                    if(game.input.y>this.runleft.y&&game.input.y<pointy)
                       {
                            
                           this.hamsterleftr.x = game.input.x;
                           this.hamsterleftr.y = game.input.y;
                           this.sungl.x = game.input.x;
                           this.sungl.y = game.input.y;
                           this.hit();
                           struck = true;
                            if(sound)
                               {
                                this.ouch.play();
                                   sound = false;
                               }
                       }
                    else
                        {
                           if(sound)
                                {
                                this.laugh.play();
                                sound = false;
                                }
                        }
                       }
                   else
                        {
                            if(sound)
                                       {
                                        this.laugh.play();
                                           sound = false;
                                       }
                        }
                   //console.log(this.hamsterleftr.x);
                   //console.log(this.hamsterleftr.y);
                   //console.log(game.input.x,game.input.y);
               }
                else
                    {
                        //game.physics.arcade.overlap(this.select,this.hamsterrightr, this.hit, null, this);
                        //console.log(this.hamsterrightr.getBounds()
                          //         );
                        //console.log(this.hamsterleftr.height);
                   //console.log(this.hamsterleftr.width);
                        
                        var pointx = this.runright.width+this.runright.x;
                   var pointy = this.runright.height+this.runright.y;
                   if(game.input.x>this.runright.x&&game.input.x<pointx)
                       {
                        
                        if(game.input.y>this.runright.y&&game.input.y<pointy)
                       {
                           struck = true;
                           
                           this.hamsterrightr.x = game.input.x;
                           this.hamsterrightr.y = game.input.y;
                           this.sungr.x = game.input.x;
                           this.sungr.y = game.input.y;
                           this.hit();
                           if(sound)
                               {
                                this.ouch.play();
                                   sound = false;
                               }
                       }
                           else
                               {
                                   if(sound)
                                       {
                                        this.laugh.play();
                                           sound = false;
                                       }
                               }
                    }
                    else
                        {
                            if(sound)
                                       {
                                        this.laugh.play();
                                           sound = false;
                                       }
                        }
                    } //game.physics.arcade.overlap(this.select,this.hamsterleftrr, this.hit, null, this);
                //game.physics.arcade.overlap(this.select,this.hamsterright, this.hit, null, this);
                
                //game.physics.arcade.overlap(this.select,this.hamsterrightrr, this.hit, null, this);
           
                //forsprite = true;
            }
        else {
            this.select.visible = false;
            sound = true;
            sound2 = true;
            ready = true;
            //forsprite = false;
        }
        }
        if(start)
            {
                this.selectset();
            }
        if(wait){
            if(this.select.input.pointerOver())
                {
                    if(game.input.activePointer.isDown)
                        {
                            this.select.visible = false;
                           
                            //ready=true;
                        }
                }
            timewait++;
            if(timewait>10)
                {
                     wait = false;
                    test = false;
                }
        }
        if(test)
            {
                return;
            }
       
        if(first){
            timer = game.rnd.realInRange(75,120);
            timer2 = game.rnd.realInRange(50, 100);
            first = false;
            second = true;
            third = true;
            ready = true;
            this.lightning.visible = false;
        }
        else
            {
            count++;
            count2++
            if(timer>count){
               
                
                count2 =0;
            }
            else if( count2 <timer2){
                this.hamsterhole.visible = false;
                second = false;
                third = false;
                this.hamsterleftr
                
            }
            else
                {
                    //test = true;
                    //test = true;
                    first= true;
                    count = 0;
                    count2 = 0;
                }
        }
        if(second){
            randx = game.rnd.realInRange(100,860);
            randy = game.rnd.realInRange(330,550);
            var temp = 0;
            var temp2 = 0;
            if(randx<290){
                temp = 290;
                temp2 = 800;
            }
            else if(randx>670){
                temp = 100;
                temp2 = 670;
            }
            else if(randx>480){
                temp = 50;
                temp2 = randx-250;
                
            }
            else{
                temp = randx+250;
                temp2 = 800;
            }
            endrandx = game.rnd.realInRange(temp,temp2);    
            if(randy<430){
                temp = 430;
                temp2 = 550;
            }
            else if(randy>=430){
                temp = 330;
                temp2 = 430;
            }
            
            endrandy = game.rnd.realInRange(temp,temp2);
            
            increasex =(endrandx-randx)/ (timer-50);
            increasey = (endrandy-randy)/(timer-50);
            increasex = Math.abs(increasex);
            increasey = Math.abs(increasey);
            second = false;
            
        }
        /*console.log('count',count,'timer', timer, 'count2', count2, 'timer2', timer2);
        console.log('randx', randx, 'randy', randy, 'endrandx', endrandx, 'endrandy', endrandy);
        console.log('increasex', increasex, 'increasey', increasey);
        console.log(this.hamsterleftr.x, this.hamsterleftr.y);
        console.log(this.hamsterleftrr.x,this.hamsterleftrr.y);
        console.log(this.hamsterrightr.x, this.hamsterrightr.y);
        console.log(this.hamsterrightrr.x, this.hamsterrightrr.y);*/
        if(third)
            {
            if(endrandx<randx&&endrandy<randy)
                {
                    right = false;
                if(count==0){
                    this.hamsterleftr.x = randx;
                    this.hamsterleftr.y = randy;
                    this.hamsterleftrr.x = randx;
                    this.hamsterleftrr.y = randy;
                    this.hamsterhole.x = randx;
                    this.hamsterhole.y = randy;
                    this.hamsterhole.visible = true;
                }
                else if(count==10){
                    this.hamsterhole.visible = false;
                    this.hamsterhole2.x = randx;
                    this.hamsterhole2.y = randy;
                    this.hamsterhole2.visible = true;
                }
                else if(count==15){
                    this.hamsterhole2.visible = false;
                    this.hamsterleft.x = randx;
                    this.hamsterleft.y = randy;
                    this.hamsterleft.visible = true;
                }
                else if(count==25)
                    {
                    this.hamsterleft.visible = false;
                    this.runleft.x = randx;
                    this.runleft.y = randy;
                    this.runleft.visible = true;
                    }
                else  if(count<timer-25)
                        {
                            
                        this.runleft.x-=increasex;
                        this.runleft.y-=increasey;
                        
                    }
                else if (count< timer-15)
                    {
                        console.log('arewehere');
                        this.runleft.visible = false;
                         
                        this.hamsterleft.x = endrandx;
                        this.hamsterleft.y = endrandy;
                        this.hamsterleft.visible = true;
                    }
                else if(count<timer-10)
                    {
                        this.hamsterleft.visible = false;
                        this.hamsterhole2.x = endrandx;
                        this.hamsterhole2.y = endrandy;
                        this.hamsterhole2.visible = true;
                    }
                else 
                    {
                        this.hamsterhole2.visible = false;
                        this.hamsterhole.x = endrandx;
                        this.hamsterhole.y = endrandy;
                        this.hamsterhole.visible = true;
                    }
                }
            else if(endrandx>randx&&endrandy>randy)
                {
                    right = true;
                if(count==0){
                    this.hamsterrightr.x = randx;
                    this.hamsterrightr.y = randy;
                    this.hamsterrightrr.x = randx;
                    this.hamsterrightrr.y = randy;
                    this.hamsterhole.x = randx;
                    this.hamsterhole.y = randy;
                    this.hamsterhole.visible = true;
                }
                else if(count==10){
                    this.hamsterhole.visible = false;
                    this.hamsterhole2.x = randx;
                    this.hamsterhole2.y = randy;
                    this.hamsterhole2.visible = true;
                }
                else if(count==15){
                    this.hamsterhole2.visible = false;
                    this.hamsterright.x = randx;
                    this.hamsterright.y = randy;
                    this.hamsterright.visible = true;
                }
                else if(count==25)
                    {
                    this.hamsterright.visible = false;
                    this.runright.x= randx;
                    this.runright.y=randy;
                    this.runright.visible = true;
                    }
                    
                else if(count< timer-25)
                        {
                       
                        this.runright.x += increasex;
                        this.runright.y += increasey;
                        
                    
                    }
                else if (count< timer-15)
                    {
                        this.runright.visible = false;
                         
                        this.hamsterright.x = endrandx;
                        this.hamsterright.y = endrandy;
                        this.hamsterright.visible = true;
                    }
                else if(count<timer-10)
                    {
                        this.hamsterright.visible = false;
                        this.hamsterhole2.x = endrandx;
                        this.hamsterhole2.y = endrandy;
                        this.hamsterhole2.visible = true;
                    }
                else 
                    {
                        this.hamsterhole2.visible = false;
                        this.hamsterhole.x = endrandx;
                        this.hamsterhole.y = endrandy;
                        this.hamsterhole.visible = true;
                    }
                }
            else if(endrandx<randx&&endrandy>randy)
                 {
                     right = false;
                if(count==0){
                    this.hamsterleftr.x = randx;
                    this.hamsterleftr.y = randy;
                    this.hamsterleftrr.x = randx;
                    this.hamsterleftrr.y = randy;
                    this.hamsterhole.x = randx;
                    this.hamsterhole.y = randy;
                    this.hamsterhole.visible = true;
                }
                else if(count==10){
                    this.hamsterhole.visible = false;
                    this.hamsterhole2.x = randx;
                    this.hamsterhole2.y = randy;
                    this.hamsterhole2.visible = true;
                }
                else if(count==15){
                    this.hamsterhole2.visible = false;
                    this.hamsterleft.x = randx;
                    this.hamsterleft.y = randy;
                    this.hamsterleft.visible = true;
                }
                else if(count==25)
                    {
                    this.hamsterleft.visible = false;
                    this.runleft.x = randx;
                    this.runleft.y = randy;
                    this.runleft.visible = true;
                    }
                    
                else if(count <timer-25)
                        {
                         
                        this.runleft.x -= increasex;
                        this.runleft.y += increasey;
                    }
                else if (count< timer-15)
                    {
                        this.runleft.visible = false;
                        
                        this.hamsterleft.x = endrandx;
                        this.hamsterleft.y = endrandy;
                        this.hamsterleft.visible = true;
                    }
                else if(count<timer-10)
                    {
                        this.hamsterleft.visible = false;
                        this.hamsterhole2.x = endrandx;
                        this.hamsterhole2.y = endrandy;
                        this.hamsterhole2.visible = true;
                    }
                else 
                    {
                        this.hamsterhole2.visible = false;
                        this.hamsterhole.x = endrandx;
                        this.hamsterhole.y = endrandy;
                        this.hamsterhole.visible = true;
                    }
                }
            else if(endrandx>randx&&endrandy<randy)
                {
                    right = true;
                if(count==0){
                    this.hamsterrightr.x = randx;
                    this.hamsterrightr.y = randy;
                    this.hamsterrightrr.x = randx;
                    this.hamsterrightrr.y = randy;
                    this.hamsterhole.x = randx;
                    this.hamsterhole.y = randy;
                    this.hamsterhole.visible = true;
                }
                else if(count==10){
                    this.hamsterhole.visible = false;
                    this.hamsterhole2.x = randx;
                    this.hamsterhole2.y = randy;
                    this.hamsterhole2.visible = true;
                }
                else if(count==15){
                    this.hamsterhole2.visible = false;
                    this.hamsterright.x = randx;
                    this.hamsterright.y = randy;
                    this.hamsterright.visible = true;
                }
                else if(count==25)
                    {
                        this.hamsterright.visible = false;
                        this.runright.x = randx;
                        this.runright.y = randy;
                        this.runright.visible = true;
                    }
                    
                else if(count< timer-25)
                        {
                       
                        this.runright.x += increasex;
                        this.runright.y -= increasey;
                       
                    }
                else if (count< timer-15)
                    {
                        this.runright.visible = false;
                         
                        this.hamsterright.x = endrandx;
                        this.hamsterright.y = endrandy;
                        this.hamsterright.visible = true;
                    }
                else if(count<timer-10)
                    {
                        this.hamsterright.visible = false;
                        this.hamsterhole2.x = endrandx;
                        this.hamsterhole2.y = endrandy;
                        this.hamsterhole2.visible = true;
                    }
                else 
                    {
                        this.hamsterhole2.visible = false;
                        this.hamsterhole.x = endrandx;
                        this.hamsterhole.y = endrandy;
                        this.hamsterhole.visible = true;
                    }
                }
            }
         
    },
    selectset: function(){
        if(this.hammer.input.pointerOver())
		{
    		
			if(game.input.activePointer.isDown)
				{
				console.log('hammer');
				if(item1)
					{
					this.select = this.hammer;
					this.bclick.play();
					item1=false;
                    start = false;
                    //test = false;
                    this.hammer.visible = false;
                    this.pan.visible = false;
                    this.mallet.visible = false;
                    this.hand.visible = false;
                    this.toyhammer.visible = false;
                    this.select.visible = true;
					this.intromessage();
                    this.select.anchor.set(0.35);
					}
			}
            else{
                item1 = true;
            }
        }
       
         else if(this.pan.input.pointerOver())
		{
    		
			if(game.input.activePointer.isDown)
				{
				console.log('pan');
				if(item1)
					{
					this.select = this.pan;
					this.bclick.play();
					item1=false;
                    start = false;
                    //test = false;
                    this.hammer.visible = false;
                    this.pan.visible = false;
                    this.mallet.visible = false;
                    this.hand.visible = false;
                    this.toyhammer.visible = false;
                    this.select.visible = true;
					this.intromessage();
                         this.select.anchor.set(0.35);
					}
			}
			else
		  {
			item1 =true;
			 
		  }
				
		}
		 else if(this.hand.input.pointerOver())
		{
    		
			if(game.input.activePointer.isDown)
				{
				console.log('hand');
				if(item1)
					{
					this.select = this.hand;
					this.bclick.play();
					item1=false;
                    start = false;
                    //test = false;
                    this.hammer.visible = false;
                    this.pan.visible = false;
                    this.mallet.visible = false;
                    this.hand.visible = false;
                    this.toyhammer.visible = false;
                    this.select.visible = true;
					this.intromessage();
                         this.select.anchor.set(0.35);
					}
			}
			else
		  {
			item1 =true;
			 
		  }
				
		}
         else if(this.mallet.input.pointerOver())
		{
    		
			if(game.input.activePointer.isDown)
				{
				console.log('mallet');
				if(item1)
					{
					this.select = this.mallet;
					this.bclick.play();
					item1=false;
                    start = false;
                    //test = false;
                    this.hammer.visible = false;
                    this.pan.visible = false;
                    this.mallet.visible = false;
                    this.hand.visible = false;
                    this.toyhammer.visible = false;
                    this.select.visible = true;
					this.intromessage();
                        this.select.anchor.set(0.35);
					}
			}
			else
		  {
			item1 =true;
			 
		  }
				
		}
         else if(this.toyhammer.input.pointerOver())
		{
    		
			if(game.input.activePointer.isDown)
				{
				console.log('toyhammer');
				if(item1)
					{
					this.select = this.toyhammer;
					this.bclick.play();
					item1=false;
                    start = false;
                    //test = false;
                    this.hammer.visible = false;
                    this.pan.visible = false;
                    this.mallet.visible = false;
                    this.hand.visible = false;
                    this.toyhammer.visible = false;
                    this.select.visible = true;
					this.intromessage();
                         this.select.anchor.set(0.35);
					}
			}
			else
		  {
			item1 =true;
			 
		  }
				
		}
        
        
    
    },
    intromessage: function()
    {
        notetext.setText("You've chosen wisely! You must hit the moles! Total hits: " +hitcount);
        wait = true;
        //ready = true;
    },
    hit: function()
    {
                        hitcount++;
                        console.log(hitcount);
                        //this.select.visible = false;
                        test = true;
                        this.lightning.x = game.input.x;
                        this.lightning.y = game.input.y;
                        this.lightning.visible = true;
                        struck = true;
                        this.runleft.visible = false;
                        this.runright.visible = false;
    }
   
 

};

var game = new Phaser.Game(960,640);

game.state.add('main',mainState);
game.state.start('main');
 