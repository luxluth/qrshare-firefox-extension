var qr;
var title;
var qr_container = document.getElementById("qr");
var input = document.getElementById("qr_text");
var copy_button = document.querySelector(".copy_image");
var download_button = document.querySelector(".down_image");
var error_container = document.querySelector(".error");

function getQrComponnet(text, change_input = true) {
  if (change_input) {
    input.value = text;
  }
  qr = new QRious({
    element: qr_container,
    value: text,
    size: 250,
  });
}

function slugify(text) {
  return text
    .replace(/\W+/g, "-")
    .toLowerCase()
    .replace(/-$/, "")
    .replace(/^-/, "");
}

try {
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    title = tab.title;
    getQrComponnet(url);
  });

  input.focus();

  input.addEventListener("keyup", (e) => {
    var text = e.target.value;
    getQrComponnet(text, false);
  });

  copy_button.addEventListener("click", async (_e) => {
    const img = qr.toDataURL("image/png");

    try {
      const blob = await fetch(img).then((response) => response.blob());

      // need to enable dom.events.asyncClipboard.clipboardItem in about:config for this to work
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);

      console.log("Image copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy image to clipboard", err);
      error_container.innerText =
        "Unable to copy image to clipboard\n Please be sure to enable\ndom.events.asyncClipboard.clipboardItem\nin about:config";
    }
  });

  download_button.addEventListener("click", async (_e) => {
    const img = qr.toDataURL("image/png");
    var a = document.createElement("a");
    a.href = img;
    a.download = title
      ? slugify(title) + "-qr-code.png"
      : "qr-code" + Date.now() + ".png";
    a.click();
  });
} catch {}
