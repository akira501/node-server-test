const express = require('express')
const cors = require('cors')
const port = 3001
const app = express()

const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`)
  console.log(`Server listening on port ${server.address().port}`)
})
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())
app.use(cors())

app.post('/auth/login', (req, res) => {
  const code = req.body.code
  console.log('Code = ' + code)
  res.json(
    {
      data: {
        "apiKey": "123"
      }
    }
  );
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/cookies/checked/false', (req, res) => {
  res.json({
    data: [
      {
        _id: '62e263319977c7001fbc49851',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a1',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49852',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a2',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49853',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a3',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49854',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a4',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49855',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a5',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49856',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a6',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49857',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a7',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49858',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a8',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49859',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a9',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
	  {
        _id: '62e263319977c7001fbc49850',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: false,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: '123',
      },
      {
        _id: '62e263609977c7001fbc498a0',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: false,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: '',
      },
    ]
  })
})

app.get('/cookies/checked/ads', (req, res) => {
  res.json({
    data: [
      {
        _id: '62e263319977c7001fbc49851',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: true,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: 'ads',
      },
      {
        _id: '62e263609977c7001fbc498a1',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: true,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: 'ads',
      },
    ]
  })
})

app.get('/cookies/checked/empty', (req, res) => {
  res.json({
    data: [
      {
        _id: '62e263319977c7001fbc49851',
        cookies: `fr=08vaDl4proJchRJB6.AWXg8lk78YBt3OkcyYk3BwbZ-nc.BiYAvq.15.AAA.0.0.Bi4mSk.AWUGr7Ow_Ww;
		presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659003699371%2C%22v%22%3A1%7D; wd=1920x1007; xs=7%3ANVJNuN1CqiXJHg%3A2%3A1650461716%3A-1%3A7313;
		c_user=100053640126205; m_pixel_ratio=1.75; sb=6gtgYq40GS-dIcq8ZB6TrgNf; datr=6gtgYmh0wrbS2aJWc4K8A4jg`,
        userId: '100053640126205',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:192.145.117.97',
        location: 'US',
        checked: true,
        createdAt: '2022-07-28T10:21:37.344Z',
        updatedAt: '2022-07-28T10:27:53.896Z',
        description: 'empty',
      },
      {
        _id: '62e263609977c7001fbc498a1',
        cookies: `presence=C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1659004096171%2C%22v%22%3A1%7D;
		fr=0nlRztG9mhcfNi4VJ.AWXioLLjBE5sbJ2p_Q5Ds2lqBVo.Bi4l6G.2o.AAA.0.0.Bi4mPk.AWUfL9gE_lw; dpr=1.100000023841858;
		xs=19%3AaEsNeX5tDKj64Q%3A2%3A1628247135%3A-1%3A5848%3A%3AAcVMqeu93RxlAExG8FF9r4GLiy-bVdxC5hgmmA_THOgS; wd=1349x657; c_user=614203427;
		datr=VhQNYZ3ZZG2m7AXkO4btEnIZ; sb=VhQNYVj72SzPpCo9QGnQCtp-`,
        userId: '614203427',
        userAgent:
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        userIp: '::ffff:119.152.132.255',
        location: 'PK',
        checked: true,
        createdAt: '2022-07-28T10:22:24.887Z',
        updatedAt: '2022-07-28T10:28:29.305Z',
        description: 'empty',
      },
    ]
  })
})