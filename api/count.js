export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');

  try {
    const response = await fetch('https://api.tally.so/forms/D4a0ZZ', {
      headers: {
        'Authorization': 'Bearer tly-QttsqRsNEEhvfAjqAsN9uViGMtfFO5mm'
      }
    });

    if (!response.ok) throw new Error('Tally API error: ' + response.status);

    const data = await response.json();
    const count = data?.submissionsCount ?? data?.data?.submissionsCount ?? 0;

    res.status(200).json({ count });
  } catch (err) {
    res.status(200).json({ count: 47, error: err.message });
  }
}
