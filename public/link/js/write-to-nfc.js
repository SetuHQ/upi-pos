var ChromeSamples = {
    log: function () {
        var line = Array.prototype.slice
            .call(arguments)
            .map(function (argument) {
                return typeof argument === "string"
                    ? argument
                    : JSON.stringify(argument);
            })
            .join(" ");
        document.querySelector("#log").textContent += line + "\n";
    },
};

log = ChromeSamples.log;

const onStart = async () => {
    try {
        const ndef = new NDEFReader();
        await ndef.scan();
        console.log("Scan started");
        log("> Scan started");
        ndef.addEventListener("reading", ({ message, serialNumber }) => {
            log(`> Serial Number: ${serialNumber}`);
            log(`> Tag detected`);
        });
    } catch (error) {
        log("Argh! from scanning the tag " + error);
    }
};

const nfcWrite = async () => {
    console.log("Write clicked");
    console.log(url);
    try {
        const ndef = new NDEFReader();
        document.getElementById("writeButton").innerText = "Writing to tag...";
        await ndef.write({
            records: [{ recordType: "url", data: url }],
        });
        log("> Message written");
        document.getElementById("writeButton").innerText = "Write to NFC tag";
    } catch (error) {
        log("Argh! from writing to the tag " + error);
    }
};

console.log("Script initialised");

onStart();

if (!("NDEFReader" in window)) {
    console.log("No NFC reader available");
    log("Web NFC is not available. Use Chrome on Android.");
}
