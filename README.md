<h1>STEEM/USD Price Feed Publisher</h1>

<p>This project automates the process of fetching the STEEM/USD price from Binance and submitting it to the STEEM blockchain. Designed for simplicity and ease of use, it can be deployed using either Node.js with <code>pm2</code> or within a Docker container.</p>

<p>
  <img src="https://img.shields.io/badge/node.js-CI-green.svg" alt="Node.js CI">
  <img src="https://img.shields.io/badge/docker-container-blue.svg" alt="Docker">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
</p>

<h2>🌟 Features</h2>

<ul>
  <li>Fetches the latest STEEM/USD price from Binance.</li>
  <li>Submits the price to the STEEM blockchain automatically.</li>
  <li>Easy configuration and deployment.</li>
  <li>Support for both Node.js and Docker environments.</li>
</ul>

<h2>🚀 Getting Started</h2>

<p>Follow these instructions to get the project up and running on your local machine for development and testing purposes.</p>

<h3>Prerequisites</h3>

<ul>
  <li>Node.js and npm (for running with <code>pm2</code>)</li>
  <li>Docker (for running in a Docker container)</li>
</ul>

<h3>Configuration</h3>

<p>Edit the <code>config.json</code> file to set up your environment:</p>

<pre><code>{
  "apiNode": "https://api.steemit.com",
  "username": "yourSteemitUsername",
  "privateKey": "yourPrivateKey"
}
</code></pre>

<h3>Installation</h3>

<h4>Using Node.js</h4>

<p>Clone the repository and install dependencies:</p>

<pre><code>git clone https://github.com/krishiv-g/SteemPriceFeed.git
cd SteemPriceFeed
npm install
</code></pre>

<p>Start the application with <code>pm2</code>:</p>

<pre><code>pm2 start index.js</code></pre>

<h4>Using Docker</h4>

<p>Build the Docker image:</p>

<pre><code>docker build -t pricefeed .</code></pre>

<p>Run the Docker container:</p>

<pre><code>docker run  -d pricefeed
</code></pre>

<h2>📝 Usage</h2>

<p>The application will automatically fetch the STEEM/USD price from Binance at predefined intervals and submit it to the blockchain.</p>

<h2>💡 Contributing</h2>

<p>Contributions are welcome! If you have a suggestion that would make this better, please fork the repo and create a pull request.</p>

<ul>
  <li>Fork the Project</li>
  <li>Create your Feature Branch (<code>git checkout -b feature/AmazingFeature</code>)</li>
  <li>Commit your Changes (<code>git commit -m 'Add some AmazingFeature'</code>)</li>
  <li>Push to the Branch (<code>git push origin feature/AmazingFeature</code>)</li>
  <li>Open a Pull Request</li>
</ul>

<h2>📄 License</h2>

<p>This project is licensed under the MIT License - see the LICENSE file for details.</p>

<h2>🙏 Acknowledgements</h2>

<ul>
  <li><a href="https://nodejs.org/">Node.js</a></li>
  <li><a href="https://www.docker.com/">Docker</a></li>
  <li><a href="https://binance.com/">Binance API</a></li>
  <li><a href="https://steem.com/">STEEM</a></li>
</ul>
