function loadPage(mdFile) {
  fetch(mdFile)
    .then(res => res.text())
    .then(text => {
      document.getElementById("content").innerHTML = marked.parse(text);
      document.getElementById("return-home").classList.remove("hidden");
    })
    .catch(() => {
      document.getElementById("content").innerHTML = "<p class='text-red-600'>Error loading content.</p>";
    });
}

function returnHome() {
  document.getElementById("content").innerHTML = `
    <h2>Welcome!</h2>
    <p>Select a section above to learn more about me.</p>
  `;
  document.getElementById("return-home").classList.add("hidden");
}
