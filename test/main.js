// задачка 1
var isPalindrome = function (x) {
  let x1 = String(x).split("").reverse().join("");
};

// задачка 2
var addStrings = function (num1, num2) {
  let sum = BigInt(num1) + BigInt(num2);
  console.log(String(sum));
};

// задачка 3
var merge = function (nums1, m, nums2, n) {
  let m1 = nums1.slice(0, m);
  let m2 = nums2.slice(0, n);
  let newNums = m1.concat(m2).sort((a, b) => a - b);
  for (let i = 0; i < newNums.length; i++) {
    nums1[i] = newNums[i];
  }
};

// задачка 4
var subtractProductAndSum = function (n) {
  let spisok = n.toString().split("").map(Number);
  let sum = spisok.reduce((acc, n) => acc + n, 0);
  let sumX = spisok.reduce((acc, n) => acc * n);
  return sumX - sum;
};

// Задачка 5
var moveZeroes = function (nums) {
  let insertPos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  for (let i = insertPos; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

// Задачка 6
var thirdMax = function (nums) {
  let nums1 = nums
    .sort((a, b) => b - a)
    .filter((item, index) => nums.indexOf(item) === index);
  if (nums1.length < 3) {
    return nums1.at(0);
  } else {
    nums1.shift();
    nums1.shift();
    return nums1[0];
  }
};

// задачка 7
var duplicateZeros = function (arr) {
  let insertPos = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      i++;
      arr.pop();
    }
  }
  return arr;
};

// задачка 8
var shuffle = function (nums, n) {
  let newsNums = [];
  let Number1 = 0;
  for (let i = 0; i < n; i += 1) {
    newsNums.splice(Number1, 0, nums[i], nums[i + n]);
    Number1 += 2;
  }
  return newsNums;
};

// задачка 9
var findKthPositive = function (arr, k) {
  let nElement = 1;
  let z = 0;
  for (k; k > 0; ) {
    if (nElement != arr[z]) {
      k--;
      n = nElement;
      nElement++;
    } else {
      nElement++;
      z++;
    }
  }
  return n;
};

//задачка 10
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};
