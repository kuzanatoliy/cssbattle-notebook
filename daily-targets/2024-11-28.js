module.exports = `
<dl><dl c><dl><dl c>
<style>
  * {
    background: var(--b, #2F5A76);
    * {
      margin: 40px 90px;
      dl {
        --b: #F5BB60;
        width: 110px;
        height: 110px;
        margin: 0;
        border-radius: 0 0 0 9in;
        transform-origin: 100% 100%;
        [c] {
          background: #F56760;
        }
        dl {
          rotate: 90deg;
        }
      }
    }
  }
</style>
`;
