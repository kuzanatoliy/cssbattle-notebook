module.exports = `
<p><p a><p a><p b>
<style>
  * {
    background: #0D2328;
  }
  * * {
    background: #9ED7F8;
    margin: 25px 120px 155px;
    border-radius: 9in 9in 0 0;
  }
  p {
    position: fixed;
    height: 170px;
    width: 20px;
    margin: 70px;
  }
  [a] {
    height: 20px;
    border-radius: 9in;
    margin: 140px 0;
    & + [a] {
      margin: 140px;
    }
  }
  [b] {
    background: transparent;
    margin: 150px 0;
    height: 80px;
    width: 120px;
    scale: -1;
    border: solid 5vw #9ED7F8;
    border-bottom: none;
  }
</style>
`;
