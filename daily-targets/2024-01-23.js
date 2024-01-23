module.exports = `
<p><p><dl><dl>
<style>
  * {
    background: var(--b, #401653);
    margin: 0;
  }
  body {
    --b: #A94EA4;
    margin: 75px 140px 95px;
    border-radius: 9in;
  }
  p, dl {
    position: fixed;
  }
  p {
    width: 60px;
    height: 150px;
    clip-path: polygon(0 0, 0 67%, 100% 100%, 100% 40%);
    & + p {
      left: 200px;
      scale: -1 1;
    }
  }
  dl {
    --b: #F7BED9;
    height: 10px;
    width: 60px;
    border-radius: 9in;
    top: 115px;
    left: 170px;
    & dl {
      height: 70px;
      width: 10px;
      left: 195px;
    }
  }
</style>
`;
