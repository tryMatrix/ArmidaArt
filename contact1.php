<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Contact us </title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="css/style1.css">  
    </head>
    <body>
        <section class="contact">
            <div class="content">
            <h2> Contact us </h2>
            <p> Ne kete faqe ju lutem na pyesni ne qoftese keni ndonje paqartesi ose jeni te interesuar
                 per te bere nje porosi. Ne do ju pergjigjemi sa me shpejt </p>
            </div>
            <div class="container">
                <div class="contactInfo">
                    <div class="box">
                        <div class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                            <div class="text">
                                <h3>Address</h3>
                                <p> 1000  Myslym Shyri, <br> Tirane,<br> 55060</p>
                            </div>
                        </div> 
                        <div class="box">
                            <div class="icon"> <i class="fa fa-phone" aria-hidden="true"></i></div>
                                <div class="text">
                                    <h3>Phone</h3>
                                    <p> 0681234567</p>
                                </div>
                            </div> 
                            <div class="box">
                                <div class="icon"> <i class="fa fa-envelope" aria-hidden="true"></i></div>
                                    <div class="text">
                                        <h3>Email</h3>
                                        <p> lanicuni1@gmail.com</p>
                                    </div>
                            </div> 
                </div>
                <div class="contactForm">
                    <form id="contactForm" method="post" action="php/contact-form.php">
                        <h2>Send Message</h2>
                        <div class="inputBox">
                            <input type ="text" name="name" class="form-control" required="required">
                            <span>Full Name</span>
                        </div>
                        <div class="inputBox">
                            <input type ="email" name="email" class="form-control" required="required">
                            <span>Email</span>
                        </div>
                        <div class="inputBox">
                        <textarea type="text" name="message" class="form-control" required=""> </textarea>
                            <span>Type your Message...</span>
                        </div>
                        <div class="inputBox">
                            <input type="submit" name="" class="form-controll submit" value="Send">
                        </div>
                    </form>
                </div>
            </div>
        </section>

    </body>
</html>
