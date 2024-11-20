// middleware.js
import { NextResponse } from 'next/server'

// Convert base64 to text
function decodeBase64(base64String) {
  try {
    return atob(base64String);
  } catch {
    return '';
  }
}

export function middleware(request) {
  const authHeader = request.headers.get('authorization');

  if (!authHeader) {
    return new NextResponse(null, {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  const base64Credentials = authHeader.split(' ')[1] || '';
  const credentials = decodeBase64(base64Credentials);
  const [username, password] = credentials.split(':');

  // Replace with your desired credentials
  if (username === 'admin' && password === 'admin123') {
    return NextResponse.next();
  }

  return new NextResponse(null, {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: '/admin/:path*'
}
