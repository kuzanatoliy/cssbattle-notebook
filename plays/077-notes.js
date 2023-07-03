module.exports = `
<div><p><p></div><div><p><p l></div><div c><p><p></div><div><p><p><p s></div>
<style>
  body {
    margin: 170px 55px;
    display: flex;
    gap: 20px;
    background: #191919;
  }
  div {
    position: relative;
    width: 50px;
    height: 40px;
    border-radius: 50%;
    background: #FE5F55;
  }
  [c] {
    background: #A64942;
  }
  p {
    position: absolute;
    width: 10px;
    height: 104px;
    background: inherit;
    right: 0;
    bottom: 0;
  }
  p + p {
    height: 10px;
    width: 30px;
    bottom: 94px;
    right: -30px;
  }
  [l] {
    right: 10px;
  }
  [s] {
    bottom: 74px;
  }
</style>
`;
