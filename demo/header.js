// HEADER - USE lowercase FOR ALL OPTIONS



// GRAPHIC AND TEXT LOGO

var logotext	= "YOUR WEBSITE TITLE"	// TEXT LOGO TEXT
var logotype	= "text"		// LOGO TYPE | graphic | text |
var logoalign	= "center"		// LOGO ALIGN | left | center | right |
var logolink	= "index.html"		// LINK FOR LOGO



// SHOW ICONS - | yes | no | (Edit links below) DO NOT USE MORE THAN 6 ICONS

var facebookSH	= "yes"		// FACEBOOK
var twitterSH	= "yes"		// TWITTER
var linkedinSH	= "no"		// LINKEDIN
var slideshowSH	= "no"		// SLIDESHOW
var pdfSH	= "yes"		// PDF
var videoSH	= "yes"		// VIDEO
var locationSH	= "no"		// LOCATION
var nonmobileSH	= "no"		// NON-MOBILE SITE LINK
var searchSH	= "no"		// SEARCH
var helpSH	= "yes"		// HELP
var contactSH	= "yes"		// CONTACT
var homeSH	= "yes"		// HOME
var iconcolor	= "white"	// ICON COLOR | black | white |



// COPYRIGHT 2020 � Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law


// START HEADER BAR
document.write('<div class="printhide"><div class="headerbar-color"><div class="headerbar">');





// START CLICK MENU
document.write('<div id="menu-box">');
document.write('<div id="menu-top">');

document.write('<a href="javascript:toggleDiv(\'menu-sub\');"><img src="header-icons/menu-icon-'+iconcolor+'.png" width="75" height="50" class="menu-icon" alt="Open Menu"></a>');

document.write('</div>');

document.write('<div id="menu-sub" class="menu2col">');

// START MENU LINKS - COPY & PASTE TO ADD A LINK ---

document.write('<a href="index.html" class="menu">Home</a>');

document.write('<a href="about.htm" class="menu">About</a>');

document.write('<a href="services.htm" class="menu">Services</a>');

document.write('<a href="news.htm" class="menu">News</a>');

document.write('<a href="PDFgallery.htm" class="menu">PDF Downloads</a>');

document.write('<a href="video-home.htm" class="menu">Video</a>');

document.write('<a href="site_map.htm" class="menu">Site Map</a>');

document.write('<a href="contact.htm" class="menu">Contact</a>');

// END MENU LINKS ---

document.write('<div class="floatclear">&nbsp;<br></div>');
document.write('</div>');
document.write('</div>');
// END CLICK MENU





// START HEADER ICONS -- EDIT LINKS IN THIS AREA -- TURN ON/OFF ABOVE
document.write('<div class="header-icon-box">');

// Sunday Lineup
if (facebookSH == "yes") {
   document.write('<div class="headericon text-ment">');
   document.write('<a href="Chords.htm">Sunday Lineup</a>');
   document.write('</div>');
   }

// song finder
if (facebookSH == "yes") {
   document.write('<div class="headericon text-ment">');
   document.write('<a href="PDFgallery.htm">Song Finder</a>');
   document.write('</div>');
   }


// FACEBOOK
   if (facebookSH == "yes") {
document.write('<div class="headericon">');
document.write('<a href="https://www.facebook.com/" target="_blank"><img src="header-icons/social_facebook-'+iconcolor+'.png" width="36" height="36" alt="Connect on Facebook"></a>');
document.write('</div>');
}


// TWITTER
   if (twitterSH == "yes") {
document.write('<div class="headericon">');
document.write('<a href="https://twitter.com/" target="_blank"><img src="header-icons/social_twitter-'+iconcolor+'.png" width="36" height="36" alt="Follow us on twitter"></a>');
document.write('</div>');
}


// LINKEDIN
   if (linkedinSH == "yes") {
document.write('<div class="headericon">');
document.write('<a href="https://www.linkedin.com/" target="_blank"><img src="header-icons/social_linkedin-'+iconcolor+'.png" width="36" height="36" alt="Connect on LinkedIn"></a>');
document.write('</div>');
}


// NON-MOBILE
   if (nonmobileSH == "yes") {
document.write('<div class="headericon">');
document.write('<a href="../index.html" target="_top"><img src="header-icons/icon_non-mobile-'+iconcolor+'.png" width="36" height="36" alt="Non-Mobile Version"></a>');
document.write('</div>');
}


// SLIDESHOWS
   if (slideshowSH == "yes") {
document.write('<div class="headericon">');
document.write('<a href="slideshow-home.htm" target="_top"><img src="header-icons/icon_slideshow-'+iconcolor+'.png" width="36" height="36" alt="Photos"></a>');
document.write('</div>');
}


// PDFS
   if (pdfSH == "yes") {
document.write('<div class="headericon hidemobile">');
document.write('<a href="PDFgallery.htm" target="_top"><img src="header-icons/icon_pdf-'+iconcolor+'.png" width="36" height="36" alt="PDFs"></a>');
document.write('</div>');
}


// VIDEO
   if (videoSH == "yes") {
document.write('<div class="headericon">');
document.write('<a href="video-home.htm" target="_top"><img src="header-icons/icon_video-'+iconcolor+'.png" width="36" height="36" alt="Video"></a>');
document.write('</div>');
}


// LOCATION
   if (locationSH == "yes") {
document.write('<div class="headericon">');
document.write('<a href="contact.htm" target="_top"><img src="header-icons/icon_location-'+iconcolor+'.png" width="36" height="36" alt="Location"></a>');
document.write('</div>');
}


// SEARCH
   if (searchSH == "yes") {
document.write('<div class="headericon hidemobile">');
document.write('<a href="site_map.htm" target="_top"><img src="header-icons/icon_search-'+iconcolor+'.png" width="36" height="36" alt="Search"></a>');
document.write('</div>');
}


// HELP SITE MAP
   if (helpSH == "yes") {
document.write('<div class="headericon">');
document.write('<a href="site_map.htm" target="_top"><img src="header-icons/icon_help-'+iconcolor+'.png" width="36" height="36" alt="Help"></a>');
document.write('</div>');
}


// CONTACT
   if (contactSH == "yes") {
document.write('<div class="headericon">');
document.write('<a href="contact.htm" target="_top"><img src="header-icons/icon_contact-'+iconcolor+'.png" width="36" height="36" alt="Contact Us"></a>');
document.write('</div>');
}


// HOME
   if (homeSH == "yes") {
document.write('<div class="headericon">');
document.write('<a href="index.html" target="_top"><img src="header-icons/icon_home-'+iconcolor+'.png" width="36" height="36" alt="Home"></a>');
document.write('</div>');
}



document.write('</div>');
// END HEADER ICONS

document.write('</div></div></div>');
// END HEADER BAR

// CLEAR FLOATS
document.write('<div class="floatclear">&nbsp;<br></div>');





// START GRAPHIC & TEXT LOGO

document.write('<div id="headerdiv" class="headercolor td-'+logoalign+' '+logoalign+'-div td-middle">');
   if (logotype == "graphic") {
document.write('<a href="'+logolink+'"><img src="picts/logo.jpg" class="logo-respond '+logoalign+'-div"></a>');
}
   if (logotype == "text") {
document.write('<div OnSelectStart=\'return false;\' class="td-'+logoalign+' '+logoalign+'-div textlogo"><a href="'+logolink+'">'+logotext+'</a></div>');
}
document.write('</div>');



