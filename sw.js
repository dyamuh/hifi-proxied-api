importScripts("/scram/scramjet.all.js");
const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

let configPromise = scramjet.loadConfig();

self.addEventListener("install", () => {
    self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
    if (!event.request.url.startsWith("http")) return;

    event.respondWith(
        (async () => {
            try {
                await configPromise.catch(() => {
                    configPromise = scramjet.loadConfig();
                    return configPromise;
                });

                if (scramjet.route(event)) {
                    const response = await scramjet.fetch(event);
                    if (response) return response;
                }
            } catch (e) {
                console.error(e);
            }

            return fetch(event.request);
        })()
    );
});
