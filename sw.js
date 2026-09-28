// Retire the former root Goods worker, whose scope covered both test directories.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    await self.registration.unregister();
    const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const client of clients) {
      if (new URL(client.url).pathname === "/collectiontest/") {
        await client.navigate("/collectiontest/");
      }
    }
  })());
});