<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from html.thimpress.com/hotelwp/contact.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 10 Oct 2018 09:21:02 GMT -->
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Club Extensive</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Favicons -->
    <link rel="shortcut icon" href="images/icons/favicon.png">

    <!-- REVOLUTION STYLE SHEETS -->
    <link rel="stylesheet" href="css/style.css"><!-- Style -->

</head>
<body class="page">
<div id="preloading">
        <img class="logo" src="images/logo3.png" alt="" style="max-width: 50%;">
</div>
<!-- Wrapper content -->
<div id="wrapper-container" class="content-pusher">
    <div class="overlay-close-menu"></div>

    <!-- Header -->
    <?php include 'header.php';?>
    <!-- Mobile menu -->
   <!-- nav.mobile-menu-container -->

    <!-- Main Content -->
    <div id="main-content">
        <div class="page-title">
            <div class="page-title-wrapper" data-stellar-background-ratio="0.5">
                <div class="content container">
                    
                    
                </div>
            </div>
        </div>

        <div class="site-content no-padding">
            <div class="page-content">
                <div class="container">
                    <div class="empty-space"></div>
                    <div class="row tm-flex">
                        <div class="col-sm-12">
                            <div class="sc-heading">
                                <p class="first-title">Make</p>
                                <h3 class="second-title">Customise Your Trip</h3>
                                <p class="description">Do you have anything in your mind to tell us? <br>
                                    Fill this form to get help in customising this trip.</p>
                            </div>
                        </div>
                        <div class="col-sm-2"></div>
                        <div class="col-sm-8">
                            

                            <div class="sc-contact-form">
                                <form action="#" id="ajaxform" method="post">
                                    <input type="text" name="your-name" required placeholder="Your name*">
                                    <input type="email" name="your-email" required placeholder="Your email*">
                                    <input type="tel" name="your-phone" required placeholder="Your phone*">
                                    <textarea name="your-message" id="your-message" cols="30" rows="10" required placeholder="Your message*"></textarea>
                                    <input type="submit" class="submit" value="Send message">
                                </form>
                            </div>
                        </div>
                        <div class="col-sm-2"></div>
                       
                    </div>

                </div>
               
            </div>
        </div>
    </div>
    <!-- Footer -->
    <?php include 'footer.php';?>
</div><!-- wrapper-container -->




<!-- Scripts -->
<script src="js/libs/jquery.min.js"></script><!-- jQuery -->
<script src="js/libs/stellar.min.js"></script><!-- parallax -->


<script src="js/libs/bootstrap.min.js"></script><!-- Bootstrap -->
<script src="js/libs/smoothscroll.min.js"></script><!-- smoothscroll -->
<script src="js/libs/owl.carousel.min.js"></script><!-- Owl Carousel -->
<script src="js/libs/jquery.magnific-popup.min.js"></script><!-- Magnific Popup -->
<script src="js/libs/theia-sticky-sidebar.min.js"></script><!-- Sticky sidebar -->
<script src="js/libs/counter-box.min.js"></script><!-- counter -->
<script src="js/libs/moment.min.js"></script><!-- moment -->
<script src="js/libs/jquery-ui.min.js"></script><!-- ui -->
<script src="js/libs/daterangepicker.min.js"></script><!-- date -->
<script src="js/libs/daterangepicker.min-date.min.js"></script><!-- date2 -->
<script src="js/libs/jquery.thim-content-slider.min.js"></script><!-- Slider -->
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDNnrBbNMIqC2x_wTYJNEzHYSrMqQF-YVo&amp;callback=sc_Map">
</script>
<script src="js/theme-customs.js"></script><!-- Theme Custom -->

<!-- Google Map -->
<script>
    // Initialize and add the map
    function sc_Map() {
        // The location of London
        var manutd = {
            lat: -37.8040982,
            lng: 144.9570935
        };
        // The map, centered at London
        var map = new google.maps.Map(
            document.getElementById('google-map'), {zoom: 12, center: manutd});
        // The marker, positioned at London
        var marker = new google.maps.Marker({position: manutd, map: map});
    }
</script>

</body>

<!-- Mirrored from html.thimpress.com/hotelwp/contact.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 10 Oct 2018 09:21:02 GMT -->
</html>