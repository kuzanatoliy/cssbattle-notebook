module.exports = `
<p c><p a><p b><p>
<style>
  * {
    background: var(--b, #024817);
    position: fixed;
    margin: 0;
    * {
      --b: #48BF7D;
      inset: 155px 150px 95px;
    }
    [a] {
      --b: #25834A;
      inset: 115px 50px 105px;
    }
    [b] {
      inset: 80px 150px 145px;
      border-radius: 9in 9in 0 0;
    }
    p {
      inset: 140px 150px 130px;
      border-radius: 50%;
    }
    [c] {
      inset: 190px 150px 80px;
    }
  }
</style>
`;
