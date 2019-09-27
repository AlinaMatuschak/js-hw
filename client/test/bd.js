const PRIORITY_TYPES = require('./constants');

const initialNotes = [
      {
        id: "XWaQXcbk0",
        title: "JavaScript essentials",
        body: "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
        priority: PRIORITY_TYPES.LOW
      },
      {
        id: "pkXzyRp1P",
        title: "Refresh HTML and CSS",
        body: "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
        priority: PRIORITY_TYPES.NORMAL
      },
      {
        id: "QMom9q4Ku",
        title: "Get comfy with Frontend frameworks",
        body: "First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",
        priority: PRIORITY_TYPES.NORMAL
      },
      {
        id: "k2k0UrjZG",
        title: "Winter clothes",
        body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
        priority: PRIORITY_TYPES.HIGH
      }
    ]

module.exports = initialNotes;
