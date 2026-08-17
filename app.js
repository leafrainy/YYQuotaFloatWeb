fetch("/latest.json")
  .then((r) => r.json())
  .then((data) => {
    const el = document.getElementById("version");
    if (el && data.version && data.build) {
      el.textContent = `v${data.version} · ${data.build}`;
    }
  })
  .catch(() => {});
