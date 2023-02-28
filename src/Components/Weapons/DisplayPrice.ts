const HandleDisplayPrice = (ticketValue: number) => {
    let str = ticketValue.toString();
    let result = "";
    while (str.length > 0) {
      result = "," + str.substring(str.length, str.length - 3) + result;
      str = str.substring(0, str.length - 3);
    }
    return result.slice(1);
  };
  export default HandleDisplayPrice;