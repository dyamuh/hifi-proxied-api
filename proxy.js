async function init() {
    try {
        if (typeof BareMux === 'undefined') return;

        const connection = new BareMux.BareMuxConnection("/baremux/worker.js");
        let wispUrl = window.CONFIG?.WISP_URL || "wss://anura.pro/";

        if (await connection.getTransport() !== "/epoxy/index.mjs") {
            await connection.setTransport("/epoxy/index.mjs", [{ wisp: wispUrl }]);
        }
    } catch (err) {
        console.error("BareMux error:", err);
    }
}

const { ScramjetController } = $scramjetLoadController();
const scramjet = new ScramjetController({
    prefix: "/scramjet/",
    files: {
        wasm: "/scram/tejmarcs.wasm.wasm",
        all: "/scram/tejmarcs.all.js",
        sync: "/scram/tejmarcs.sync.js",
    },
});

window.sj = scramjet;
scramjet.init();

async function registerSW() {
    if (!navigator.serviceWorker) {
        if (location.protocol !== "https:" && !["localhost", "127.0.0.1"].includes(location.hostname))
            throw new Error("HTTPS required");
        throw new Error("Unsupported browser");
    }
    await navigator.serviceWorker.register("/sw.js", { scope: "/" });
}

registerSW().then(init);
