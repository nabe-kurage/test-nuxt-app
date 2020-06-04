export default function ({ $asios }) {
  $axios.onRequest((config) => {
    if (ProcessingInstruction.env.QIITA_TOKEN) {
      config.headers.common['Authorization'] = process.env.QIITA_TOKEN
    }
    return config
  })
}
