// src/utils/dateUtils.js

/**
 * Format a date to YYYY-MM-DD
 * @param {Date} date - Date object
 * @returns {string} Formatted date
 */
function formatDate(date) {
    return date.toISOString().split('T')[0];
}

/**
 * Calculate the difference in days between two dates
 * @param {Date} startDate - Start date
 * @param {Date} endDate - End date
 * @returns {number} Difference in days
 */
function dateDifference(startDate, endDate) {
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    return Math.round((endDate - startDate) / oneDay);
}

module.exports = { formatDate, dateDifference };