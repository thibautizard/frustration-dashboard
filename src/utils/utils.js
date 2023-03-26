


/*

// Calcul abonnements
export function calculatesubscriptionsCumulated(subscriptions) {
  let subscriptionsCumulated = subscriptions.reduce((acc, cv) => {
    const date = new Date(cv.created);
    date.setHours(0, 0, 0, 0);
    const timestamp = date.getTime();

    if (Object.keys(acc).includes(String(timestamp))) {
      acc[timestamp]++;
    } else {
      acc[timestamp] = 1;
    }
    return acc;
  }, {});

  subscriptionsCumulated = Object.entries(subscriptionsCumulated)
    .map(([a, b]) => [+a, b])
    .sort();

  subscriptionsCumulated = subscriptionsCumulated.map(([a, b], i) => {
    let cumul = subscriptionsCumulated
      .filter((_, j) => j < i)
      .reduce((acc, [a, b]) => {
        acc = acc + b;
        return acc;
      }, 0);
    b = b + cumul;
    return [a, b];
  });
  return subscriptionsCumulated;
}

// Calcul abonnements
export function calculatesubscriptionsPriceCumulated(subscriptions) {
  let subscriptionsCumulated = subscriptions.reduce((acc, cv) => {
    const date = new Date(cv.created);
    date.setHours(0, 0, 0, 0);
    const timestamp = date.getTime();
    if (Object.keys(acc).includes(String(timestamp))) {
      acc[timestamp] += cv.net;
    } else {
      acc[timestamp] = cv.net;
    }
    return acc;
  }, {});

  subscriptionsCumulated = Object.entries(subscriptionsCumulated)
    .map(([a, b]) => [+a, b])
    .sort();

  subscriptionsCumulated = subscriptionsCumulated.map(([a, b], i) => {
    let cumul = subscriptionsCumulated
      .filter((_, j) => j < i)
      .reduce((acc, [a, b]) => {
        acc = acc + b;
        return acc;
      }, 0);
    b = Math.round(b + cumul);
    return [a, b];
  });
  return subscriptionsCumulated;
}

*/