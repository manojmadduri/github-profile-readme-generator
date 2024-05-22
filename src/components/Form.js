import React, { useState } from 'react';

const Form = ({ setReadme }) => {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    githubUsername: '',
    currentWork: '',
    portfolio: '',
    blog: '',
    buyMeACoffee: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const readmeContent = generateReadme(formData);
    setReadme(readmeContent);
  };

  const generateReadme = (data) => {
    return `
      # Hi, I'm ${data.name}

      ![Profile views](https://komarev.com/ghpvc/?username=${data.githubUsername}&color=brightgreen)

      ## About Me
      ${data.tagline}

      ## Current Work
      ${data.currentWork}

      ## Portfolio
      [Visit my portfolio](${data.portfolio})

      ## Blogs
      [Check out my blog](${data.blog})

      ## GitHub Stats
      ![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${data.githubUsername}&show_icons=true&theme=radical)

      ## GitHub Streak Stats
      ![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${data.githubUsername}&theme=radical)

      ## Top Languages
      ![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${data.githubUsername}&layout=compact&theme=radical)

      ## Buy Me A Coffee
      [![Buy Me A Coffee](https://img.shields.io/badge/-Buy%20me%20a%20coffee-gray?style=flat&logo=buy-me-a-coffee)](${data.buyMeACoffee})
    `;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Tagline</label>
        <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">GitHub Username</label>
        <input type="text" name="githubUsername" value={formData.githubUsername} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Current Work</label>
        <input type="text" name="currentWork" value={formData.currentWork} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Portfolio</label>
        <input type="text" name="portfolio" value={formData.portfolio} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Blog URL</label>
        <input type="text" name="blog" value={formData.blog} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Buy Me A Coffee URL</label>
        <input type="text" name="buyMeACoffee" value={formData.buyMeACoffee} onChange={handleChange} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Generate README</button>
    </form>
  );
};

export default Form;
