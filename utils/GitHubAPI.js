const axios = require('axios');

const githubToken = process.env.GITHUB_PAT;

/**
 * Validates the owner and repo parameters.
 *
 * @param {string} owner - The owner of the repository.
 * @param {string} repo - The name of the repository.
 * @throws {Error} If owner or repo is not a string.
 */
function validateInput(owner, repo) {
  if (typeof owner !== 'string' || typeof repo !== 'string') {
    throw new Error('Both owner and repo need to be of type string.');
  }
}

/**
 * Validates the repoData parameter.
 *
 * @param {Object} repoData - The data of the repository.
 * @throws {Error} If repoData is not an object.
 */
function validateRepoData(repoData) {
  if (typeof repoData !== 'object' || repoData === null) {
    throw new Error('repoData should be an object.');
  }
}

/**
 * Creates a URL for GitHub API request.
 *
 * @param {string} owner - The owner of the repository.
 * @param {string} repo - The name of the repository.
 * @returns {string} The URL to access the repository via GitHub API.
 */
function createUrl(owner, repo) {
  validateInput(owner, repo);
  return `https://api.github.com/repos/${owner}/${repo}`;
}

/**
 * Makes a request to the given URL and returns the data.
 *
 * @param {string} url - The URL to request data from.
 * @returns {Object} The data returned from the request.
 */
async function makeRequest(url) {
  if (!githubToken) {
    return { error: "The GITHUB_PAT environment variable is not defined. Please set this variable with your GitHub Personal Access Token." };
  }

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
      },
    });
    return { data: response.data };
  } catch (error) {
    return { error: `Error making request to ${url}: ${error.message}` };
  }
}

/**
 * Fetches and returns information about a GitHub repository.
 *
 * @param {string} owner - The owner of the repository.
 * @param {string} repo - The name of the repository.
 * @returns {Object} The data of the repository.
 */
async function getRepositoryInfo(owner, repo) {
  const url = createUrl(owner, repo);
  return makeRequest(url);
}

/**
 * Returns the owner's information of a GitHub repository.
 *
 * @param {Object} repoData - The data of the repository.
 * @returns {Object} The owner's information of the repository.
 */
function getRepoOwnerInfo(repoData) {
  validateRepoData(repoData);
  return repoData.owner;
}

/**
 * Returns the name of a GitHub repository.
 *
 * @param {Object} repoData - The data of the repository.
 * @returns {string} The name of the repository.
 */
function getRepoName(repoData) {
  validateRepoData(repoData);
  return repoData.name;
}

/**
 * Returns the description of a GitHub repository.
 *
 * @param {Object} repoData - The data of the repository.
 * @returns {string} The description of the repository, or null if not specified.
 */
function getRepoDescription(repoData) {
  validateRepoData(repoData);
  return repoData.description ? repoData.description : null;
}

/**
 * Returns the top language of a GitHub repository.
 *
 * @param {Object} repoData - The data of the repository.
 * @returns {string} The top language of the repository, or null if not available.
 */
function getRepoTopLanguage(repoData) {
    validateRepoData(repoData);
    return repoData.language || null;
}

/**
 * Returns the star count of a GitHub repository.
 *
 * @param {Object} repoData - The data of the repository.
 * @returns {number} The star count of the repository.
 */
function getRepoStarCount(repoData) {
    validateRepoData(repoData);
    return repoData.stargazers_count;
}

/**
 * Returns the fork count of a GitHub repository.
 *
 * @param {Object} repoData - The data of the repository.
 * @returns {number} The fork count of the repository.
 */
function getRepoForkCount(repoData) {
    validateRepoData(repoData);
    return repoData.forks_count;
}

/**
 * Returns the watcher count of a GitHub repository.
 *
 * @param {Object} repoData - The data of the repository.
 * @returns {number} The watcher count of the repository.
 */
function getRepoWatcherCount(repoData) {
    validateRepoData(repoData);
    return repoData.subscribers_count;
}

/**
 * Returns the license information of a GitHub repository.
 *
 * @param {Object} repoData - The data of the repository.
 * @returns {string} The license of the repository, or null if not specified.
 */
function getRepoLicenseInfo(repoData) {
    validateRepoData(repoData);
    return repoData.license ? repoData.license.spdx_id : null;
}

/**
 * Returns the creation date of a GitHub repository.
 *
 * @param {Object} repoData - The data of the repository.
 * @returns {Date} The creation date of the repository.
 */
function getRepoCreationDate(repoData) {
    validateRepoData(repoData);
    return new Date(repoData.created_at);
}

/**
 * Returns the open issues count of a GitHub repository.
 *
 * @param {Object} repoData - The data of the repository.
 * @returns {number} The open issues count of the repository.
 */
function getRepoOpenIssuesCount(repoData) {
    validateRepoData(repoData);
    return repoData.open_issues_count;
}

/**
 * Returns the default branch of a GitHub repository.
 *
 * @param {Object} repoData - The data of the repository.
 * @returns {string} The default branch of the repository.
 */
function getRepoDefaultBranch(repoData) {
  validateRepoData(repoData);
  return repoData.default_branch;
}

module.exports = {
  getRepositoryInfo,
  getRepoOwnerInfo,
  getRepoName,
  getRepoDescription,
  getRepoTopLanguage,
  getRepoStarCount,
  getRepoForkCount,
  getRepoWatcherCount,
  getRepoLicenseInfo,
  getRepoCreationDate,
  getRepoOpenIssuesCount,
  getRepoDefaultBranch
};
