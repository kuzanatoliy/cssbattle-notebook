module.exports = `
<dl r><dl><dl>
<style>
  * {
    background: var(--b, #343848);
    [r] {
      rotate: 90deg;
    }
    * {
      --b: #E25C57;
      margin: 50px -50px 210px;
      dl {
        margin: 0;
        height: 40px;
        dl {
          --b: #343848;
          margin: 0 150px;
          box-shadow: 0 0 0 40px #343848;
          dl {
            --b: #F4DA64;
            margin: 0 80px;
            rotate: -45deg;
            color: #F4DA64;
            box-shadow: 28px 85px, 85px 28px;
          }
        }
      }
    }
  }
</style>
`;
