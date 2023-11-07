// import * as keychain from './keychain.json';
const keychain = {
  "api": "Basic base64_generated_api_key_here"
}

// This shows the HTML page in "ui.html".
figma.showUI(__html__, { themeColors: true });

figma.ui.onmessage = (msg) => {
  if (msg.type === "export") {
    console.log(msg);
    figma.currentPage.selection[0] &&
      figma.currentPage.selection[0]
        .exportAsync({
          format: "PNG",
          constraint: { type: "SCALE", value: msg.scale },
        })
        .then((res) => {
          var myHeaders = {
            Authorization:
              keychain.api,
            "Content-Type": "image/png",
          };

          var raw = res;

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };

          fetch(
            "https://corsproxy.io/?https://api.tinify.com/shrink",
            requestOptions
          )
            .then((response) => response.text())
            .then((result) => {
              const url = JSON.parse(result).output.url;
              console.log(url);
              figma.ui.postMessage(url);
              // figma.closePlugin();
            })

            .catch((error) => console.log("error", error));
        });
  }
};
