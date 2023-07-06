module.exports = `
<p><p>
<style>
  * {
    background: var(--b, #191919);
    border-radius: 9in;
  }
  p {
    width: 40px;
    height: 200px;
    margin: -78px 172px;
    --b: #FE5F55;
    -webkit-box-reflect: below 40px;
  }
  p + p {
    rotate: -90deg;
    margin: -80px 52px;
    --b: #A64942;
  }
</style>
`;
