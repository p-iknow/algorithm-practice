//leetcode.com/problems/defanging-an-ip-address/submissions/

https: /**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = address => {
  return address.replace(/\./g, "[.]");
};
