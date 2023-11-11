module.exports = `
<p a><p b><dl><a><a><a><a><a></a><p c><p d>
<style>
  * {
    background: var(--b, #3C8D3F);
    margin: 0;
  }
  dl, p {
    position: fixed;
    border-radius: var(--r, 9in);
  }
  dl {
    height: 150px;
    width: 150px;
    --b: #14F078;
    margin: 75px 125px;
    border-radius: 10px 10px 75px 75px;
    overflow: hidden;
  }
  a {
    display: block;
    height: 50px;
    width: 50px;
    rotate: 45deg;
    margin: -15px -10px;
    --b: #1A1D2F;
    float: left;
  }
  p {
    box-shadow: inset 0 0 0 10px #1A1D2F;
    --b: #FFF;
  }
  [a] {
    inset: 155px 100px 135px;
  }
  [b] {
    inset: 145px 100px 125px 290px;
    -webkit-box-reflect: left 180px;
  }
  [c] {
    inset: 145px 155px 125px 215px;
    -webkit-box-reflect: left 30px;
  }
  [d] {
    inset: 185px 180px 95px 180px;
    --r: 0 0 9in 9in;
  }
</style>
`;
