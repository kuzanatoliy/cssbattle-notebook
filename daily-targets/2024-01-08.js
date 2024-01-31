module.exports = `
<p><p b><p a><p a b>
<style>
  * {
    background: var(--b, #0C2428);
  }
  body, p {
    display: flex;
    justify-content: center;
    align-items: center;
    --b: #D9D9D9;
    margin: 100px 150px;
    &:after {
      display: block;
      content: '';
      height: var(--s, 40px);
      width: var(--s, 40px);
      border-radius: 9in;
      background: #0C2428;
    }
  }
  p {
    margin: 0;
    position: fixed;
    height: 50px;
    width: 50px;
    inset: 75px 125px;
    --s: 20px;
  }
  [a] {
    top: 175px;
  }
  [b] {
    left: 225px;
  }
</style>
`;
