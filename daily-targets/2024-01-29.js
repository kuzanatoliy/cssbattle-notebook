module.exports = `
<style>
  * {
    background: var(--b, #6A1368);
  }
  * * {
    --b: #F7BED9;
    margin: 60px;
    border-radius: 5vw;
  }
  p {
    --b: #A94EA4;
    margin: 0;
    height: 100%;
    clip-path: polygon(100% 0, 0 0, 0 50%, 10vw 50%, 30vh 50vh, 190px 10vh, 60vw 50%, 100% 50%);
  }
</style>
`;
