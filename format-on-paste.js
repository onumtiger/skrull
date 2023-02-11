document.addEventListener("paste", function (event) {
  event.preventDefault();
  navigator.clipboard.readText().then((clipText) => {
    try {
      if (isValidJson(clipText)) {
        console.log("Clipboard already contains a valid JSON object.");
        return;
      }
    } catch (e) {
      console.error("Clipboard does not contain a valid JSON object.");
      return;
    }
    try {
      const jsonFormat = JSON.stringify(eval("(" + clipText + ")"), null, 2);

      navigator.clipboard.writeText(jsonFormat).then(function () {
        if (jsonFormat) {
          const finalText =
            "\n\n⬆️Delete Above\n Converted JSON ⬇️\n\n" + jsonFormat;
          document.activeElement.value = finalText;
        }
      });
    } catch (e) {
      console.error("Clipboard does not contain a valid JSON object.");
    }
  });
});

function isValidJson(jsonString) {
  try {
    const parsedObject = JSON.parse(jsonString);
    return typeof parsedObject === "object" && !Array.isArray(parsedObject);
  } catch (e) {
    return false;
  }
}
