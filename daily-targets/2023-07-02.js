module.exports = `
<p v><p v><p g><p g>
<style>
  * {
    border-radius: 99q;
    background: #0B2429;
    box-shadow: 0 0 0 var(--w, 3in) #998235;
  }
  body {
    margin: 100px;
  }
  p {
    position: fixed;
    width: 60px;
    height: 60px;
    --w: 33q;
  }
  [v] {
    top: 19px;
    left: 170px;
  }
  [v] + [v] {
    top: 189px;
  }
  [g] {
    top: 104px;
    left: 85px;
  }
  [g] + [g] {
    left: 255px;
  }
</style>
`;
