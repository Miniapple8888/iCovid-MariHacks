function graph_prediction(cases_today, last_r_coefficients, days) {
    
    let r_coeff = last_r_coefficients[0];
    let r_coeff_deriv = 0;
    for (let i = 1; i < last_r_coefficients.length; i++) {
        r_coeff += last_r_coefficients[i];
        r_coeff_deriv += last_r_coefficients[i] - last_r_coefficients[i - 1];
    }

    r_coeff /= last_r_coefficients.length;
    r_coeff_deriv /= (last_r_coefficients.length - 1);

    results = new Array(days);
    for (let i = 0; i < days; i++) {
        cases_today *= Math.max(r_coeff, 1);
        r_coeff += r_coeff_deriv;

        results[i] = cases_today;
    }

    return results;

}

let res = graph_prediction(1000, [1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01, 1.01], 10);
console.log(res);