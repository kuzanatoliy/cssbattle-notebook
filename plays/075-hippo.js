module.exports = `
<p a s><p a s><p b><p a c><p a c><p d><p a e><p a e>
<style>
  * {
    background: #191919;
  }
  p {
    position: fixed;
    background: #000;
  }
  [s] {
    box-shadow: inset 0 0 0 5px #FE5F55;
  }
  [a] {
    width: 30px;
    height: 20px;
    border-radius: 50%;
    top: 59px;
    left: 145px;
    transform: rotate(45deg);
  }
  [a] + [a] {
    left: 225px;
    transform: rotate(-45deg);
  }
  [b] {
    width: 130px;
    height: 150px;
    background: #FE5F55;
    left: 135px;
    top: 59px;
    border-radius: 60px;
  }
  [c] {
    width: 10px;
    height: 10px;
    left: 160px;
    top: 109px;
  }
  [c] + [c] {
    left: 230px;
  }
  [d] {
    width: 150px;
    height: 100px;
    background: #A64942;
    left: 125px;
    top: 129px;
    border-radius: 60px 60px 50px 50px;
  }
  [e] {
    transform: rotate(-45deg);
    top: 154px;
  }
  [e] + [e] {
    transform: rotate(45deg);
  }
</style>
`;
