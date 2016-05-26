'use strict'

const Z_MAX = 6       // Maximum z value

let abCalculator = {
  /*
    Calculation formula from http://clincalc.com/Stats/SampleSize.aspx
    convertion1 (p1), convertion2 (p2) = proportion (incidence) of groups #1 and #2
    delta, Δ = |p2-p1| = absolute difference between two proportions
    α = probability of type I error (usually 0.05)
    β = probability of type II error (usually 0.2)
    z = critical Z value for a given α or β
    ratio, K = ratio of sample size for group #2 to group #1
    n1 = sample size for group #1
    n2 = sample size for group #2
  */
  getSampleSize: (data) => {
    let {alpha, beta, convertion1, convertion2, ratio, trafficMax} = abCalculator._normalizeData(data);

    let delta = Math.abs(convertion1 - convertion2);
    let q1 = 1 - convertion1;
    let q2 = 1 - convertion2;
    let pResult = (convertion1 + ratio * convertion2) / (1 + ratio);
    let qResult = 1 - pResult;
    let zValue1 = abCalculator._computeCriticalNormalZValue(1 - alpha / 2);
    let zValue2 = abCalculator._computeCriticalNormalZValue(1 - beta);

    console.log(delta, q1, q2, pResult, qResult, zValue1, zValue2);
    let n1 = Math.pow((zValue1 * Math.sqrt(pResult * qResult * (1 + 1 / ratio)) + zValue2 * Math.sqrt(convertion1 * q1 + ((convertion2 * q2) / ratio))), 2) / Math.pow(delta, 2);

    return {
      group1: parseInt(n1, 10),
      group2: parseInt(ratio * n1, 10)
    }
  },

  _normalizeData: (data) => {
    // Normalize and validate
    // console.log("Probability (Q) must be between 0 and 1.");
    return data;
  },

  // @todo in future get implementation from http://jstat.github.io/test.html ?
  // Next Z-value compute formulas from http://sampson.byu.edu/courses/z2p2z-calculator.html
  /*  The following JavaScript functions for calculating normal and
      chi-square probabilities and critical values were adapted by
      John Walker from C implementations
      written by Gary Perlman of Wang Institute, Tyngsboro, MA
      01879.  Both the original C code and this JavaScript edition
      are in the public domain.  */
  /*
    Compute critical normal z value to
    produce given p. We just do a bisection
    search for a value within CHI_EPSILON,
    relying on the monotonicity of pochisq().
  */
  _computeCriticalNormalZValue: (probability) => {
    const Z_EPSILON = 0.000001; // Accuracy of z approximation
    let minz = -Z_MAX;
    let maxz = Z_MAX;
    let zval = 0.0;
    let pval;

    if (probability < 0.0 || probability > 1.0) {
      return -1;
    }

    while ((maxz - minz) > Z_EPSILON) {
      pval = abCalculator._probabilityOfNormalZValue(zval);
      if (pval > probability) {
        maxz = zval;
      } else {
        minz = zval;
      }
      zval = (maxz + minz) * 0.5;
    }

    return zval;
  },

  /*  Probability of normal Z-value
      Adapted from a polynomial approximation in:
              Ibbetson D, Algorithm 209
              Collected Algorithms of the CACM 1963 p. 616
      Note:
              This routine has six digit accuracy, so it is only useful for absolute
              z values <= 6.  For z values > to 6.0, poz() returns 0.0.
  */
  _probabilityOfNormalZValue: (z) => {
    var y, x, w;

    if (z === 0.0) {
      x = 0.0;
    } else {
      y = 0.5 * Math.abs(z);
      if (y > (Z_MAX * 0.5)) {
        x = 1.0;
      } else if (y < 1.0) {
        w = y * y;
        x = ((((((((0.000124818987 * w -
                  0.001075204047) * w + 0.005198775019) * w -
                  0.019198292004) * w + 0.059054035642) * w -
                  0.151968751364) * w + 0.319152932694) * w -
                  0.531923007300) * w + 0.797884560593) * y * 2.0;
      } else {
        y -= 2.0;
        x = (((((((((((((-0.000045255659 * y +
                        0.000152529290) * y - 0.000019538132) * y -
                        0.000676904986) * y + 0.001390604284) * y -
                        0.000794620820) * y - 0.002034254874) * y +
                        0.006549791214) * y - 0.010557625006) * y +
                        0.011630447319) * y - 0.009279453341) * y +
                        0.005353579108) * y - 0.002141268741) * y +
                        0.000535310849) * y + 0.999936657524;
      }
    }

    return z > 0.0 ? ((x + 1.0) * 0.5) : ((1.0 - x) * 0.5);
  }
}

module.exports = abCalculator;
