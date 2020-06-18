import Mock, { Random } from 'mockjs'

export const getUserInfo = (options) => {
  let template = {
    'str|2-4': 'hf',
    "name|5": 'hf',
    "age|+8": 18,
    "num|4-10": 0,
    "obj|2": {
      name: 'hf',
      age: 28,
      sex: 'man'
    },
    email: Mock.mock('@email'),
    range: Random.range(3, 10, 2),
    date: Random.date('yyyy-mm-hh'),
    img: Random.image(),
    region: Random.region(),
    zip: Random.zip()
  }
  return Mock.mock(template)
}
