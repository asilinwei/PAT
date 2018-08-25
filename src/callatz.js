/**
 * 2018-08-25
 * @LinWei
 *
 * callatz:
 * 对任何一个自然数n，如果它是偶数，那么把它砍掉一半；如果它是奇数，那么把(3n+1)砍掉一半。
 * 这样一直反复砍下去，最后一定在某一步得到n=1。需要多少步（砍几下）才能得到n=1？ 返回步数。
 *
 * Syntax:
 * callatz(n)
 *
 * Arguments:
 * n(number): 自然数n。
 *
 * Return:
 * 返回步数。
 *
 * For example:
 *
 * callatz(3)
 * // => 5
 *
 * callatz(3.4)
 * // => 5
 * // 忽略小数点。
 *
 * callatz(-3)
 * // => NaN
 *
 */

if(!window.callatz){
	var callatz=(function(){
		"use strict";

		var typeOf=function(value){
			return typeof value;
		};

		// check if it is number.
		var isNumber=function(value){
			return typeOf(value)==='number'&&isFinite(value);
		};

		var step=function(num){
			var count=0;
			while(num!==1){
				if(!(num%2)){
					num/=2;
				} else{
					num=(3*num+1)/2;
				}
				count+=1;
			}
			return count;
		};

		var error=function(type,message){
			throw {
				type:type,
				message:message
			};
		};

		return function(num){
			if(isNumber(num)){
				num=Math.floor(num);
				return num>=1?step(num):NaN;
			}
			error('ArgsError','Not number.');
		};

	})();
}