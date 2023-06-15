// Select all elements with the class "thumbnail" and store them in the "thumbnails" variable
const thumbnails = document.querySelectorAll(".thumbnail");
// Select the element with the class "modal-container" and store it in the "modalContainer" variable
const modalContainer = document.querySelector(".modal-container");
// Select the element with the class "video-iframe" and store it in the "videoIframe" variable
const videoIframe = document.querySelector(".video-iframe");
// Select the element with the class "close-button" and store it in the "closeButton" variable
const closeButton = document.querySelector(".close-button");

// Attach a click event listener to each thumbnail element
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    // Get the data-id attribute value from the clicked thumbnail
    const videoId = thumbnail.dataset.id;

    // Construct the YouTube embed URL using the videoId
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;

    // Set the src attribute of the videoIframe to the constructed videoUrl
    videoIframe.src = videoUrl;

    // Set the display style of the modalContainer to "flex" to show the modal
    modalContainer.style.display = "flex";
  });
});

// Attach a click event listener to the closeButton
closeButton.addEventListener("click", () => {
  // Clear the src attribute of the videoIframe to stop the video
  videoIframe.src = "";

  // Set the display style of the modalContainer to "none" to hide the modal
  modalContainer.style.display = "none";
});
