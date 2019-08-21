import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = option => {
  // console.log(option)
  // return {
  //   name: 'hangfeng'
  // }
  const template = {
    "str|2-4": "hangfeng",
    "name|5": "hang",
    "age|+2": 18,
    "num|4-10": 0,
    "float|3-10.2-5": 0,
    "bool|1": true,
    "obj|2": {
      a: "aa",
      b: "bb",
      c: "cc"
    },
    "obj1|1-2": {
      a: "aa",
      b: "bb",
      c: "cc"
    },
    "arr|2-4": [1, 2, 3],
    "arr2|2": ["a", "b"],
    func: () => {
      return "this is created by function";
    },
    reg: /[1-9][a-z]/,
    email: Random.email(),
    email1: Mock.mock("@email"),
    range: Random.range(3, 6, 1),
    date: Random.date("yyyy-MM-dd"),
    time: Random.time("hh:mm"),
    dateTime: Random.datetime("yyyy-MM-dd hh:mm"),
    now: Random.now('hour', 'yyyy-MM-dd a hh:mm'),
    img: Random.image("100x200", '#0f0', 'hangfeng'),
    img_base64: Random.dataImage(),
    cname: Random.cname(),
    region: Random.region(),
    province: Random.province(),
    city: Random.city(true),
    county: Random.county(true),
    zip: Random.zip()
  };

  return Mock.mock(template)

}
