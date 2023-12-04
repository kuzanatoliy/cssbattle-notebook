module.exports = `
<p l><p s1><p b1><p s2><p b2><p r>
<style>
  body {
    background: #14313E;
    display: grid;
    place-items: center;
  }
  p {
    width: 20px;
    height: 150px;
    background: #FFDF00;
    position: absolute;
  }
  [l], [r] {
    width: 40px;
    border-radius: 20px 0px 0px 20px;
  }
  :before, :after {
    display: block;
    content: "";
  }
  [l] {
    translate: -117px;
  }
  [r] {
    transform: rotate(180deg) translate(-117px);
  }
  [l]:before, [r]:before {
    background: #FFDF00;
    width: 10.5px;
    height: 40px;
    border-radius: 5px 0px 0px 5px;
    translate: -10px 55px;
  }
  [l]:after, [r]:after {
    background: #14313E;
    width: 16px;
    height: 100px;
    border-radius: 10px 0px 0px 10px;
    translate: 25px -15px;
  }
  [s1], [s2] {
    height: 200px;
    transform: rotate(45deg) translate(-4px, 3px);
    border-radius: 25px;
  }
  [s1]:before, [s2]:before {
    width: 30px;
    height: 140px;
    background: #FFDF00;
    translate: -5px 5px;
  }
  [s1]:after, [s2]:after {
    width: 80px;
    height: 20px;
    background: #FFDF00;
    translate: -30px 0px;
  }
  [b1], [b2] {
    background: #FFDF00;
    width: 22px;
    height: 22px;
    z-index: 1;
    translate: -62.5px -68px;
  }
  [b2] {
    translate: 62.5px -68px;
  }
  [s2] {
    transform: rotate(-45deg) translate(4px, 3px);
  }
  [s2]:before {
    outline: 10px #14313E solid;
  }
</style>
`;
