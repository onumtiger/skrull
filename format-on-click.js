chrome.browserAction.onClicked.addListener(function () {
  chrome.tabs.executeScript({
    code: `
        navigator.clipboard.readText()
        .then((clipText) => {
            try {
                const jsonFormat = JSON.stringify(eval("(" + clipText + ")"), null, 2);
                navigator.clipboard.writeText(jsonFormat)
                .then(() => {
                    console.log("JSON object copied to clipboard.");
                    showNotification('Object successfully converted and copied to clipboard.', '#5E98C0');
                });
            } catch (error) {
                showNotification('Clipboard does not contain a valid JSON object.', '#C20831');
            }
        });

        function showNotification(message, color) {
           const notification = document.createElement('div');
            notification.textContent = message;
            notification.style.cssText = 
            'position: fixed;\
            top: 50%;\
            left: 50%;\
            transform: translate(-50%, -50%);\
            background: ' + color + ';\
            color: #fff;\
            border-radius: 5px;\
            padding: 10px;\
            font-family: Arial;\
            font-size: 16px;\
            text-align: center;\
            z-index: 9999;\
            transition: opacity 0.5s ease-in-out;';
            document.body.appendChild(notification);

            setTimeout(() => {
                notification.style.opacity = '1';
            }, 100);

            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 500);
            }, 2000);
        }
        `,
  });
});
