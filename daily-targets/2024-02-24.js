module.exports = `
<p b><p c><p a b><p c><p a b><p d>
<style>
  * {
    background: var(--b, #9ED7F8);
  }
  * * {
    --b: #277292;
    margin: 90px 50px;
    border-radius: 5vw;
  }
  p {
    --b: #FFF;
    height: 20px;
    width: 20px;
    position: relative;
    inset: 15px;
    margin: 0 15px 15px 0;
    float: left;
  }
  [a] {
    clear: left;
  }
  [b] {
    width: 40px;
    -webkit-box-reflect: right 190px;
  }
  [c] {
    color: #FFF;
    box-shadow: 35px 0, 70px 0, 35vh 0, 35vw 0;
  }
  [d] {
    width: 160px;
  }
</style>
`;
