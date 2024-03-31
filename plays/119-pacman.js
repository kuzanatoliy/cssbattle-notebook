module.exports = `
<p s><p><p>
<style>
  * {
    background: var(--b, #000);
    margin: 0;
    p {
      position: fixed;
      --b: #FFF;
      color: #FFF;
      height: 10px;
      width: 10px;
      border-radius: 9in;
      top: 145px;
      left: 165px;
    }
    p + p {
      --b: #E0E246;
      height: 60px;
      width: 60px;
      top: 120px;
      left: 60px;
      clip-path: polygon(0 0, 96% 0, 46% 50%, 96% 100%, 0 100%);
    }
    p + p + p {
      --b: #C74E4E;
      left: 280px;
      border-radius: 9in 9in 0 0;
      clip-path: polygon(0 0, 100% 0, 100% 97%, 83% 78%, 66% 97%, 50% 78%, 33% 97%, 17% 78%, 0 97%);
    }
    [s] {
      box-shadow: 30px 0, 60px 0;
    }
  }
</style>
`;
