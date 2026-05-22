export interface Env {
  DB: D1Database;
  ASSETS: R2Bucket;
}

const jsonHeaders = {
  'content-type': 'application/json; charset=utf-8',
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET,POST,OPTIONS',
  'access-control-allow-headers': 'content-type',
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: jsonHeaders });
    }

    const url = new URL(request.url);

    if (url.pathname === '/api/news' && request.method === 'GET') {
      const { results } = await env.DB.prepare(
        'SELECT id, locale, title, summary, cover_key AS coverKey, published_at AS publishedAt FROM news ORDER BY published_at DESC LIMIT 12',
      ).all();
      return Response.json({ items: results }, { headers: jsonHeaders });
    }

    if (url.pathname === '/api/inquiries' && request.method === 'POST') {
      const payload = await request.json<{
        name?: string;
        email?: string;
        message?: string;
        locale?: string;
      }>();

      if (!payload.name || !payload.email || !payload.message) {
        return Response.json({ error: 'Missing required fields' }, { status: 400, headers: jsonHeaders });
      }

      const id = crypto.randomUUID();
      await env.DB.prepare(
        'INSERT INTO inquiries (id, name, email, message, locale, created_at) VALUES (?, ?, ?, ?, ?, ?)',
      )
        .bind(id, payload.name, payload.email, payload.message, payload.locale ?? 'en', new Date().toISOString())
        .run();

      await env.ASSETS.put(
        `inquiries/${id}.json`,
        JSON.stringify({ id, ...payload, createdAt: new Date().toISOString() }, null, 2),
        { httpMetadata: { contentType: 'application/json' } },
      );

      return Response.json({ ok: true, id }, { headers: jsonHeaders });
    }

    return Response.json({ error: 'Not found' }, { status: 404, headers: jsonHeaders });
  },
};
