export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');

  try {
    const response = await fetch('https://api.tally.so/forms/D4a0ZZ', {
      headers: {
        'Authorization': 'Bearer tly-QttsqRsNEEhvfAjqAsN9uViGMtfFO5mm'
      }
    });

    if (!response.ok) {
      return res.status(200).json({ count: 47, error: 'Tally status ' + response.status });
    }

    const data = await response.json();

    // Renvoie toute la réponse pour déboguer
    const count =
      data?.submissionsCount ??
      data?.data?.submissionsCount ??
      data?.totalSubmissions ??
      data?.data?.totalSubmissions ??
      null;

    res.status(200).json({
      count: count ?? 47,
      debug: data  // ← à retirer une fois que ça marche
    });

  } catch (err) {
    res.status(200).json({ count: 47, error: err.message });
  }
}
