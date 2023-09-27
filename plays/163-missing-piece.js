module.exports = `
<p><p><p><p a>
<style>
  * {
    margin: 0;
    color: #D669EC;
    background: var(--b, #D669EC);
  }
  body {
    display: flex;
    flex-wrap: wrap;
    gap: 5vw;
    margin: 40px 90px;
  }
  p {
    --b: #FDFBF8;
    height: 100px;
    width: 100px;
  }
  [a] {
    rotate: 45deg;
    --b: none;
    box-shadow: 3px 25vw, 3px -25vw, -183q 93q, -183q -93q;
  }
</style>
`;
