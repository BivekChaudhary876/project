import React, { useId } from 'react';

function InputBox({
	label,
	amount,
	onAmountChange, 
	onCurrencyChange,
	currencyOptions = [],
	selectCurrency = 'usd',
	amountDisable = false,
	currencyDisable = false,
	className = '',
}) {
	const amountId = useId()
	return (
		<div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
			<div className='w-1/2'>
				<label htmlFor={amountId}
					className='text-black/40 mb-2 inline-block'>{label}</label>
				<input
					id={amountId}
					className='outline-none w-full bg-transparent py-1.5'
					type='number'
					placeholder='Amount'
					disabled={amountDisable}
					value={amount}
					onChange={(e) =>
						onAmountChange && onAmountChange(Number(e.target.value))
					}
					//event is fired to change the amount and called the onAmountChnage and target to check the value
					//Number()is used to remove the string as js is notorious
				/>
			</div>
			<div className='w-1/2 flex flex-wrap justify-end text-right'>
				<p className='text-black/40 mb-2 w-full'>Currency Type</p>
				<select
					className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
					value={selectCurrency}
					onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
					disabled={currencyDisable}
				>
					{currencyOptions.map((currency) => (
						<option key={currency} value={currency}>
							{currency}
						</option>
						//Implement Key for loops in react
					))}
				</select>
			</div>
		</div>
	);
}

export default InputBox;
