export function roundNumber(numberToRound, numberOfDecimalPlaces) {
  if (numberToRound === 0) {
    return 0;
  }

  if (!numberToRound) {
    return '';
  }

  const scrubbedNumber = numberToRound.toString().replace('$', '').replace(',', '');
  return Math.round(scrubbedNumber * Math.pow(10, numberOfDecimalPlaces)) / Math.pow(10, numberOfDecimalPlaces);
}
