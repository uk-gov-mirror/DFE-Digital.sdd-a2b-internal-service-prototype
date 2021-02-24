/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"opening-date": "Tuesday 21 March 2021",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {


   /*task list tags */
   "main-status": "Newly assigned",

"overview-status": "Not started",
"general-info-status" : "Not started"


  /* overview */
  "opening-date": "Tuesday 21 March 2021",
  "aorequired": "Yes",

    /* general info */
  "viability": "Yes",
  "deficit": "No",
  "diocesan": "Yes",
  "distance": "20.1 miles"

}
