document.addEventListener("paste", handleKeyboardEvent);
document.addEventListener("keydown", handleKeyboardEvent);

function handleKeyboardEvent(event) {
  const cmdV = event.type === "paste";
  const cmdF = event.code === "KeyF" && event.metaKey;
  const cmdShiftV = event.code === "KeyV" && event.metaKey && event.shiftKey;

  if (cmdV || cmdF || cmdShiftV) {
    event.preventDefault();
    navigator.clipboard.readText().then((clipText) => {
      if (continueFormatting(clipText)) {
        transformClipboard(document, navigator, clipText, cmdV);
      }
    });
  }
}

function continueFormatting(clipText) {
  try {
    if (isValidJson(clipText)) {
      console.log("Clipboard already contains a valid JSON object.");
      return false;
    }
    return true;
  } catch (e) {
    console.error("Clipboard does not contain a valid JSON object.");
    return false;
  }
}

function isValidJson(jsonString) {
  try {
    const parsedObject = JSON.parse(jsonString);
    return typeof parsedObject === "object" && !Array.isArray(parsedObject);
  } catch (e) {
    return false;
  }
}

function transformClipboard(document, navigator, clipText, isPasteEvent) {
  try {
    const jsonFormat = JSON.stringify(eval("(" + clipText + ")"), null, 2);

    navigator.clipboard.writeText(jsonFormat).then(function () {
      if (jsonFormat) {
        const finalText = isPasteEvent
          ? "\n\n⬆️Delete Above\n Converted JSON ⬇️\n\n" + jsonFormat
          : jsonFormat;
        document.activeElement.value = finalText;
      }
    });
  } catch (e) {
    console.error("Clipboard does not contain a valid JSON object.");
  }
}
