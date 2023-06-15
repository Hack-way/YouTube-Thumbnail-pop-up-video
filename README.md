# YouTube Thumbnail pop up video

This code creates a modal window that displays a YouTube video when a thumbnail is clicked. The modal window has a close button that closes the window when clicked.

## Here is a more detailed explanation of the code:

1) The thumbnails variable is an array of all the thumbnail elements on the page.
2) The modalContainer variable is a reference to the modal-container element on the page.
3) The videoIframe variable is a reference to the video-iframe element on the page.
4) The closeButton variable is a reference to the close-button element on the page.
5) The thumbnails.forEach() loop iterates through the thumbnails array and adds an event listener to each thumbnail element.
6) The event listener for each thumbnail element is a function that gets the video ID from the dataset.id property of the thumbnail element and then sets the src property of the videoIframe element to the YouTube embed URL for the video ID.
7) The videoIframe element then displays the YouTube video.
8) The closeButton event listener sets the src property of the videoIframe element to an empty string and then sets the display property of the modalContainer element to none.

### Live Domo || YouTube Thumbnail pop up video.
The link <a href="https://codepen.io/hackway/pen/eYLbeVW" target=”_blank” >https://codepen.io/hackway/pen/eYLbeVW</a>

YouTube channel my Handle is @Hackway I hope this helps! Let me know if you have any other questions.

