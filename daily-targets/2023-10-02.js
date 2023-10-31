module.exports = `
<p>
<style>
  * {
    background: var(--b, #B5D1FB);
  }
  body {
    --b: #230259;
    border-radius: 9in;
    margin: 75px 100px 25px;
  }
  p {
    --b: #8819F6;
    position: fixed;
    height: 150px;
    width: 300px;
    left: 50px;
    top: 9px;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
  }
</style>
`;
