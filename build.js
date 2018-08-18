console.log(process.env.REDIRECT_URL)
const fs = require('fs')

const nowConfig = {
  type: 'static',
  public: false,
  build: {
    env: [
      'REDIRECT_URL'
    ]
  },
  static: {
    redirects: [
      {
        source: '/*',
        'destination': process.env.REDIRECT_URL
      }
    ]
  }
}

fs.writeFileSync('/public/now.json', JSON.stringify(nowConfig, null, 2))
