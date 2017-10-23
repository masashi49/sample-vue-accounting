import Vue from 'vue';
import accounting from 'accounting';
import checkUseragent from "./components/check_user_agent";


// options.currencyに一致する利用可能なオプション
var number = 2000000;
var options = {
  symbol: "$",
  decimal: ".",
  thousand: ",",
  precision: 2,
  format: "%s%v"
};
var vm = new Vue({
  el: '#app',
  data: {
    userAgent: checkUseragent('SP'),
    accountingDefoult: accounting.formatMoney(5318008531800),
    accounitingUro: accounting.formatMoney(4999.99, "€", 2, ",", ","),
    accountingNumber: accounting.formatNumber(5318008),
    accountingOptions: accounting.formatMoney(number, [options]),
    accountingArray: accounting.formatColumn([123.5, 3456.49, 777888.99], "$ "),
    fixed: accounting.toFixed(0.615, 13),//小数点いくつまで？
    formatColumn: accounting.formatColumn([123.5, 3456.49, 777888.99, 12345678, -5432], "$ "),
    inputNumber: 0
  },
  computed: {
    computedText: function() {
      return accounting.formatNumber(this.inputNumber);
    }
  }
});