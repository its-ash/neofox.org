const styles = [
  'background: linear-gradient(90deg, rgba(255,0,104,1) 0%, rgba(255,0,185,1) 100%)',
  'color: white',
  'display: block',
  'font-size: 40px',
  'text-align: center',
  'font-weight: bold'
].join(';');


function neofoxLog() {
  setInterval(() => {
    setTimeout(() => {
      console.clear();
      console.log("%c NEOFOX COPYRIGHT", styles);
    });
  }, 2000);
}


exports.bootstrap = function () {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
  // setTimeout(()=>neofoxLog());

}

