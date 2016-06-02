import test from 'ava';
import float from 'float';
import abCalculator from '../src/main';

// http://www.mathcelebrity.com/zcritical.php?a=+0.01&pl=Calculate+Critical+Z+Value
const Z_VALUE = {
  '0.01': -2.3263,
  '0.1': -1.2816,
  '0.19': -0.8779,
  '0.5': 0,
  '0.69': 0.4959,
  '0.97': 1.8808,
  '0.995': 2.5758
}
const PRECISION = 4;

test('Z-value 0.01', t => {
  t.is(float.round(abCalculator._computeCriticalNormalZValue(0.01), PRECISION), Z_VALUE['0.01']);
});

test('Z-value 0.1', t => {
  t.is(float.round(abCalculator._computeCriticalNormalZValue(0.1), PRECISION), Z_VALUE['0.1']);
});

test('Z-value 0.19', t => {
  t.is(float.round(abCalculator._computeCriticalNormalZValue(0.19), PRECISION), Z_VALUE['0.19']);
});

test('Z-value 0.5', t => {
  t.is(float.round(abCalculator._computeCriticalNormalZValue(0.5), PRECISION), Z_VALUE['0.5']);
});

test('Z-value 0.69', t => {
  t.is(float.round(abCalculator._computeCriticalNormalZValue(0.69), PRECISION), Z_VALUE['0.69']);
});

test('Z-value 0.97', t => {
  t.is(float.round(abCalculator._computeCriticalNormalZValue(0.97), PRECISION), Z_VALUE['0.97']);
});

test('Z-value 0.995', t => {
  t.is(float.round(abCalculator._computeCriticalNormalZValue(0.995), PRECISION), Z_VALUE['0.995']);
});