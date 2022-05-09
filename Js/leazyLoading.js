let tiles = document.querySelectorAll('.tile');

if ('IntersectionObserver' in window) {
  // IntersectionObserver Supported
  let config = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
      };

  let observer = new IntersectionObserver(onChange, config);
  tiles.forEach(tile => observer.observe(tile));

  function onChange(changes, observer) {
    changes.forEach(change => {
      if (change.intersectionRatio > 0) {
        // Stop watching and load the tile
        loadTile(change.target);
        observer.unobserve(change.target);
      }
    });
  }

} else {
  // IntersectionObserver NOT Supported
  tiles.forEach(tile => loadTile(tile));
}

function loadTile(tile) {
  tile.classList.add('fade-in');
}