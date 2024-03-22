module.exports = `
<p b b1>
<p b b2>
<p b b3>
<p b b4>
<p h>
<p t>
<style>
  * {
    background: #000;
    margin: 0;
  }
  p {
    position: absolute;
    background: #fff;
    transform: rotate(var(--r));
  }
  [h] {
    top: 100px;
    left: 115px;
    width: 150px;
    height: 100px;
    border-radius: 60px;
    border: 10px solid;
  }
  [h]:before,
  [h]:after {
    content: "";
    position: absolute;
    top: 25px;
    height: 50px;
    width: 40px;
    background: #000;
    border-radius: 50%;
  }
  [h]:before {
    left: 25px;
    transform: rotate(60deg);
  }
  [h]:after {
    right: 25px;
    transform: rotate(-60deg);
  }
  [t] {
    top: 220px;
    width: 15px;
    height: 20px;
    background: #fff;
    left: 173px;
    box-shadow: 20px 0 #fff, 40px 0 #fff;
  }
  [b] {
    width: 20px;
    height: 18px;
  }
  [b]:before,
  [b]:after {
    content: "";
    position: absolute;
    top: -20px;
    height: 25px;
    width: 25px;
    background: #fff;
    border-radius: 50%;
  }
  [b]:before {
    left: -10px;
  }
  [b]:after {
    right: -10px;
  }
  [b1] {
    top: 105px;
    left: 114px;
    --r: -45deg;
  }
  [b2] {
    top: 105px;
    right: 114px;
    --r: 45deg;
  }
  [b3] {
    top: 197px;
    right: 114px;
    --r: 135deg;
  }
  [b4] {
    top: 197px;
    left: 114px;
    --r: -135deg;
  }
</style>
`;
