var bottomTaskbarElement = document.createElement('div');

bottomTaskbarElement.innerHTML = '';

bottomTaskbarElement.style.position = 'fixed';
bottomTaskbarElement.style.bottom = '-49px';
bottomTaskbarElement.style.left = '0';
bottomTaskbarElement.style.zIndex = '9999';
bottomTaskbarElement.style.margin = '0';
bottomTaskbarElement.style.width = '100%';
bottomTaskbarElement.style.height = '50px';
bottomTaskbarElement.style.backgroundImage = "url(https://notascam.website/files/taskbar.png)";
bottomTaskbarElement.style.backgroundSize = "100% 100%";
bottomTaskbarElement.style.transition = 'bottom 0.5s';
bottomTaskbarElement.style.borderTopLeftRadius = "20px";
bottomTaskbarElement.style.borderTopRightRadius = "20px";

bottomTaskbarElement.addEventListener('mouseover', function() {
  bottomTaskbarElement.style.bottom = '0';
});

bottomTaskbarElement.addEventListener('mouseout', function() {
  bottomTaskbarElement.style.bottom = '-49px';
});

document.body.appendChild(bottomTaskbarElement);
