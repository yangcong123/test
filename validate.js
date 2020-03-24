export function isvalidPhone(str) {
 	const reg = /^(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$/;
  return reg.test(str)
}

export function isvalidEmail(str) {
  const reg2 = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return reg2.test(str)
}

export function isvalidTelephone(str) {
  const reg3 = /^((0\d{2,3}\d{7,8})|(1[3567849]\d{9}))$/
  return reg3.test(str)
}

export function isCardID(str) {
  const reg4 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return reg4.test(str)
}

export function isPostalCode(str) {
  const reg5 = /^[0-9]{6}$/
  return reg5.test(str)
}

export function isBankAccountNum(str) {
  const reg6 = /^[0-9]*$/
  return reg6.test(str)
}

export function isValidUrl(str) {
  const reg7 = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/
  return reg7.test(str)
}

export function isBusinessLicence(str) {
  const reg8 = /^[1-9A-GY]{1}[1239]{1}[1-5]{1}[0-9]{5}[0-9A-Z]{10}$/
  return reg8.test(str)
}

export function isUscc(str) {
  const reg9 = /^[0-9A-Z]{18}$/
  return reg9.test(str)
}

// 银行联行号
export function isBankNo(str) {
  const reg10 = /^[0-9]{12}$/
  return reg10.test(str)
}
//费率

export function isFee(str) {
  const reg11 = /^\d+(\.\d+)?$/
  return reg11.test(str)
}
//手续费
export function isPayFee(str) {
  const reg12 = /^([1-9]\d*|0)(\.\d{1,5})?$/
  return reg12.test(str)
}
//密码
export function isPassword(str) {
  const reg13 = /^[0-9a-z]*$/
  return reg13.test(str)
}


//排序
export function isSorting(str) {
  const reg14 = /^[0-9]*$/
  return reg14.test(str)
}

//名字(限中文)
export function isName(str) {
  const reg15 = /^[\u4E00-\u9FA5]*$/
  return reg15.test(str)
}
//数字，字母，中文
export function isCont(str) {
  const reg16 = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/
  return reg16.test(str)
}
//用户名
export function isUserName(str) {
  const reg17 = /^[0-9a-zA-Z]*$/
  return reg17.test(str)
}
