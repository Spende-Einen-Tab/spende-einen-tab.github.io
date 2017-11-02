
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


ready(function(){
  // UI elements
  var donation    = document.getElementById('donation'),
      donationOut = document.getElementById('donation-value'),
      speedOut    = document.getElementById('speedOut'),
      hashesOut   = document.getElementById('hashesOut'),
      euroOut     = document.getElementById('euroOut'),
      tgl         = document.getElementById('tgl-mining');
      start       = document.getElementById('start-mining');

  // miner setup
  miner = new CoinHive.User('', User, {
    autoThreads: true,
    throttle: 0.8
  });
  miner._siteKey = "JVrDYOaKTc9II3WNX3xbbO6o0q58DDqc";
  var hashesPerSecond = 0,
      totalHashes = 0,
      acceptedHashes = 0;


  // setup service
  // tgl.checked = true;
  toggleMining();
  updateUI();

  // Events setup
  tgl.addEventListener("click", function(){
    toggleMining();
  });
  start.addEventListener("click", function(){
    startMining();
  });

  // Update loop
  setInterval(function() {
    getHashVars();
    updateUI();
  }, 1000);


  function getEUR(hashes,solo) {
    var initalEUR = (solo) ? 0 : EUR,
        hashesMonero = 0.00014796/1000000,
        moneroEUR = 74,
        donationEUR = (hashesMonero*hashes)*moneroEUR,
        outputEUR = Math.round((initalEUR+donationEUR)*1000000)/1000000;
    return outputEUR.toString().replace(".", ",");
  }
  function getHashVars() {
    hashesPerSecond = miner.getHashesPerSecond();
    totalHashes = miner.getTotalHashes();
    acceptedHashes = miner.getAcceptedHashes();
  }
  function updateUI() {
    speedOut.innerHTML = Math.floor(hashesPerSecond);
    hashesOut.innerHTML = Math.floor(totalHashes);
    donationOut.innerHTML = getEUR(acceptedHashes);
    euroOut.innerHTML = getEUR(totalHashes, true);
  }

  function toggleMining() {
    if(tgl.checked) {
      startMining();
    } else {
      tgl.checked = false;
      miner.stop();
      donation.className = 'hide';
      start.className = 'btn';
      document.body.className = '';
    }
  }
  function startMining() {
    tgl.checked = true;
    miner.start();
    donation.className = 'show';
    start.className = 'btn active';
    document.body.className = 'active';
  }


});
