import './index.css'
import numeral from 'numeral';

const courseValue = numeral(1000).format('Q0.00');
console.log(`Voy a pagar ${courseValue} por este curso!`);