module.exports = `
<div><div><p a><p b><p c>
<style>
  * {
    background: var(--b, #6592CF);
    box-shadow: inset 0 0 0 10px var(--s, #6592CF);
    border-radius: 99q;
    position: relative;
  }
  body {
    margin: 75px 115px 55px;
  }
  div {
    width: 100%;
    height: 100%;
    --s: #243D83;
    overflow: hidden;
  }
  div > div {
    width: 70%;
    top: 125px;
    left: 25px;
  }
  p {
    position: fixed;
    width: 30px;
    height: 30px;
    --b: #243D83;
    --s: #6592CF;
    border: solid 10px #243D83;
  }
  [a] {
    top: 39px;
    left: 175px;
  }
  [b] {
    top: 79px;
  }
  [c] {
    top: 149px;
  }
  p + p {
    left: 105px;
    -webkit-box-reflect: right 90px;
  }
</style>
`;
