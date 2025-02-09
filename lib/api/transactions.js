/**
 * @module transactions
 */

"use strict";

module.exports = {
  /**
   * Gets details of a transaction.
   * @param {Object} params    Parameters object
   * @param {String} params.id Id of the requested transaction, required
   * @return {Promise}         Promise; if fulfilled returns object, which contains requested transaction; if rejected returns APIerror.
   */
  get: function (params) {
    const client = this;
    params = params || {};
    if (!params.hasOwnProperty("id")) {
      throw new Error("id is required");
    }

    var url = "/v2/transactions/" + params.id;

    var qs = Object.assign({}, params);
    delete qs.id;

    var promise = client.request({
      url: url,
      method: "GET",
      qs: qs,
    });

    return promise;
  },

  /**
   * Finds transactions matching the search criteria for the active user.
   * @param {Object} params Object, which contains parameters of the sought transactions
   * @return {Promise}      Promise; if fulfilled returns object, which contains array of found transactions, as well as pagination information; if rejected returns APIerror.
   */
  find: function (params) {
    const client = this;
    params = params || {};
    var url = "/v2/transactions/find";

    var promise = client.request({
      url: url,
      method: "GET",
      qs: params,
    });

    return promise;
  },

  getSender: function (params) {
    const client = this;
    params = params || {};
    if (!params.hasOwnProperty("id")) {
      throw new Error("id is required");
    }

    var url = "/v2/transactions/sender/" + params.id;

    var promise = client.request({
      url: url,
      method: "GET",
      qs: params,
    });

    return promise;
  },
};
