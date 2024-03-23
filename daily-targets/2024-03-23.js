module.exports = `
<p b e><p><p b><p c><p b><p><p b e>
<style>
  * {
    background: var(--b, #5F133F);
    margin: 0;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    --b: #B04183;
    width: 50px;
    height: 80px;
  }
  [c] {
    height: 120px;
    width: 100px;
  }
  [b] {
    border-radius: 9in;
    width: 20px;
    height: 160px;
    --b: #F7BED9;
  }
  [e] {
    width: 10px;
    height: 100px;
  }
</style>
`;
