var i=1;
            function changeImg(val)
            {
                i=val;
                if(i==1)
                    {
                        var img1=document.getElementById("img1");
                        var main=document.getElementById("main");
                        main.src="Images/a1.jfif";
                    }
               else if(i==2)
                    {                
                        var img2=document.getElementById("img2");
                        var main=document.getElementById("main");
                        main.src="Images/asp1.jpg";
                    }
                else if(i==3)
                    {
                        var img3=document.getElementById("img3");
                        var main=document.getElementById("main");
                        main.src="Images/py1.jpg";
                    }
                 else if(i==4)
                    {
                        var img4=document.getElementById("img4");
                        var main=document.getElementById("main");
                        main.src="Images/ch1.jpg";
                    }
                 else if(i==5)
                    {
                        var img5=document.getElementById("img5");
                        var main=document.getElementById("main");
                        main.src="Images/cp1.jpg";
                    }
                 else if(i==6)
                    {
                        var img6=document.getElementById("img6");
                        var main=document.getElementById("main");
                        main.src="Images/r1.png";
                    }
                else if(i==7)
                    {
                        var img7=document.getElementById("img7");
                        var main=document.getElementById("main");
                        main.src="Images/j1.jpg";
                    }
                else if(i==8)
                    {
                        var img8=document.getElementById("img8");
                        var main=document.getElementById("main");
                        main.src="Images/n1.png";
                    }
                else if(i==9)
                    {
                        var img9=document.getElementById("img9");
                        var main=document.getElementById("main");
                        main.src="Images/ph1.png";
                    }
                else if(i==10)
                    {
                        var img10=document.getElementById("img10");
                        var main=document.getElementById("main");
                        main.src="Images/c1.jpg";
                    }
            }
                function nxtImg()
                {
                    i=i+1;
                    if(i>10)
                        {
                            i=1;
                            
                        }
                    changeImg(i);
                }
                
                function prevImg()
                {
                    i=i-1;
                    if(i<1)
                        {
                            i=10;
                            
                        }
                    changeImg(i);
                }
            function exit()
            {
                window.open("Thanks.html","_self");
            }