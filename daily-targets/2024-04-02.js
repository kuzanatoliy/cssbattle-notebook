module.exports = `
<p>
<style>
  * {
    background: var(--b, linear-gradient(#90D3A6 135px, 0, #194E29 165px, 0, #90D3A6));
  }
  * * {
    --b: repeating-linear-gradient(90deg, #194E29 0, #194E29 30px, 0, #90D3A6 60px);
    margin: 50px 125px;
  }
  p {
    height: 30px;
    margin: 0;
    --b: #194E29;
    width: 140%;
    border-radius: 9in;
    position: relative;
    left: -30px;
    -webkit-box-reflect: below 35vw;
  }
</style>
`;
