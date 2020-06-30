const merge = (nums1, m, nums2, n) => {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums[i]
      i--
      k--
    } else {
      nums1[k] = nums[j]
      j--
      k--
    }
  }
  while (j >= 0) {
    nums1[k] = nums[j]
    j--
    k--
  }
}

// // js 版本
// const mergeJs = (nums1, m, nums2, n) => {
//   nums1.splice(m, n, ...nums2.slice(n))

//   // nums1.sort((a, b) => a - b)
// }

// let arr = [1, 2, 3]
// console.log(arr.slice(0, 2));

const threeSum = (arr) => {
  let ret = []
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] > 0) break
    let j = i + 1
    let k = arr.length - 1
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++
        while (j < k && nums[j] == nums[j - 1]) {
          j++
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--
        while (j < k && nums[k] == nums[k + 1]) {
          k--
        }
      } else {
        ret.push([nums[i], nums[j], nums[k]])
        j++
        k--
        while (j < k && nums[j] == nums[j - 1]) j++
        while (j < k && nums[k] == nums[k + 1]) k--
      }
    }
  }
  return ret
}

// const validPalindrome = (s) => {
//   // if 
//   s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
//   let i = 0; j = s.length - 1
//   while(i < j && s[i] == s[j]) {
//     if (s[i] == '.' || s[j] ==)
//     i ++
//     j --
//   }
//   if (i == j ) return true
//   return false 
// }

// let s = "A man, a plan, a canal: Panama";
// s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()

// console.log(s);
// console.log(!' ');

let s = "A man, a plan, a canal: Panama";
var isPalindrome = function(s) {
  s = s.replace(/[^\.\w]/g, '').toLowerCase()
  console.log(s);
  let i = 0, j = s.length - 1
  while(i < j) {
      if (s[i] == '.' || s[j] == '.' || s[i] == s[j]) {
        i ++
        j --
      } else {
        return false
      }
  }
  return true
};
console.log(isPalindrome(s), 'amanaplanacanalpanama'.length);