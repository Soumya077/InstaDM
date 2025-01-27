import React from 'react';

const Login = () => {
  const handleLogin = () => {
    // Replace with your Instagram OAuth URL
    const clientId = "YOUR_INSTAGRAM_CLIENT_ID";
    const redirectUri = "YOUR_REDIRECT_URI";
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;

    window.location.href = authUrl;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Welcome to InstaAutoDM</h1>
        <p className="mb-6 text-gray-600">Log in with your Instagram account to manage your automations.</p>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Login with Instagram
        </button>
      </div>
    </div>
  );
};

export default Login;
