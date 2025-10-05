export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body || {};

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Email and password required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Simple demo check; replace with real verification
    const isValid = typeof email === 'string' && typeof password === 'string' && password.length >= 4;
    if (!isValid) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Dummy JWT payload (do NOT use in production)
    const token = Buffer.from(JSON.stringify({ sub: email, iat: Date.now() / 1000 })).toString('base64url');

    return new Response(JSON.stringify({ token, user: { email } }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Bad Request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


