// 415 leetcode.com/problems/defanging-an-ip-address/submissions/

/**
 * @param {string} address
 * @return {string}
 */
https: const defangIPaddr = address => {
  return address.replace(/\./g, "[.]");
};
