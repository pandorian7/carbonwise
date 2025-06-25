/**
 * Retrieves the current user object from localStorage.
 *
 * @typedef {Object} Business
 * @property {number} id - The business ID.
 * @property {string} name - The name of the business.
 * @property {string} industry - The industry of the business.
 * @property {string} location - The location of the business.
 * @property {string} country - The country of the business.
 *
 * @typedef {Object} User
 * @property {number} id - The user ID.
 * @property {string} email - The user's email address.
 * @property {string} password - The user's password.
 * @property {string} role - The user's role.
 * @property {Business} business - The business associated with the user.
 *
 * @returns {User|null} The user object if found and valid, otherwise null.
 */
function getUser() {
  try {
    const obj = JSON.parse(localStorage.getItem("token"));
    return obj;
  } catch {
    return null;
  }
}

export { getUser };
