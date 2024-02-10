module.exports = `
<p><p><p a><p b><p b><p c><p d>
<style>
  * {
    background: var(--b, #161616);
    margin: 0;
  }
  p {
    position: fixed;
    --b: #EBAE11;
    height: 30px;
    width: 60px;
    border-radius: 0 0 9in 9in;
    top: 160px;
    left: 137px;
    rotate: 16deg;
  }
  p + p {
    rotate: -16deg;
    left: 203px;
  }
  [a] {
    height: 56px;
    width: 80px;
    rotate: 0deg;
    left: 160px;
    --b: linear-gradient(90deg, #FFF 50%, 0, #FFDEB9);
  }
  [b] {
    rotate: 60deg;
    top: 134px;
    left: 142px;
    & + [b] {
      rotate: -60deg;
      left: 198px;
    }
  }
  [c] {
    height: 60px;
    width: 60px;
    border-radius: 0 9in;
    rotate: 45deg;
    top: 96px;
    left: 170px;
  }
  [d] {
    rotate: 0deg;
    height: 10px;
    width: 20px;
    --b: #161616;
    top: 196px;
    left: 190px;
  }
</style>
`;
