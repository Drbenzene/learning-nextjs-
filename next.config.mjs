/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // cacheComponents: true
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cloudinary.com',
        port: '',
        pathname: '*',
      },
      {
        protocol: 'https',
        hostname: 'img-s-msn-com.akamaized.net',
        pathname: '/**',
      },
    ]
  }
};

export default nextConfig;


// SERVER AND CLIENT COMPONENTTS 

// ALGORITM QUESTIONS 

// Given a string s containing just the characters
//  '(', ')', '{', '}', '[' and ']', 
// determine if the input string 
// is valid (properly closed and nested).
// Example:
// Input: s = "({[]})" → Output: true
// Input: s = "([)]" → Output: false