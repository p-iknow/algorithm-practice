
function timeConversion(s) {
   const time = s.substring(0,8).split(":");
   const format = s.substring(8);
   let result;
   if( time[0] === "12" ) time[0] = "00"; 
   if( format === "PM" ) time[0] = String(parseInt(time[0]) + 12)
   return time.join(":") 
}
